import React from 'react';
import { Personopplysninger } from './src/Personopplysninger';
import { ISøker } from './src/models/søknad/person';

export default {
    component: Personopplysninger,
    parameters: {
        componentSubtitle: 'Display info om person',
    },
    title: 'Komponenter/Personopplysninger',
};

const søker: ISøker = {
    fnr: '12345678910',
    forkortetNavn: 'P. Potetesen',
    adresse: {
        adresse: 'Hunstadveien 1',
        postnummer: '8009',
        poststed: 'Bodø',
    },
    egenansatt: true,
    sivilstand: 'Ugift',
    språk: 'Norsk',
    statsborgerskap: 'NORGE',
    kontakttelefon: '401234567',
    bankkontonummer: '3201 51 01234',
};

export const FamiliePersonopplysningerStory: React.FC = () => {
    return (
        <Personopplysninger
            søker={søker}
            settSøker={() => {
                return;
            }}
            settSøkerBorPåRegistrertAdresse={() => {
                return;
            }}
            lenkePDFSøknad={'https://example.com/'}
        />
    );
};
