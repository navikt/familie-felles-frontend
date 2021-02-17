import React, { createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Sprak} from './typer';

interface SprakProviderProps {
    tekster: Record<string, string>;
    defaultSprak: Sprak;
}

const SprakContext = createContext<any>(['', () => {}]);
const useSprakContext = () => useContext(SprakContext);

const SprakProvider: React.FC<SprakProviderProps> = ({ tekster, defaultSprak, children }) => {
    const [sprak, setSprak] = useState<Sprak>(defaultSprak);

    return (
        <SprakContext.Provider value={[sprak, setSprak]}>
            <IntlProvider locale={defaultSprak.locale} messages={tekster}>
                {children}
            </IntlProvider>
        </SprakContext.Provider>
    );
};

export { useSprakContext, SprakProvider };
