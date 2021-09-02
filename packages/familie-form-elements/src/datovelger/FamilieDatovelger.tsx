import { Datepicker as NavDatovelger } from 'nav-datovelger';

import { Label } from 'nav-frontend-skjema';
import React, { ReactNode } from 'react';
import { FamilieLesefelt } from '../lesefelt';
import { ISODateString } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import dayjs from 'dayjs';
import styled from 'styled-components';

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
    description?: ReactNode;
}

const DescriptionContainer = styled.div`
    margin-bottom: 0.5rem;
    margin-top: -0.3rem;
`;

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
    description,
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
                {description && <DescriptionContainer>{description}</DescriptionContainer>}
                <NavDatovelger
                    {...props}
                    disabled={disabled}
                    inputId={id}
                    showYearSelector={true}
                    inputProps={{
                        name: id,
                        placeholder,
                    }}
                    value={valgtDato}
                    onChange={onChange}
                />
            </div>
        );
    }
};
