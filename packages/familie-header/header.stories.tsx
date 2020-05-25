import React, { useState } from 'react';
import { Brukerinfo, Header, Infokort, PopoverItem, Søk } from './src';
import { KvinneIkon } from '@navikt/familie-ikoner';
import './headerstories.less';

export default {
    component: Header,
    parameters: {
        componentSubtitle: 'Header for team familie.',
    },
    title: 'Komponenter/Header',
};

const saksbehandler: Brukerinfo = {
    navn: "Navn på saksbehandler",
    enhet: "Enhet"
};

const popover: PopoverItem = {
    name: "Logg ut",
    href: "#"
};

const eksterneLenker = [
    { name: "Google", href: "https://www.google.com", isExternal: true },
    { name: "NAV forside", href: "https://www.nav.no" },
];

interface ISøkeresultat {
    navn: string,
    personident: string,
    alder: number,
    kjønn: string
}

export const header = () => {
    const [søkeresultat, settSøkeresultat] = useState<ISøkeresultat[]>([]);
    const [spinner, settSpinner] = useState<boolean>(false);

    const søk = (personIdent: string): void => {
        settSpinner(true);
        setTimeout(() => {
            if (personIdent.length === 11) {
                settSøkeresultat([{
                    navn: "Navn Navnesen",
                    personident: personIdent,
                    alder: 23,
                    kjønn: 'KVINNE'
                }]);
                settSpinner(false)
            }
        }, 1000);
    };

    return (
        <div className={'headerstory'}>
            <Header
                tittel={'tittel'}
                brukerinfo={saksbehandler}
                brukerPopoverItems={[popover]}
                tittelHref={"#"}
                eksterneLenker={eksterneLenker}>
                <Søk
                    søk={søk}
                    validator={undefined}
                    spinner={spinner}
                    autoSøk={true}
                    onChange={() => settSøkeresultat([])}
                >
                    {søkeresultat.length > 0 && søkeresultat.map((person, index) => {
                        return (<Infokort index={index} ikon={<KvinneIkon />} header={`${person.navn}(${person.personident})`} />)
                    })
                    }
                </Søk>
            </Header>
        </div>
    );
};
