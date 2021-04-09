import { Datepicker as NavDatovelger } from 'nav-datovelger';

import { Label } from 'nav-frontend-skjema';
import React, {ReactNode} from 'react';
import { FamilieLesefelt } from '../lesefelt';
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

export const FamilieDatovelger: React.FC<IDatovelgerProps & DatepickerProps> = ({
    className,
    disabled,
    erLesesvisning = false,
    id,
    label,
    onChange,
    placeholder,
    valgtDato,
    ...props
}) => {
    if (erLesesvisning) {
        return <FamilieLesefelt className={className} label={label} verdi={valgtDato} />;
    } else {
        return (
            <div id={id} className={className}>
                <Label children={label} htmlFor={id} />
                <NavDatovelger
                    {...props}
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
                />
            </div>
        );
    }
};
