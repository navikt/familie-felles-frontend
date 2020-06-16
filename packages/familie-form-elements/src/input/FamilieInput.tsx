import { Input, InputProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieInputProps extends InputProps {
    erLesevisning?: boolean;
    tekstLesevisning?: string;
}

export const FamilieInput: React.FC<IFamilieInputProps> = ({
    erLesevisning = false,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    label,
    bredde,
    value,
    placeholder,
    onChange,
    children,
}) => {
    return erLesevisning ? (
        value === '' ? (
            <Normaltekst className={'skjemaelement'} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt label={label} verdi={value} />
        )
    ) : (
        <Input
            label={label}
            bredde={bredde}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        >
            {children}
        </Input>
    );
};
