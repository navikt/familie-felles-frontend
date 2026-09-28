import deepEqual from 'deep-equal';
import { type ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
    type Avhengigheter,
    defaultValidator,
    type Felt,
    type FeltState,
    type NavBaseSkjemaProps,
    type NavInputProps,
    type ValiderFelt,
    Valideringsstatus,
} from './typer';
import { genererId, isChangeEvent } from './utils';

/**
 * Konfigurasjon for å opprette et felt.
 *
 * @verdi verdien til feltet med generisk Verdi type
 * @valideringsfunksjon optional valideringsfunksjon på feltet
 * @skalFeltetVises optional visningsfunksjon. Kan brukes dersom skjemaet
 * skjuler felter for bruker under gitte omstendigheter
 * @avhengigheter avhengighetene som brukes til validering og vis/skjul
 */
export interface FeltConfig<Verdi> {
    avhengigheter?: Avhengigheter;
    feltId?: string;
    skalFeltetVises?: (avhengigheter: Avhengigheter) => boolean;
    valideringsfunksjon?: ValiderFelt<Verdi>;
    verdi: Verdi;
    nullstillVedAvhengighetEndring?: boolean;
}

export const useFelt = <Verdi = string>({
    avhengigheter = {},
    feltId,
    skalFeltetVises,
    valideringsfunksjon = defaultValidator,
    verdi,
    nullstillVedAvhengighetEndring = true,
}: FeltConfig<Verdi>): Felt<Verdi> => {
    const [id] = useState(feltId ? feltId : genererId());
    const initialFeltState = {
        feilmelding: '',
        valider: valideringsfunksjon,
        valideringsstatus: Valideringsstatus.IKKE_VALIDERT,
        verdi,
    };

    const [feltState, settFeltState] = useState<FeltState<Verdi>>(initialFeltState);
    const [erSynlig, settErSynlig] = useState(skalFeltetVises ? skalFeltetVises(avhengigheter) : true);

    const nullstill = () => {
        settFeltState(initialFeltState);
    };

    // tslint:disable-next-line:no-shadowed-variable
    const validerOgSettFelt = (verdi: Verdi = feltState.verdi): FeltState<Verdi> => {
        const validertFelt: FeltState<Verdi> = feltState.valider(
            {
                ...feltState,
                verdi,
            },
            avhengigheter,
        );

        if (!deepEqual(feltState, validertFelt)) {
            settFeltState(validertFelt);
        }

        return validertFelt;
    };

    const hentAvhengighetArray = () => {
        return avhengigheter
            ? Object.values(avhengigheter).map((avhengighet: unknown) => {
                  if (avhengighet instanceof Object && 'valideringsstatus' in avhengighet) {
                      return (avhengighet as Felt<unknown>).verdi;
                  } else {
                      return avhengighet;
                  }
              })
            : [];
    };

    /**
     * Basert på avhengighetene til feltet håndterer vi vis/skjul
     * og nullstilling på feltet.
     */
    // biome-ignore lint/correctness/useExhaustiveDependencies: skal kun kjøre på nytt når avhengighetsverdiene faktisk endrer seg, ikke ved enhver re-render av funksjonene/propsene rundt
    useEffect(() => {
        if (skalFeltetVises) {
            if (nullstillVedAvhengighetEndring && feltState.valideringsstatus !== Valideringsstatus.IKKE_VALIDERT) {
                nullstill();
            }

            settErSynlig(skalFeltetVises(avhengigheter));
        } else {
            validerOgSettFelt();
        }
    }, [...hentAvhengighetArray()]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: validerOgSettFelt lages på nytt for hver render og skal bevisst ikke være med i avhengighetslisten
    const onChange = useCallback(
        // tslint:disable-next-line:no-shadowed-variable
        (verdi: Verdi | ChangeEvent) => {
            const normalisertVerdi = isChangeEvent(verdi) ? verdi.target.value : verdi;

            validerOgSettFelt(normalisertVerdi as Verdi);
        },
        // biome-ignore lint/correctness/useExhaustiveDependencies: validerOgSettFelt lages på nytt for hver render og skal bevisst ikke være med i avhengighetslisten
        [validerOgSettFelt, settFeltState],
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: skal kun oppdateres når validerOgSettFelt endres, ikke ved enhver render
    const hentNavInputProps = useCallback(
        (visFeilmelding: boolean): NavInputProps<Verdi> => ({
            feil: visFeilmelding ? feltState.feilmelding : undefined,
            error: visFeilmelding ? feltState.feilmelding : undefined,
            id,
            onChange,
            value: feltState.verdi,
        }),
        [validerOgSettFelt, settFeltState],
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: skal kun oppdateres når validerOgSettFelt endres, ikke ved enhver render
    const hentNavBaseSkjemaProps = useCallback(
        (visFeilmelding: boolean): NavBaseSkjemaProps<Verdi> => ({
            feil: visFeilmelding ? feltState.feilmelding : undefined,
            error: visFeilmelding ? feltState.feilmelding : undefined,
            id,
            value: feltState.verdi,
        }),
        [validerOgSettFelt, settFeltState],
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: validerOgSettFelt og nullstill lages på nytt for hver render og vil gi en uendelig oppdateringsløkke om de tas med i avhengighetslisten
    return useMemo(
        () => ({
            ...feltState,
            id,
            hentNavInputProps,
            hentNavBaseSkjemaProps,
            nullstill,
            erSynlig,
            onChange,
            validerOgSettFelt,
        }),
        // biome-ignore lint/correctness/useExhaustiveDependencies: validerOgSettFelt og nullstill lages på nytt for hver render og vil gi en uendelig oppdateringsløkke om de tas med i avhengighetslisten
        [feltState, hentNavInputProps, validerOgSettFelt, nullstill, onChange],
    );
};
