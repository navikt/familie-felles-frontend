import React from 'react';
import { BodyShort, Label } from '@navikt/ds-react';
import '@navikt/ds-css';

export interface ILesefeltProps {
    className?: string;
    label?: React.ReactNode;
    verdi?: string | readonly string[] | number;
}

export const FamilieLesefelt: React.FC<ILesefeltProps> = ({ className, label, verdi }) => {
    return (
        <div className={className}>
            {label !== undefined && <Label size={'small'} children={label} />}
            <BodyShort size={'small'} children={verdi} />
        </div>
    );
};
