import { Textarea, TextareaProps } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaProps extends TextareaProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextarea: React.FC<IFamilieTextareaProps> = ({
    erLesevisning,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    name,
    label,
    value,
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
        <Textarea name={name} label={label} value={value} onChange={onChange}>
            {children}
        </Textarea>
    );
};
