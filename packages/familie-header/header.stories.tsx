import React, { useState } from 'react';
import { Brukerinfo, Header, ikoner, ISøkeresultat, LenkeType, PopoverItem, Søk } from './src';
import {
    Adressebeskyttelsegradering,
    byggDataRessurs,
    byggFunksjonellFeilRessurs,
    byggHenterRessurs,
    byggTomRessurs,
    Ressurs,
} from '@navikt/familie-typer';
import { BodyShort, Detail } from '@navikt/ds-react';
import { idnr } from '@navikt/fnrvalidator';
import { Endringslogg } from '@navikt/familie-endringslogg';

export default {
    component: Header,
    parameters: {
        docs: {
            subtitle: 'Header for team familie',
        },
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
    onSelect: () => {
        alert('Du har nå logget ut');
    },
};

const PopoverDetail = () => (
    <dl>
        <BodyShort as="dt" size="small">
            Mer info til saksbehandler
        </BodyShort>
        <Detail as="dd">En ekstra detalj her</Detail>
    </dl>
);

const eksterneLenkerForStory: PopoverItem[] = [
    { name: 'NRK', href: 'https://www.nrk.no', type: LenkeType.EKSTERN },
    {
        name: 'Intern side med onClick',
        onSelect: () => {
            // tslint:disable-next-line:no-console
            console.log('intern lenke med klikk');
        },
        type: LenkeType.INTERN,
    },
    { name: 'NAV forside', href: 'https://www.nav.no', type: LenkeType.INTERN },
    { name: 'Google', href: 'https://www.google.com', type: LenkeType.EKSTERN },
    {
        name: 'Ekstern side med onClick',
        onSelect: () => {
            // tslint:disable-next-line:no-console
            console.log('intern lenke med klikk');
        },
        type: LenkeType.EKSTERN,
    },
    {
        name: 'Verktøyside 1',
        href: 'https://www.verktøy.no',
        type: LenkeType.ARBEIDSVERKTØY,
    },
    {
        name: 'Verktøyside 2',
        href: 'https://www.verktøy.no',
        type: LenkeType.ARBEIDSVERKTØY,
    },
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
                brukerPopoverDetail={<PopoverDetail />}
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
                        // tslint:disable-next-line:no-console
                        console.log('Du har klikket på et av resultatene', x);
                    }}
                />
                <Endringslogg
                    userId={'23452345fdbsssssh1234' + new Date()}
                    appId={'EF'}
                    backendUrl={'https://familie-endringslogg.intern.dev.nav.no/'}
                    appName={'Enslig forsørger'}
                    stil="lys"
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
