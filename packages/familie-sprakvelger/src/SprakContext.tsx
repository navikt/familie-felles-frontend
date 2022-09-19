import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LocaleType } from './typer';

interface SprakProviderProps {
    tekster: Record<string, Record<string, string>>;
    defaultLocale: LocaleType;
    children?: React.ReactNode;
}

const SprakContext = createContext<[
    LocaleType,
    React.Dispatch<React.SetStateAction<LocaleType>>
]>([LocaleType.nb, () => { return; }]);
const useSprakContext = () => useContext(SprakContext);

const SprakProvider: React.FC<SprakProviderProps> = ({ tekster, defaultLocale, children }) => {
    const [valgtLocale, setValgtLocale] = useState<LocaleType>(defaultLocale);

    return (
        <SprakContext.Provider value={[valgtLocale, setValgtLocale]}>
            <IntlProvider locale={defaultLocale} messages={tekster[valgtLocale]}>
                {children}
            </IntlProvider>
        </SprakContext.Provider>
    );
};

export { useSprakContext, SprakProvider };
