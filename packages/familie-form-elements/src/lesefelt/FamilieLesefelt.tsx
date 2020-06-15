import { Element, Normaltekst } from 'nav-frontend-typografi';
import React from 'react';

export interface ILesefeltProps {
    label?: React.ReactNode;
    verdi?: string | string[] | number;
}

export const FamilieLesefelt: React.FC<ILesefeltProps> = ({ label, verdi }) => {
    return (
        <div>
            {label !== undefined && <Element children={label} />}
            <Normaltekst children={verdi} />
        </div>
    );
};
