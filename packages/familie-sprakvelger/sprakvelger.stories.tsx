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
        greeting: 'Hey you',
    },
    nb: {
        greeting: 'Hei på deg',
    },
};

export const FamilieSprakvelger: React.FC = () => {
    return (
        <SprakProvider
            tekster={messages}
            defaultSprak={{ tittel: 'Engelsk', locale: LocaleType.en }}
        >
            <Sprakvelger
                støttedeSprak={[
                    { tittel: 'Engelsk', locale: LocaleType.en },
                    { tittel: 'Norsk', locale: LocaleType.nb },
                ]}
            />
            <FormattedMessage id={'greeting'} />
        </SprakProvider>
    );
};
