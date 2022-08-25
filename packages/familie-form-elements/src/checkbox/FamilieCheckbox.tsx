import { BodyShort, Checkbox, CheckboxProps } from '@navikt/ds-react';

import React from 'react';
import classNames from 'classnames';

export interface ICheckboxProps extends CheckboxProps {
    erLesevisning: boolean;
}

export const FamilieCheckbox: React.FC<ICheckboxProps> = ({
    checked,
    className,
    erLesevisning,
    children,
    ...props
}) => {
    return erLesevisning ? (
        checked ? (
            <BodyShort
                className={classNames('skjemaelement', 'lese-felt', className)}
                children={children}
            />
        ) : null
    ) : (
        <Checkbox className={className} children={children} checked={checked} {...props} />
    );
};
