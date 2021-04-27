import { TextareaControlledProps } from 'nav-frontend-skjema';
import React from 'react';
export interface IFamilieTextareaControlledProps extends TextareaControlledProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}
export declare const FamilieTextareaControlled: React.FC<IFamilieTextareaControlledProps>;
