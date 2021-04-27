/// <reference types="react" />
import { Ressurs, RessursStatus } from '@navikt/familie-typer';
import { FamilieRequestConfig } from '@navikt/familie-http';
import { FeiloppsummeringFeil, FieldDictionary, ISkjema } from './typer';
export declare const useSkjema: {
    <Felter, SkjemaRespons>({ felter, skjemanavn, }: {
        felter: FieldDictionary<Felter>;
        skjemanavn: string;
    }): {
        hentFeilTilOppsummering: () => FeiloppsummeringFeil[];
        kanSendeSkjema: () => boolean;
        nullstillSkjema: () => void;
        onSubmit: <SkjemaData>(familieAxiosRequestConfig: FamilieRequestConfig<SkjemaData>, onSuccess: (ressurs: Ressurs<SkjemaRespons>) => void, onError?: ((ressurs: Ressurs<SkjemaRespons>) => void) | undefined) => void;
        settSubmitRessurs: import("react").Dispatch<import("react").SetStateAction<{
            status: RessursStatus.IKKE_HENTET;
        } | {
            status: RessursStatus.HENTER;
        } | {
            frontendFeilmelding: string;
            status: RessursStatus.IKKE_TILGANG;
        } | {
            frontendFeilmelding: string;
            status: RessursStatus.FEILET;
        } | {
            frontendFeilmelding: string;
            status: RessursStatus.FUNKSJONELL_FEIL;
        } | {
            data: SkjemaRespons;
            status: RessursStatus.SUKSESS;
        }>>;
        skjema: ISkjema<Felter, SkjemaRespons>;
        validerAlleSynligeFelter: () => void;
        valideringErOk: () => boolean;
    };
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            felter: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            skjemanavn: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
