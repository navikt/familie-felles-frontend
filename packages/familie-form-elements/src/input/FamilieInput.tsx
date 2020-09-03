import { Input, InputProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieInputProps extends InputProps {
    erLesevisning?: boolean;
    tekstLesevisning?: string;
}

export const FamilieInput: React.FC<IFamilieInputProps> = ({
    bredde,
    className,
    children,
    erLesevisning = false,
    label,
    onChange,
    placeholder,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    value,
    ...props
}) => {
    return erLesevisning ? (
        value === '' ? (
            <Normaltekst className={className} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt className={className} label={label} verdi={value} />
        )
    ) : (
        <Input
            bredde={bredde}
            className={className}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            {...props}
        >
            {children}
        </Input>
    );
};
