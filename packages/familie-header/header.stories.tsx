import React, { useState } from 'react';
import { ikoner, Brukerinfo, Header, PopoverItem, Søk, ISøkeresultat, erIdnr } from './src';
import './headerstories.less';
import {
    Adressebeskyttelsegradering,
    byggDataRessurs,
    byggFunksjonellFeilRessurs,
    byggHenterRessurs,
    byggTomRessurs,
    Ressurs,
} from '@navikt/familie-typer';

export default {
    component: Header,
    parameters: {
        componentSubtitle: 'Header for team familie.',
    },
    title: 'Komponenter/Header',
};

const saksbehandler: Brukerinfo = {
    navn: 'Navn på saksbehandler',
    enhet: 'Enhet',
};

const popover: PopoverItem = {
    name: 'Logg ut',
    href: '#',
};

const eksterneLenker = [
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

export const HeaderOgSøk = () => {
    const [søkeresultat, settSøkeresultat] = useState<Ressurs<ISøkeresultat[]>>(byggTomRessurs());

    const søk = (personIdent: string): void => {
        settSøkeresultat(byggHenterRessurs());
        setTimeout(() => {
            if (erIdnr(personIdent, true)) {
                const søkeresultat: ISøkeresultat[] | undefined = søkeResultater[personIdent];
                settSøkeresultat(
                    byggDataRessurs<ISøkeresultat[]>(
                        søkeresultat !== undefined ? søkeresultat : søkeResultater[defaultIdent],
                    ),
                );
            } else {
                settSøkeresultat(
                    byggFunksjonellFeilRessurs('Ugyldig fødsels- eller d-nummer (11 siffer)'),
                );
            }
        }, 1000);
    };

    return (
        <div className={'headerstory'}>
            <Header
                tittel={'tittel'}
                brukerinfo={saksbehandler}
                brukerPopoverItems={[popover]}
                tittelHref={'#'}
                eksterneLenker={eksterneLenker}
            >
                <Søk
                    label={'Søk. Tast inn fødselsnummer eller d-nummer, 11 siffer'}
                    placeholder={'Søk'}
                    søk={søk}
                    nullstillSøkeresultater={() => settSøkeresultat(byggTomRessurs)}
                    søkeresultater={søkeresultat}
                    søkeresultatOnClick={() => alert('Du har klikket på et av resultatene')}
                    acceptSynthNr={true}
                />
            </Header>
        </div>
    );
};
