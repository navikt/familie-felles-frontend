import { TextareaControlled, TextareaControlledProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaControlledProps extends TextareaControlledProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextareaControlled: React.FC<IFamilieTextareaControlledProps> = ({
    erLesevisning,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    defaultValue,
    id,
    label,
    placeholder,
    maxLength,
    textareaClass,
    value,
    feil,
    onBlur,
}) => {
    return erLesevisning ? (
        value === '' ? (
            <Normaltekst className={'skjemaelement'} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt label={label} verdi={value} />
        )
    ) : (
        <TextareaControlled
            defaultValue={defaultValue}
            id={id}
            label={label}
            placeholder={placeholder}
            maxLength={maxLength}
            textareaClass={textareaClass}
            value={value}
            feil={feil}
            onBlur={onBlur}
        />
    );
};
