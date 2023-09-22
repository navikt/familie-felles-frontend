import React, { createContext, useContext, useState } from 'react';
import { LocaleType } from './typer';

interface SprakProviderProps {
    defaultLocale: LocaleType;
    children?: React.ReactNode;
}

const SprakContext = createContext<[LocaleType, React.Dispatch<React.SetStateAction<LocaleType>>]>([
    LocaleType.nb,
    () => {
        return;
    },
]);
const useSprakContext = () => useContext(SprakContext);

const SprakProvider: React.FC<SprakProviderProps> = ({ defaultLocale, children }) => {
    const [valgtLocale, setValgtLocale] = useState<LocaleType>(defaultLocale);

    return (
        <SprakContext.Provider value={[valgtLocale, setValgtLocale]}>
            {children}
        </SprakContext.Provider>
    );
};

export { useSprakContext, SprakProvider };
