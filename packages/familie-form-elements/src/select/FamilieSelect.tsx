import { Select, SelectProps } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieSelectProps extends SelectProps {
    erLesevisning?: boolean;
    lesevisningVerdi?: string;
}

export const FamilieSelect: React.FC<IFamilieSelectProps> = ({
    bredde,
    children,
    className,
    erLesevisning = false,
    label,
    lesevisningVerdi,
    name,
    onChange,
    value,
    ...props
}) => {
    return erLesevisning ? (
        <FamilieLesefelt
            label={label}
            verdi={lesevisningVerdi ? lesevisningVerdi : value}
            className={className}
        />
    ) : (
        <Select
            bredde={bredde}
            className={className}
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            {...props}
        >
            {children}
        </Select>
    );
};
