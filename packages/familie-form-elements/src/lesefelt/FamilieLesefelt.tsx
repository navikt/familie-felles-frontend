import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

export interface ILesefeltProps {
    className?: string;
    label?: React.ReactNode;
    verdi?: string | readonly string[] | number;
}

export const FamilieLesefelt: React.FC<ILesefeltProps> = ({ className, label, verdi }) => {
    return (
        <div className={className}>
            {label !== undefined && <Element children={label} />}
            <Normaltekst children={verdi} />
        </div>
    );
};
