import React from 'react';
import { Select, SelectProps } from '@navikt/ds-react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieSelectProps extends SelectProps {
    erLesevisning?: boolean;
    lesevisningVerdi?: string;
}

export const FamilieSelect: React.FC<IFamilieSelectProps> = ({
    children,
    className,
    erLesevisning = false,
    label,
    lesevisningVerdi,
    value,
    size,
    hideLabel,
    ...props
}) => {
    return erLesevisning ? (
        <FamilieLesefelt
            label={!hideLabel && label}
            verdi={lesevisningVerdi ? lesevisningVerdi : value}
            className={className}
            size={size}
        />
    ) : (
        <Select
            className={className}
            label={label}
            value={value}
            size={size}
            hideLabel={hideLabel}
            {...props}
        >
            {children}
        </Select>
    );
};
