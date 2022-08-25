import React from 'react';
import { BodyShort, BodyShortProps, Label } from '@navikt/ds-react';

export interface ILesefeltProps {
    className?: string;
    label?: React.ReactNode;
    verdi?: string | readonly string[] | number;
    size?: BodyShortProps['size'];
}

export const FamilieLesefelt: React.FC<ILesefeltProps> = ({ className, label, verdi, size }) => {
    return (
        <div className={className}>
            {label !== undefined && <Label size={size} children={label} />}
            <BodyShort size={size} children={verdi} />
        </div>
    );
};
