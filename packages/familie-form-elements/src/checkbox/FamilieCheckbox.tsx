import { Checkbox, CheckboxProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

export interface ICheckboxProps extends CheckboxProps {
    erLesevisning: boolean;
}

export const FamilieCheckbox: React.FC<ICheckboxProps> = ({
    label,
    checked,
    onChange,
    erLesevisning,
}) => {
    return erLesevisning ? (
        checked ? (
            <Normaltekst className={'skjemaelement lese-felt'} children={label} />
        ) : null
    ) : (
        <Checkbox label={label} checked={checked} onChange={onChange} />
    );
};
