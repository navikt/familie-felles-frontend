import React from 'react';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import createUseContext from 'constate';
import { Ressurs, ApiRessurs, ISaksbehandler } from '@navikt/familie-typer';
import { preferredAxios, håndterApiRespons } from './axios';

export type FamilieRequestConfig<SkjemaData> = AxiosRequestConfig & {
    data?: SkjemaData;
    påvirkerSystemLaster?: boolean;
    defaultFeilmelding?: string;
};

export type FamilieRequest = <SkjemaData, SkjemaRespons>(
    config: FamilieRequestConfig<SkjemaData>,
) => Promise<Ressurs<SkjemaRespons>>;

interface IProps {
    fjernRessursSomLasterTimeout?: number;
    innloggetSaksbehandler?: ISaksbehandler;
    settAutentisert?: (autentisert: boolean) => void;
}

export const [HttpProvider, useHttp] = createUseContext(
    ({ innloggetSaksbehandler, settAutentisert, fjernRessursSomLasterTimeout = 300 }: IProps) => {
        const [ressurserSomLaster, settRessurserSomLaster] = React.useState<string[]>([]);

        const fjernRessursSomLaster = (ressursId: string) => {
            setTimeout(() => {
                settRessurserSomLaster((prevState: string[]) => {
                    return prevState.filter((ressurs: string) => ressurs !== ressursId);
                });
            }, fjernRessursSomLasterTimeout);
        };

        const systemetLaster = () => {
            return ressurserSomLaster.length > 0;
        };

        const request: FamilieRequest = async <SkjemaData, SkjemaRespons>(
            config: FamilieRequestConfig<SkjemaData>,
        ): Promise<Ressurs<SkjemaRespons>> => {
            const ressursId = `${config.method}_${config.url}`;
            config.påvirkerSystemLaster &&
                settRessurserSomLaster([...ressurserSomLaster, ressursId]);

            return preferredAxios
                .request(config)
                .then((response: AxiosResponse<ApiRessurs<SkjemaRespons>>) => {
                    const responsRessurs: ApiRessurs<SkjemaRespons> = response.data;

                    config.påvirkerSystemLaster && fjernRessursSomLaster(ressursId);
                    return håndterApiRespons({
                        ressurs: responsRessurs,
                        innloggetSaksbehandler,
                        defaultFeilmelding: config.defaultFeilmelding,
                    });
                })
                .catch((error: AxiosError) => {
                    if (error.message.includes('401') && settAutentisert) {
                        settAutentisert(false);
                    }

                    config.påvirkerSystemLaster && fjernRessursSomLaster(ressursId);

                    const responsRessurs: ApiRessurs<SkjemaRespons> = error.response?.data;
                    return håndterApiRespons({
                        ressurs: responsRessurs,
                        innloggetSaksbehandler,
                        error,
                        defaultFeilmelding: config.defaultFeilmelding,
                    });
                });
        };

        return {
            systemetLaster,
            request,
        };
    },
);
