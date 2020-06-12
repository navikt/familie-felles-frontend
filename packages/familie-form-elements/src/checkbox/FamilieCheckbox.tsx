import { Checkbox, CheckboxProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

export interface IProps {
    erLesevisning: boolean
}

export const FamilieCheckbox = ({ label, checked, onChange, erLesevisning }: CheckboxProps & IProps) => {
    return erLesevisning ? (
        checked ? (
            <Normaltekst className={'skjemaelement lese-felt'} children={label} />
        ) : null
    ) : (
        <Checkbox label={label} checked={checked} onChange={onChange} />
    );
};
