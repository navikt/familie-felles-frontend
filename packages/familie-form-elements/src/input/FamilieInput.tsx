import { BodyShort, TextField, TextFieldProps } from '@navikt/ds-react';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieInputProps extends TextFieldProps {
    erLesevisning?: boolean;
    tekstLesevisning?: string;
}

export const FamilieInput: React.FC<IFamilieInputProps> = ({
    size,
    className,
    children,
    erLesevisning = false,
    label,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    value,
    ...props
}) => {
    return erLesevisning ? (
        value === '' ? (
            <BodyShort className={className} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt size={size} className={className} label={label} verdi={value} />
        )
    ) : (
        <TextField size={size} className={className} label={label} value={value} {...props}>
            {children}
        </TextField>
    );
};
