import React, { useState } from 'react';
import { ikoner, Brukerinfo, Header, PopoverItem, Søk, Søkeresultat } from './src';
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
const søkeResultater: Record<string, Søkeresultat[]> = {
    '12345678910': [
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            harTilgang: true,
            ikon: ikoner.FORELDER_KVINNE,
            navn: 'Mor Moresen',
            ident: defaultIdent,
        },
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            harTilgang: true,
            ikon: ikoner.FORELDER_KVINNE,
            fagsakId: 1,
            navn: 'Mor Moresen (med fagsak)',
            ident: '12345678911',
        },
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            harTilgang: true,
            ikon: ikoner.FORELDER_MANN,
            fagsakId: 1,
            navn: 'Far Faresen (med fagsak)',
            ident: '12345678912',
        },
    ],
    '12345678911': [
        {
            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
            harTilgang: true,
            ikon: ikoner.FORELDER_KVINNE,
            fagsakId: 1,
            navn: 'Mor Moresen (med fagsak)',
            ident: '12345678911',
        },
    ],
};

export const HeaderOgSøk = () => {
    const [søkeresultat, settSøkeresultat] = useState<Ressurs<Søkeresultat[]>>(byggTomRessurs());

    const søk = (personIdent: string): void => {
        settSøkeresultat(byggHenterRessurs());
        setTimeout(() => {
            if (personIdent.length === 11) {
                const søkeresultat: Søkeresultat[] | undefined = søkeResultater[personIdent];
                settSøkeresultat(
                    byggDataRessurs<Søkeresultat[]>(
                        søkeresultat !== undefined ? søkeresultat : søkeResultater[defaultIdent],
                    ),
                );
            } else {
                settSøkeresultat(
                    byggFunksjonellFeilRessurs('Ugyldig. Tast inn fnr/dnr (11 siffer)'),
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
                />
            </Header>
        </div>
    );
};
