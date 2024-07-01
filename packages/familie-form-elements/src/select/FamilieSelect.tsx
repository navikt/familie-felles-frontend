import React from 'react';
import { BodyShort, Label, Select, SelectProps } from '@navikt/ds-react';

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
        <div className={className}>
            {!hideLabel && label && <Label size={size}>{label}</Label>}
            <BodyShort size={size}>{lesevisningVerdi ? lesevisningVerdi : value}</BodyShort>
        </div>
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
