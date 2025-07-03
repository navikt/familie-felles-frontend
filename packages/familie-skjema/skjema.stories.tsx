import React, { useState } from 'react';
import { useFelt, useSkjema, ok, FeltState, feil, Avhengigheter } from './src';
import { RessursStatus } from '@navikt/familie-typer';
import { Button, ErrorSummary, Select, TextField } from '@navikt/ds-react';

export default {
    parameters: {
        docs: {
            subtitle: 'Skjemaeksempel for team familie.',
        },
        text: 'Test',
    },
    title: 'hooks/skjema',
};

const SkjemaTyper = {
    ORDINÆR: 'Ordinær',
    UTVIDET: 'Utvidet',
    EØS: 'EØS',
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

    const skjemaType = useFelt<string | undefined>({
        verdi: undefined,
        valideringsfunksjon: (felt: FeltState<string | undefined>) =>
            felt.verdi && felt.verdi in SkjemaTyper
                ? ok(felt)
                : feil(felt, 'Du må velge blant disse'),
    });

    const { kanSendeSkjema, nullstillSkjema, hentFeilTilOppsummering, skjema } = useSkjema<
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

    console.log(skjema);
    return (
        <>
            <TextField
                {...skjema.felter.navn.hentNavInputProps(skjema.visFeilmeldinger)}
                label={'Navn'}
                style={{ width: 'max-content' }}
            />

            <TextField
                {...skjema.felter.land.hentNavInputProps(skjema.visFeilmeldinger)}
                label={'Land'}
                style={{ width: 'max-content' }}
            />

            {skjema.felter.by.erSynlig && (
                <TextField
                    {...skjema.felter.by.hentNavInputProps(skjema.visFeilmeldinger)}
                    label={'By (kun Oslo når Norge er valgt som land)'}
                    style={{ width: 'max-content' }}
                />
            )}

            <p>{eksempelMelding}</p>

            <Select
                {...skjemaType.hentNavInputProps(false)}
                label={'Hva søker du om?'}
                style={{ width: 'max-content' }}
            >
                <option
                    value={undefined}
                    label={'Velg søknadstype'}
                    disabled={true}
                    selected={true}
                />
                {Object.entries(SkjemaTyper).map(entry => {
                    const [verdi, label] = entry;
                    return (
                        <option key={verdi} value={verdi}>
                            {label}
                        </option>
                    );
                })}
            </Select>
            {skjemaType.verdi && <p>Du har valgt: {skjemaType.verdi}</p>}

            {skjema.visFeilmeldinger && (
                <>
                    <br />
                    <ErrorSummary size={'small'} heading={'Du må rette følgende for å gå videre:'}>
                        {hentFeilTilOppsummering().map((feilTilOppsummering, index) => {
                            return (
                                <ErrorSummary.Item
                                    key={index}
                                    href={`#${feilTilOppsummering.skjemaelementId}`}
                                >
                                    {feilTilOppsummering.feilmelding}
                                </ErrorSummary.Item>
                            );
                        })}
                    </ErrorSummary>
                    <br />
                </>
            )}

            <Button
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
                loading={skjema.submitRessurs.status === RessursStatus.HENTER}
            >
                Send inn
            </Button>
        </>
    );
};
