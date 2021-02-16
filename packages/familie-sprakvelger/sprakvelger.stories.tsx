import React from 'react';
import { Sprakvelger } from './src/Sprakvelger';

export default {
    component: Sprakvelger,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/Sprakvelger',
};

export const FamilieSprakvelger: React.FC = () => {
    return <Sprakvelger />;
};
