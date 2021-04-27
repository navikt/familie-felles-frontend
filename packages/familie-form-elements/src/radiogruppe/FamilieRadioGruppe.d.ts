import { SkjemaGruppeProps } from 'nav-frontend-skjema';
import React from 'react';
export interface IRadioGruppeProps extends SkjemaGruppeProps {
    verdi?: string;
    erLesevisning: boolean;
}
export declare const FamilieRadioGruppe: React.FC<IRadioGruppeProps>;
