import 'nav-datovelger/lib/styles/datepicker';
import { Datepicker as NavDatovelger } from 'nav-datovelger';

import { Label } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';
import { DatepickerLimitations, ISODateString } from 'nav-datovelger/lib/types';

export interface IDatovelgerProps {
    disabled?: boolean;
    id: string;
    label: string;
    onChange: (dato?: ISODateString) => void;
    placeholder?: string;
    valgtDato?: string;
    className?: string;
    erLesesvisning?: boolean;
    limitations?: DatepickerLimitations;
}

export const FamilieDatovelger: React.FC<IDatovelgerProps> = ({
    disabled,
    id,
    label,
    onChange,
    placeholder,
    valgtDato,
    className = '',
    erLesesvisning = false,
    limitations,
}) => {
    if (erLesesvisning) {
        return <FamilieLesefelt className={className} label={label} verdi={valgtDato} />;
    } else {
        return (
            <div id={id} className={className}>
                <Label children={label} htmlFor={id} />
                <NavDatovelger
                    disabled={disabled}
                    inputId={`input_${id}`}
                    showYearSelector={true}
                    inputProps={{
                        name: id,
                        placeholder,
                    }}
                    locale={'nb'}
                    value={valgtDato}
                    onChange={onChange}
                    limitations={limitations}
                />
            </div>
        );
    }
};
