import React from 'react';
import { LocaleType } from './typer';
interface SprakProviderProps {
    tekster: Record<string, Record<string, string>>;
    defaultLocale: LocaleType;
}
declare const useSprakContext: () => any;
declare const SprakProvider: React.FC<SprakProviderProps>;
export { useSprakContext, SprakProvider };
