import { CheckboxProps } from 'nav-frontend-skjema';
import React from 'react';
export interface ICheckboxProps extends CheckboxProps {
    erLesevisning: boolean;
}
export declare const FamilieCheckbox: React.FC<ICheckboxProps>;
