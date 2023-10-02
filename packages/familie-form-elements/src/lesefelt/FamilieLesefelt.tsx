import React from 'react';
import { BodyShort, Label } from '@navikt/ds-react';

export interface ILesefeltProps {
    className?: string;
    label?: React.ReactNode;
    verdi?: string | readonly string[] | number;
    size?: undefined | 'small' | 'medium';
}

export const FamilieLesefelt: React.FC<ILesefeltProps> = ({ className, label, verdi, size }) => {
    return (
        <div className={className}>
            {label !== undefined && <Label size={size}>{label}</Label>}
            <BodyShort size={size}>{verdi}</BodyShort>
        </div>
    );
};
