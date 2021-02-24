import React from 'react';
import { Sprakvelger } from './src/Sprakvelger';
import { LocaleType } from './src/typer';
import { SprakProvider } from './src/SprakContext';
import { FormattedMessage } from 'react-intl';

export default {
    component: Sprakvelger,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/Sprakvelger',
};

const messages = {
    en: {
        greeting: 'Hey på engelsk',
    },
    nb: {
        greeting: 'Hei på bokmål',
    },
    nn: {
        greeting: 'Hei på nynorsk',
    },
};

export const FamilieSprakvelger: React.FC = () => {
    return (
        <SprakProvider tekster={messages} defaultLocale={LocaleType.en}>
            <Sprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} />
            <FormattedMessage id={'greeting'} />
        </SprakProvider>
    );
};
