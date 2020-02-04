import React from 'react';
import Komponent from './src';

export default {
    component: Komponent,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/{{komponent}}',
};

export const standard = () => {
    return <Komponent />;
};
