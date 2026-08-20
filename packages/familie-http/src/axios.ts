import axios, { AxiosError } from 'axios';

import { Ressurs, RessursStatus, ApiRessurs, ISaksbehandler } from '@navikt/familie-typer';

axios.defaults.baseURL = window.location.origin;
export const preferredAxios = axios;

export interface ApiRespons<T> {
    defaultFeilmelding?: string;
    error?: AxiosError;
    innloggetSaksbehandler?: ISaksbehandler;
    loggFeilTilSentry?: boolean;
    ressurs?: ApiRessurs<T>;
}

export const håndterApiRespons = <T>(apiRespons: ApiRespons<T>): Ressurs<T> => {
    const { defaultFeilmelding = 'En feil har oppstått!', ressurs } = apiRespons;

    let typetRessurs: Ressurs<T>;

    if (!ressurs) {
        return {
            frontendFeilmelding: defaultFeilmelding,
            status: RessursStatus.FEILET,
        };
    }

    switch (ressurs.status) {
        case RessursStatus.SUKSESS:
            typetRessurs = {
                data: ressurs.data,
                status: RessursStatus.SUKSESS,
            };
            break;
        case RessursStatus.IKKE_TILGANG:
            typetRessurs = {
                frontendFeilmelding: ressurs.frontendFeilmelding ?? 'Ikke tilgang',
                status: RessursStatus.IKKE_TILGANG,
            };
            break;
        case RessursStatus.FEILET: {
            const frontendFeilmelding = ressurs.frontendFeilmelding ?? defaultFeilmelding;
            const frontendFeilmeldingMedEllerUtenCallId = ressurs.callId
                ? `${frontendFeilmelding} (CallId: ${ressurs.callId})`
                : frontendFeilmelding;

            typetRessurs = {
                frontendFeilmelding: frontendFeilmeldingMedEllerUtenCallId,
                status: RessursStatus.FEILET,
            };

            break;
        }
        case RessursStatus.FUNKSJONELL_FEIL:
            typetRessurs = {
                frontendFeilmelding:
                    ressurs.frontendFeilmelding ?? 'En funksjonell feil har oppstått!',
                status: RessursStatus.FUNKSJONELL_FEIL,
            };
            break;
        default:
            typetRessurs = {
                frontendFeilmelding: defaultFeilmelding,
                status: RessursStatus.FEILET,
            };
            break;
    }

    return typetRessurs;
};
