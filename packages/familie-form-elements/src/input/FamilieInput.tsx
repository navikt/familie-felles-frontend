import { BodyShort, TextField, TextFieldProps } from '@navikt/ds-react';
import React, { forwardRef } from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieInputProps extends TextFieldProps {
    erLesevisning?: boolean;
    tekstLesevisning?: string;
}

export const FamilieInput: React.ForwardRefExoticComponent<
    IFamilieInputProps & React.RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, IFamilieInputProps>((props, ref) => {
    const {
        size,
        className,
        children,
        erLesevisning = false,
        label,
        tekstLesevisning = 'Ingen opplysninger oppgitt.',
        value,
        ...restProps
    } = props;
    return erLesevisning ? (
        value === '' ? (
            <BodyShort className={className} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt size={size} className={className} label={label} verdi={value} />
        )
    ) : (
        <TextField
            size={size}
            className={className}
            label={label}
            value={value}
            ref={ref}
            {...restProps}
        >
            {children}
        </TextField>
    );
});
