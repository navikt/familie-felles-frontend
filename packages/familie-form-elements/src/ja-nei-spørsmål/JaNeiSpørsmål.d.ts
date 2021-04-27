import React, { ReactNode } from 'react';
import { ESvar } from './typer';
declare type LabelTekstForJaNei = {
    ja: ReactNode;
    nei: ReactNode;
};
export interface JaNeiSpørsmålProps {
    onChange: (value: ESvar) => void;
    legend: ReactNode;
    name: string;
    labelTekstForJaNei: LabelTekstForJaNei;
    initiellVerdi?: ESvar | undefined;
    feil?: ReactNode;
}
export declare const JaNeiSpørsmål: React.FC<JaNeiSpørsmålProps>;
export {};
