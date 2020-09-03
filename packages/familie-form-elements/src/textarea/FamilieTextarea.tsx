import { Textarea, TextareaProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaProps extends TextareaProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextarea: React.FC<IFamilieTextareaProps> = ({
    children,
    className,
    disabled,
    erLesevisning,
    label,
    maxLength,
    name,
    onChange,
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
        <Textarea
            className={className}
            disabled={disabled}
            label={label}
            maxLength={maxLength}
            name={name}
            onChange={onChange}
            value={value}
            {...props}
        >
            {children}
        </Textarea>
    );
};
