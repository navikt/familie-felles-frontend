import { TextareaControlled, TextareaControlledProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaControlledProps extends TextareaControlledProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextareaControlled: React.FC<IFamilieTextareaControlledProps> = ({
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
}) => {
    return erLesevisning ? (
        value === '' ? (
            <Normaltekst children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt label={label} verdi={value} />
        )
    ) : (
        <TextareaControlled
            defaultValue={defaultValue}
            feil={feil}
            id={id}
            label={label}
            maxLength={maxLength}
            onBlur={onBlur}
            placeholder={placeholder}
            textareaClass={textareaClass}
            value={value}
        />
    );
};
