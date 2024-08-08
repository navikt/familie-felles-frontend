import React, { useState } from 'react';
import { ikoner, Brukerinfo, Header, PopoverItem, Søk, ISøkeresultat } from './src';
import {
    Adressebeskyttelsegradering,
    byggDataRessurs,
    byggFunksjonellFeilRessurs,
    byggHenterRessurs,
    byggTomRessurs,
    Ressurs,
} from '@navikt/familie-typer';
import { BodyShort } from '@navikt/ds-react';
import { idnr } from '@navikt/fnrvalidator';

export default {
    component: Header,
    parameters: {
        componentSubtitle: 'Header for team familie.',
    },
    title: 'Komponenter/Header',
    onClick: () => {
        alert('Du har klikket på tittelknappen');
    },
};

const saksbehandler: Brukerinfo = {
    navn: 'Navn på saksbehandler',
    enhet: 'Enhet',
};

const popover: PopoverItem = {
    name: 'Logg ut',
    href: '#',
    onClick: () => {
        alert('Du har nå logget ut');
    },
};

const eksterneLenkerForStory = [
    { name: 'Google', href: 'https://www.google.com', isExternal: true },
    { name: 'NAV forside', href: 'https://www.nav.no' },
];

const defaultIdent = '12345678910';
const søkeResultater: Record<string, ISøkeresultat[]> = {
    '12345678910': [
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            harTilgang: true,
            ident: defaultIdent,
            ikon: ikoner.FORELDER_KVINNE,
            navn: 'Mor Moresen',
            rolle: 'MOR',
        },
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            fagsakId: 1,
            harTilgang: true,
            ident: '12345678911',
            ikon: ikoner.FORELDER_KVINNE,
            navn: 'Mor Moresen (med fagsak)',
            rolle: 'MOR',
        },
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            fagsakId: 1,
            harTilgang: true,
            ident: '12345678912',
            ikon: ikoner.FORELDER_MANN,
            navn: 'Far Faresen (med fagsak)',
            rolle: 'FAR',
        },
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.STRENGT_FORTROLIG,
            fagsakId: 1,
            harTilgang: false,
            ident: '12345678912',
            ikon: ikoner.BARN_MANN,
            navn: 'Sønn Sønnesen',
            rolle: 'BARN',
        },
    ],
    '12345678911': [
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            fagsakId: 1,
            harTilgang: true,
            ident: '12345678911',
            ikon: ikoner.FORELDER_KVINNE,
            navn: 'Mor Moresen (med fagsak)',
            rolle: 'MOR',
        },
    ],
    '12345678912': [],
};

export const HeaderOgSøk: React.FC = ({ ...args }) => {
    const [søkeresultat, settSøkeresultat] = useState<Ressurs<ISøkeresultat[]>>(byggTomRessurs());
    const [valgtResultat, settValgtResultat] = useState<ISøkeresultat | undefined>(undefined);
    const søk = (personIdent: string): void => {
        if (!personIdent) {
            settSøkeresultat(byggTomRessurs());
        } else {
            settSøkeresultat(byggHenterRessurs());
            setTimeout(() => {
                if (idnr(personIdent).status === 'valid') {
                    const resultat: ISøkeresultat[] | undefined = søkeResultater[personIdent];
                    settSøkeresultat(
                        byggDataRessurs<ISøkeresultat[]>(
                            resultat !== undefined ? resultat : søkeResultater[defaultIdent],
                        ),
                    );
                } else {
                    settSøkeresultat(
                        byggFunksjonellFeilRessurs('Ugyldig fødsels- eller d-nummer (11 siffer)'),
                    );
                }
            }, 1000);
        }
    };

    return (
        <div className={'headerstory'}>
            <Header
                tittel={'tittel'}
                brukerinfo={saksbehandler}
                brukerPopoverItems={[popover]}
                tittelHref={'#'}
                eksterneLenker={eksterneLenkerForStory}
                tittelOnClick={() => {
                    alert('du trykket på tittelen');
                }}
                {...args}
            >
                <Søk
                    label={'Søk. Tast inn fødselsnummer eller d-nummer, 11 siffer'}
                    placeholder={'Søk. Placeholder'}
                    søk={søk}
                    nullstillSøkeresultater={() => settSøkeresultat(byggTomRessurs)}
                    søkeresultater={søkeresultat}
                    søkeresultatOnClick={x => {
                        settValgtResultat(x);
                        console.log('Du har klikket på et av resultatene', x);
                    }}
                />
            </Header>

            <div>
                <BodyShort>Valgt resultat: </BodyShort>
                <BodyShort>
                    {valgtResultat
                        ? `${valgtResultat.ident} - ${valgtResultat.navn}`
                        : 'Ingen valgt'}
                </BodyShort>
            </div>
        </div>
    );
};

// @ts-expect-error storybook-spesifikk type
HeaderOgSøk.args = {
    tittel: 'tittel',
    brukerinfo: saksbehandler,
    brukerPopoverItems: [popover],
    tittelHref: '#',
    eksterneLenker: eksterneLenkerForStory,
};
