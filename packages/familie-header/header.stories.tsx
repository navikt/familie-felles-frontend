import React, { useState } from 'react';
import { ikoner, Brukerinfo, Header, ISøkResultat, PopoverItem, Søk } from './src';
import './headerstories.less';
import {
    Adressebeskyttelsegradering,
    byggDataRessurs,
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

export const HeaderOgSøk = () => {
    const [søkeresultat, settSøkeresultat] = useState<Ressurs<ISøkResultat[]>>(byggTomRessurs());

    const søk = (personIdent: string): void => {
        settSøkeresultat(byggHenterRessurs());
        setTimeout(() => {
            if (personIdent.length === 11) {
                settSøkeresultat(
                    byggDataRessurs<ISøkResultat[]>([
                        {
                            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
                            harTilgang: true,
                            ikon: ikoner.FORELDER_KVINNE,
                            navn: 'Mor Moresen',
                            ident: personIdent,
                        },
                        {
                            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
                            harTilgang: true,
                            ikon: ikoner.FORELDER_KVINNE,
                            fagsakId: 1,
                            navn: 'Mor Moresen (med fagsak)',
                            ident: personIdent,
                        },
                        {
                            adressebeskyttelseGradering: Adressebeskyttelsegradering.UGRADERT,
                            harTilgang: true,
                            ikon: ikoner.FORELDER_MANN,
                            fagsakId: 1,
                            navn: 'Far Faresen (med fagsak)',
                            ident: personIdent,
                        },
                    ]),
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
                    label={'Søk på fnr'}
                    placeholder={'Søk på fnr'}
                    søk={søk}
                    nullstillSøkResultater={() => settSøkeresultat(byggTomRessurs)}
                    søkResultater={søkeresultat}
                    søkResultatOnClick={() => alert('Du har klikket på et av resultatene')}
                />
            </Header>
        </div>
    );
};
