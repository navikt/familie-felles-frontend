import React from 'react';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import createUseContext from 'constate';
import { Ressurs, ApiRessurs, ISaksbehandler } from '@navikt/familie-typer';
import { preferredAxios, håndterApiRessurs } from './axios';

export type FamilieRequestConfig<SkjemaData> = AxiosRequestConfig & {
    data?: SkjemaData;
    påvirkerSystemLaster?: boolean;
};

export type FamilieRequest = <SkjemaData, SkjemaRespons>(
    config: FamilieRequestConfig<SkjemaData>,
) => Promise<Ressurs<SkjemaRespons>>;

interface IProps {
    settAutentisert?: (autentisert: boolean) => void;
    innloggetSaksbehandler?: ISaksbehandler;
}

export const [HttpProvider, useHttp] = createUseContext(
    ({ innloggetSaksbehandler, settAutentisert }: IProps) => {
        const [ressurserSomLaster, settRessurserSomLaster] = React.useState<string[]>([]);

        const fjernRessursSomLaster = (ressursId: string) => {
            setTimeout(() => {
                settRessurserSomLaster((prevState: string[]) => {
                    return prevState.filter((ressurs: string) => ressurs !== ressursId);
                });
            }, 300);
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
                    return håndterApiRessurs(responsRessurs, innloggetSaksbehandler);
                })
                .catch((error: AxiosError) => {
                    if (error.message.includes('401') && settAutentisert) {
                        settAutentisert(false);
                    }

                    config.påvirkerSystemLaster && fjernRessursSomLaster(ressursId);

                    const responsRessurs: ApiRessurs<SkjemaRespons> = error.response?.data;
                    return håndterApiRessurs(responsRessurs, innloggetSaksbehandler);
                });
        };

        return {
            systemetLaster,
            request,
        };
    },
);
