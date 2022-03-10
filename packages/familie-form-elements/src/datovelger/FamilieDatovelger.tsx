import { Datepicker as NavDatovelger } from 'nav-datovelger';

import React, { ReactNode } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import classNames from 'classnames';

import { ISODateString } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import navFarger from 'nav-frontend-core';
import { Label } from 'nav-frontend-skjema';
import { Feilmelding } from 'nav-frontend-typografi';

import { FamilieLesefelt } from '../lesefelt';

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
    feil?: ReactNode;
}

const Container = styled.div`
    &.harfeilifelt {
        .nav-datovelger__input {
            border: 1px solid ${navFarger.redError};
            box-shadow: 0 0 0 1px ${navFarger.redError};
        }
        .nav-datovelger__kalenderknapp {
            border-top: 1px solid ${navFarger.redError};
            border-right: 1px solid ${navFarger.redError};
            border-bottom: 1px solid ${navFarger.redError};
        }
    }
`;

const DescriptionContainer = styled.div`
    margin-bottom: 0.5rem;
    margin-top: -0.3rem;
`;

const StyledFeilmelding = styled(Feilmelding)`
    margin-top: 0.5rem;
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
    feil,
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
            <Container className={classNames(className, feil ? 'harfeilifelt' : '')}>
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
                {feil && <StyledFeilmelding>{feil}</StyledFeilmelding>}
            </Container>
        );
    }
};
