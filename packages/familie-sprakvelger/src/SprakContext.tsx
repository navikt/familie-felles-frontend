import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LocaleType } from './utils';


interface SpråkProviderProps {
    tekster?: Record<string, string> ;
}

const SpråkContext = createContext<any>(['', () => {}]);
const useSpråkContext = () => useContext(SpråkContext);

const SpråkProvider: React.FC<SpråkProviderProps> = ({ tekster, children }) => {
    const [locale, setLocale] = useState<LocaleType>(LocaleType.nb);

    return (
        <SpråkContext.Provider value={[locale, setLocale]}>
            <IntlProvider locale={locale} messages={tekster}>
                {children}
            </IntlProvider>
        </SpråkContext.Provider>
    );
};

export { useSpråkContext, SpråkProvider };
