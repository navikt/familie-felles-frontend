import React from 'react';
import { Sprakvelger } from './src/Sprakvelger';
import { LocaleType } from './src/typer';

export default {
    component: Sprakvelger,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/Sprakvelger',
};

export const FamilieSprakvelger: React.FC = () => {
    return (
        <Sprakvelger
            støttedeSprak={[
                { tittel: 'Engelsk', locale: LocaleType.en },
                { tittel: 'Norsk', locale: LocaleType.nb },
            ]}
        />
    );
};
