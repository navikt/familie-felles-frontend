import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LocaleType } from './utils';

interface SprakProviderProps {
    tekster?: Record<string, string>;
}

const SprakContext = createContext<any>(['', () => {}]);
const useSprakContext = () => useContext(SprakContext);

const SprakProvider: React.FC<SprakProviderProps> = ({ tekster, children }) => {
    const [locale, setLocale] = useState<LocaleType>(LocaleType.nb);

    return (
        <SprakContext.Provider value={[locale, setLocale]}>
            <IntlProvider locale={locale} messages={tekster}>
                {children}
            </IntlProvider>
        </SprakContext.Provider>
    );
};

export { useSprakContext, SprakProvider };
