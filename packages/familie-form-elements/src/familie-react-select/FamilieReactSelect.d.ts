import React, { ReactNode } from 'react';
import { NamedProps, StylesConfig } from 'react-select';
export interface IProps extends NamedProps<{
    label: string;
    value: string;
}, true | false> {
    erLesevisning?: boolean;
    creatable?: boolean;
    label: ReactNode;
    feil?: ReactNode;
    propSelectStyles?: StylesConfig;
}
export declare type OptionType = {
    value: string;
    label: string;
};
export interface ISelectOption extends OptionType {
    value: string;
    label: string;
}
export declare const FamilieReactSelect: React.FC<IProps>;
