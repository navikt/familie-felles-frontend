import { SelectProps } from 'nav-frontend-skjema';
import React from 'react';
export interface IFamilieSelectProps extends SelectProps {
    erLesevisning?: boolean;
    lesevisningVerdi?: string;
}
export declare const FamilieSelect: React.FC<IFamilieSelectProps>;
