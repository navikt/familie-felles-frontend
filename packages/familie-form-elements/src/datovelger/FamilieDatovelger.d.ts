import React, { ReactNode } from 'react';
import { ISODateString } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
export interface IDatovelgerProps {
    className?: string;
    disabled?: boolean;
    erLesesvisning?: boolean;
    id: string;
    label: ReactNode;
    onChange: (dato?: ISODateString) => void;
    placeholder?: string;
    valgtDato?: string;
}
export declare const FamilieDatovelger: React.FC<IDatovelgerProps & DatepickerProps>;
