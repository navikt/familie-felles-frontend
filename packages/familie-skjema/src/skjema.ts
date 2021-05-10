import { useState } from 'react';

import { byggHenterRessurs, byggTomRessurs, Ressurs, RessursStatus } from '@navikt/familie-typer';
import { useHttp, FamilieRequestConfig } from '@navikt/familie-http';

import {
    FeiloppsummeringFeil,
    Felt,
    FeltState,
    FieldDictionary,
    ISkjema,
    Valideringsstatus,
} from './typer';

export const useSkjema = <Felter, SkjemaRespons>({
    felter,
    skjemanavn,
}: {
    felter: FieldDictionary<Felter>;
    skjemanavn: string;
}) => {
    const { request } = useHttp();
    const [visFeilmeldinger, settVisfeilmeldinger] = useState(false);
    const [submitRessurs, settSubmitRessurs] = useState(byggTomRessurs<SkjemaRespons>());

    const alleSynligeFelter = () => {
        return Object.values(felter).filter(felt => (felt as Felt<unknown>).erSynlig);
    };

    const validerAlleSynligeFelter = (): FeltState<unknown>[] => {
        return alleSynligeFelter()
            .filter(
                felt =>
                    (felt as Felt<unknown>).valideringsstatus === Valideringsstatus.IKKE_VALIDERT,
            )
            .map(felt => {
                const unknownFelt = felt as Felt<unknown>;
                return unknownFelt.validerOgSettFelt(unknownFelt.verdi, {
                    felter,
                });
            });
    };

    const valideringErOk = () => {
        return (
            alleSynligeFelter().filter(felt => {
                const unknownFelt = felt as Felt<unknown>;
                return unknownFelt.valideringsstatus !== Valideringsstatus.OK;
            }).length === 0 && skjema.submitRessurs.status !== RessursStatus.HENTER
        );
    };

    const kanSendeSkjema = (): boolean => {
        const validerteSynligeFelter = validerAlleSynligeFelter();
        settVisfeilmeldinger(true);

        return (
            validerteSynligeFelter.filter(felt => {
                const unknownFelt = felt as Felt<unknown>;
                return unknownFelt.valideringsstatus !== Valideringsstatus.OK;
            }).length === 0 && skjema.submitRessurs.status !== RessursStatus.HENTER
        );
    };

    const nullstillSkjema = () => {
        // eslint-disable-next-line
        alleSynligeFelter().forEach((felt: unknown) => (felt as Felt<unknown>).nullstill());
        settVisfeilmeldinger(false);
    };

    const onSubmit = <SkjemaData>(
        familieAxiosRequestConfig: FamilieRequestConfig<SkjemaData>,
        onSuccess: (ressurs: Ressurs<SkjemaRespons>) => void,
        onError?: (ressurs: Ressurs<SkjemaRespons>) => void,
    ) => {
        if (kanSendeSkjema()) {
            settSubmitRessurs(byggHenterRessurs());

            request<SkjemaData, SkjemaRespons>(familieAxiosRequestConfig).then(
                (response: Ressurs<SkjemaRespons>) => {
                    settSubmitRessurs(response);
                    if (response.status === RessursStatus.SUKSESS) {
                        nullstillSkjema();
                        onSuccess(response);
                    } else {
                        onError && onError(response);
                    }
                },
            );
        }
    };

    const hentFeilTilOppsummering = (): FeiloppsummeringFeil[] => {
        return Object.values(alleSynligeFelter())
            .filter(felt => (felt as Felt<unknown>).valideringsstatus === Valideringsstatus.FEIL)
            .map(felt => {
                const typetFelt = felt as Felt<unknown>;

                return {
                    skjemaelementId: typetFelt.id,
                    feilmelding:
                        typeof typetFelt.feilmelding === 'string' ? typetFelt.feilmelding : '',
                };
            });
    };

    const skjema: ISkjema<Felter, SkjemaRespons> = {
        felter,
        visFeilmeldinger,
        skjemanavn,
        submitRessurs,
    };

    return {
        hentFeilTilOppsummering,
        kanSendeSkjema,
        nullstillSkjema,
        onSubmit,
        settSubmitRessurs,
        skjema,
        validerAlleSynligeFelter,
        valideringErOk,
    };
};
