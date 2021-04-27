import { InputProps } from 'nav-frontend-skjema';
import React from 'react';
export interface IFamilieInputProps extends InputProps {
    erLesevisning?: boolean;
    tekstLesevisning?: string;
}
export declare const FamilieInput: React.FC<IFamilieInputProps>;
