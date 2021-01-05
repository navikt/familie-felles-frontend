import React, { useState } from 'react';
import { useFelt, useSkjema, ok, FeltState, feil, Avhengigheter } from './src';
import { FamilieInput, FamilieKnapp } from '@navikt/familie-form-elements';
import { SkjemaGruppe } from 'nav-frontend-skjema';
import { RessursStatus } from '@navikt/familie-typer';

export default {
    parameters: {
        componentSubtitle: 'Skjema eksempel for team familie.',
        text: 'Test',
    },
    title: 'hooks/skjema',
};

export const EnkeltSkjema = () => {
    const [eksempelMelding, settEksempelMelding] = useState('');

    const navn = useFelt<string>({
        verdi: '',
        valideringsfunksjon: (felt: FeltState<string>) =>
            felt.verdi.length >= 1 ? ok(felt) : feil(felt, 'Du må sette navn'),
    });
    const land = useFelt<string>({
        verdi: '',
        valideringsfunksjon: (felt: FeltState<string>) =>
            felt.verdi ? ok(felt) : feil(felt, 'Du må sette land'),
    });
    const by = useFelt<string>({
        verdi: '',
        valideringsfunksjon: (felt: FeltState<string>, avhengigheter: Avhengigheter) => {
            const { land } = avhengigheter;

            if (!felt.verdi) {
                return feil(felt, 'Du må sette by');
            }
            if (land.verdi === 'Norge') {
                return felt.verdi === 'Oslo'
                    ? ok(felt)
                    : feil(felt, 'Du kan kun velge Oslo når Norge er valgt som land');
            }

            return ok(felt);
        },
        skalFeltetVises: (avhengigheter: Avhengigheter) => {
            const { land } = avhengigheter;
            return land.verdi !== '' ? true : false;
        },
        avhengigheter: { land },
    });

    const { kanSendeSkjema, nullstillSkjema, skjema } = useSkjema<
        {
            navn: string;
            land: string;
            by: string;
        },
        string
    >({
        felter: {
            navn,
            land,
            by,
        },
        skjemanavn: 'enkelt-skjema',
    });

    return (
        <SkjemaGruppe
            feil={
                skjema.submitRessurs.status === RessursStatus.FEILET
                    ? skjema.submitRessurs.frontendFeilmelding
                    : undefined
            }
        >
            <FamilieInput
                {...skjema.felter.navn.hentNavInputProps(skjema.visFeilmeldinger)}
                bredde={'L'}
                label={'Navn'}
            />

            <FamilieInput
                {...skjema.felter.land.hentNavInputProps(skjema.visFeilmeldinger)}
                bredde={'L'}
                label={'Land'}
            />

            {skjema.felter.by.erSynlig && (
                <FamilieInput
                    {...skjema.felter.by.hentNavInputProps(skjema.visFeilmeldinger)}
                    bredde={'L'}
                    label={'By (kun Oslo når Norge er valgt som land)'}
                />
            )}

            <p>{eksempelMelding}</p>

            <FamilieKnapp
                onClick={() => {
                    console.log(skjema);
                    if (kanSendeSkjema()) {
                        // Kall onSubmit på riktig endepunkt
                        settEksempelMelding('Skjema sendt inn');
                        nullstillSkjema();
                    } else {
                        settEksempelMelding('Eksempelet har feil!');
                    }
                }}
                spinner={skjema.submitRessurs.status === RessursStatus.HENTER}
                erLesevisning={false}
            >
                Send inn
            </FamilieKnapp>
        </SkjemaGruppe>
    );
};
