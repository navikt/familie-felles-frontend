import { Datepicker as NavDatovelger } from 'nav-datovelger';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { ISODateString } from 'nav-datovelger/lib/types';
import { DatepickerProps } from 'nav-datovelger/lib/Datepicker';
import { ErrorMessage, Label } from '@navikt/ds-react';
import { ASurfaceDanger } from '@navikt/ds-tokens/dist/tokens';
import { FamilieLesefelt } from '@navikt/familie-form-elements';

export interface IDatovelgerProps {
    className?: string;
    disabled?: boolean;
    erLesesvisning?: boolean;
    lesevisningFormat?: string;
    id: string;
    label: ReactNode;
    onChange: (dato?: ISODateString) => void;
    placeholder?: string;
    description?: ReactNode;
    feil?: ReactNode;
}

const Container = styled.div`
    &.harfeilifelt {
        .nav-datovelger__input {
            border: 1px solid ${ASurfaceDanger};
            box-shadow: 0 0 0 1px ${ASurfaceDanger};
        }
        .nav-datovelger__kalenderknapp {
            border-top: 1px solid ${ASurfaceDanger};
            border-right: 1px solid ${ASurfaceDanger};
            border-bottom: 1px solid ${ASurfaceDanger};
        }
    }
`;

const DescriptionContainer = styled.div`
    margin-bottom: 0.5rem;
    margin-top: -0.3rem;
`;

const StyledFeilmelding = styled(ErrorMessage)`
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
    value,
    lesevisningFormat = 'DD.MM.YYYY',
    description,
    feil,
    ...props
}) => {
    if (erLesesvisning) {
        const verdiDayjs = value && dayjs(value);
        return (
            <FamilieLesefelt
                className={className}
                label={label}
                verdi={
                    verdiDayjs && verdiDayjs.isValid()
                        ? verdiDayjs.format(lesevisningFormat)
                        : value
                }
            />
        );
    } else {
        return (
            <Container className={classNames(className, feil ? 'harfeilifelt' : '')}>
                <label htmlFor={id}>
                    <Label size={'small'} spacing={true}>
                        {label}
                    </Label>
                </label>
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
                    value={value}
                    onChange={onChange}
                />
                {feil && <StyledFeilmelding size={'small'}>{feil}</StyledFeilmelding>}
            </Container>
        );
    }
};
