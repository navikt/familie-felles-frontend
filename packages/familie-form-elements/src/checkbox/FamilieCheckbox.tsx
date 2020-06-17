import { Checkbox, CheckboxProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

export interface ICheckboxProps extends CheckboxProps {
    erLesevisning: boolean;
    checked?: boolean;
}

export const FamilieCheckbox: React.FC<ICheckboxProps> = ({
    label,
    checked = false,
    onChange,
    erLesevisning,
}) => {
    return erLesevisning ? (
        checked ? (
            <Normaltekst className={'skjemaelement lese-felt'} children={label} />
        ) : null
    ) : (
        <Checkbox label={label} onChange={onChange} />
    );
};
