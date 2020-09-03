import { Datovelger as NavDatovelger, ISODateString } from 'nav-datovelger';
import 'nav-datovelger/lib/styles/datovelger';
import { Label } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IDatovelgerProps {
    disabled?: boolean;
    id: string;
    label: string;
    onChange: (dato?: ISODateString) => void;
    placeholder?: string;
    valgtDato?: string;
    className?: string;
    erLesesvisning?: boolean;
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
}) => {
    if (erLesesvisning) {
        return <FamilieLesefelt className={className} label={label} verdi={valgtDato} />;
    } else
        return (
            <div id={id} className={className}>
                <Label children={label} htmlFor={id} />
                <NavDatovelger
                    disabled={disabled}
                    id={id}
                    visÅrVelger={true}
                    input={{ name: id, id: `input_${id}`, placeholder }}
                    locale={'nb'}
                    valgtDato={valgtDato}
                    onChange={onChange}
                />
            </div>
        );
};
