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
        greeting: 'Hei på norsk',
    },
    nn: {
        greeting: 'Hei på nynorsk',
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
                    { tittel: 'Bokmål', locale: LocaleType.nb },
                    { tittel: 'Nynorsk', locale: LocaleType.nn },
                ]}
            />
            <FormattedMessage id={'greeting'} />
        </SprakProvider>
    );
};
