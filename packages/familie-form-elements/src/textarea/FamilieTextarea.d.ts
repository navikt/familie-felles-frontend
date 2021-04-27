import { TextareaProps } from 'nav-frontend-skjema';
import React from 'react';
export interface IFamilieTextareaProps extends TextareaProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}
export declare const FamilieTextarea: React.FC<IFamilieTextareaProps>;
