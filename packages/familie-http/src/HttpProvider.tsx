import React, { createContext, PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Ressurs, ApiRessurs, ISaksbehandler } from '@navikt/familie-typer';
import { preferredAxios, håndterApiRespons } from './axios';

export type FamilieRequestConfig<SkjemaData> = AxiosRequestConfig & {
    data?: SkjemaData;
    defaultFeilmelding?: string;
    loggFeilTilSentry?: boolean;
    påvirkerSystemLaster?: boolean;
};

export type FamilieRequest = <SkjemaData, SkjemaRespons>(
    config: FamilieRequestConfig<SkjemaData>,
) => Promise<Ressurs<SkjemaRespons>>;

interface HttpContext {
    systemetLaster: () => boolean;
    request: FamilieRequest;
}

const HttpContext = createContext<HttpContext | undefined>(undefined);

interface IProps {
    fjernRessursSomLasterTimeout?: number;
    innloggetSaksbehandler?: ISaksbehandler;
    settAutentisert?: (autentisert: boolean) => void;
}

export function HttpProvider(props: PropsWithChildren<IProps>) {
    const [ressurserSomLaster, settRessurserSomLaster] = React.useState<string[]>([]);
    const { fjernRessursSomLasterTimeout = 300, innloggetSaksbehandler, settAutentisert } = props;

    const timeoutsRef = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

    const fjernRessursSomLaster = (ressursId: string) => {
        if (timeoutsRef.current[ressursId]) {
            clearTimeout(timeoutsRef.current[ressursId]);
        }

        if (fjernRessursSomLasterTimeout === 0) {
            settRessurserSomLaster(prev => prev.filter(ressurs => ressurs !== ressursId));
            return;
        }

        const timeout = setTimeout(() => {
            settRessurserSomLaster(prev => prev.filter(ressurs => ressurs !== ressursId));
            delete timeoutsRef.current[ressursId];
        }, fjernRessursSomLasterTimeout);

        timeoutsRef.current[ressursId] = timeout;
    };

    useEffect(() => {
        return () => {
            Object.values(timeoutsRef.current).forEach(timeoutId => {
                clearTimeout(timeoutId);
            });
        };
    }, []);

    const systemetLaster = () => {
        return ressurserSomLaster.length > 0;
    };

    const request: FamilieRequest = async <SkjemaData, SkjemaRespons>(
        config: FamilieRequestConfig<SkjemaData>,
    ): Promise<Ressurs<SkjemaRespons>> => {
        const ressursId = `${config.method}_${config.url}_${crypto.randomUUID()}`;
        config.påvirkerSystemLaster && settRessurserSomLaster(prev => [...prev, ressursId]);

        return preferredAxios
            .request(config)
            .then((response: AxiosResponse<ApiRessurs<SkjemaRespons>>) => {
                const responsRessurs: ApiRessurs<SkjemaRespons> = response.data;

                config.påvirkerSystemLaster && fjernRessursSomLaster(ressursId);
                return håndterApiRespons({
                    defaultFeilmelding: config.defaultFeilmelding,
                    innloggetSaksbehandler,
                    loggFeilTilSentry: config.loggFeilTilSentry,
                    ressurs: responsRessurs,
                });
            })
            .catch((error: AxiosError<ApiRessurs<SkjemaRespons>>) => {
                if (error.message.includes('401') && settAutentisert) {
                    settAutentisert(false);
                }

                config.påvirkerSystemLaster && fjernRessursSomLaster(ressursId);

                const responsRessurs: ApiRessurs<SkjemaRespons> | undefined = error.response?.data;
                return håndterApiRespons({
                    defaultFeilmelding: config.defaultFeilmelding,
                    error,
                    innloggetSaksbehandler,
                    loggFeilTilSentry: true,
                    ressurs: responsRessurs,
                });
            });
    };

    return (
        <HttpContext.Provider
            value={{
                systemetLaster,
                request,
            }}
        >
            {props.children}
        </HttpContext.Provider>
    );
}

export function useHttp() {
    const context = useContext(HttpContext);

    if (context === undefined) {
        throw new Error('useHttp må brukes innenfor HttpProvider');
    }

    return context;
}
