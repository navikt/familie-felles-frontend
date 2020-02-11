import { kjønnType } from '@navikt/familie-typer';
import React from 'react';
import Visittkort from './src';

export default {
    component: Visittkort,
    parameters: {
        componentSubtitle: 'Visittkort brukes til å vise enkel informasjon om en bruker.',
    },
    title: 'Komponenter/Visittkort',
};

export const visittkort = () => {
    return (
        <Visittkort alder={30} kjønn={kjønnType.K} navn={'Mock McMockface'} ident={'12345678910'} />
    );
};
