import { TextareaControlled, TextareaControlledProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaControlledProps extends TextareaControlledProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextareaControlled: React.FC<IFamilieTextareaControlledProps> = ({
    className,
    defaultValue,
    erLesevisning,
    feil,
    id,
    label,
    maxLength,
    onBlur,
    placeholder,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    textareaClass,
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
        <TextareaControlled
            className={className}
            defaultValue={defaultValue}
            feil={feil}
            id={id}
            label={label}
            maxLength={maxLength}
            onBlur={onBlur}
            placeholder={placeholder}
            textareaClass={textareaClass}
            value={value}
            {...props}
        />
    );
};
