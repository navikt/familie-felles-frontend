import { Select, SelectProps } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieSelectProps extends SelectProps {
    erLesevisning?: boolean;
}

export const FamilieSelect: React.FC<IFamilieSelectProps> = ({
    bredde,
    children,
    erLesevisning = false,
    label,
    name,
    onChange,
    value,
}) => {
    return erLesevisning ? (
        <FamilieLesefelt label={label} verdi={value} />
    ) : (
        <Select name={name} label={label} bredde={bredde} value={value} onChange={onChange}>
            {children}
        </Select>
    );
};
