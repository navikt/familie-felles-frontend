import { Checkbox, CheckboxProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import classNames from 'classnames';

export interface ICheckboxProps extends CheckboxProps {
    erLesevisning: boolean;
}

export const FamilieCheckbox: React.FC<ICheckboxProps> = ({
    checked,
    className,
    erLesevisning,
    label,
    onChange,
    ...props
}) => {
    return erLesevisning ? (
        checked ? (
            <Normaltekst
                className={classNames('skjemaelement', 'lese-felt', className)}
                children={label}
            />
        ) : null
    ) : (
        <Checkbox
            className={className}
            label={label}
            onChange={onChange}
            checked={checked}
            {...props}
        />
    );
};
