import { Datepicker as NavDatovelger } from 'nav-datovelger';

import { Label } from 'nav-frontend-skjema';
import React, { ReactNode } from 'react';
import { FamilieLesefelt } from '../lesefelt';
import { ISODateString } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import dayjs from 'dayjs';

export interface IDatovelgerProps {
    className?: string;
    disabled?: boolean;
    erLesesvisning?: boolean;
    lesevisningFormat?: string;
    id: string;
    label: ReactNode;
    onChange: (dato?: ISODateString) => void;
    placeholder?: string;
    valgtDato?: string;
}

export const FamilieDatovelger: React.FC<IDatovelgerProps & DatepickerProps> = ({
    className,
    disabled,
    erLesesvisning = false,
    id,
    label,
    onChange,
    placeholder,
    valgtDato,
    lesevisningFormat = 'DD.MM.YYYY',
    ...props
}) => {
    if (erLesesvisning) {
        const verdiDayjs = dayjs(valgtDato);
        return (
            <FamilieLesefelt
                className={className}
                label={label}
                verdi={verdiDayjs.isValid() ? verdiDayjs.format(lesevisningFormat) : valgtDato}
            />
        );
    } else {
        return (
            <div className={className}>
                <Label children={label} htmlFor={id} />
                <NavDatovelger
                    {...props}
                    disabled={disabled}
                    inputId={id}
                    showYearSelector={true}
                    inputProps={{
                        name: id,
                        placeholder,
                    }}
                    locale={'nb'}
                    value={valgtDato}
                    onChange={onChange}
                />
            </div>
        );
    }
};
