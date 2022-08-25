import React from 'react';
import { BodyShort, Textarea, TextareaProps } from '@navikt/ds-react';
import { FamilieLesefelt } from '../lesefelt';

export interface IFamilieTextareaProps extends TextareaProps {
    erLesevisning: boolean;
    tekstLesevisning?: string;
}

export const FamilieTextarea: React.FC<IFamilieTextareaProps> = ({
    children,
    className,
    erLesevisning,
    label,
    tekstLesevisning = 'Ingen opplysninger oppgitt.',
    value,
    size,
    ...props
}) => {
    return erLesevisning ? (
        value === '' ? (
            <BodyShort className={className} children={tekstLesevisning} />
        ) : (
            <FamilieLesefelt className={className} label={label} verdi={value} size={size} />
        )
    ) : (
        <Textarea className={className} label={label} value={value} size={size} {...props}>
            {children}
        </Textarea>
    );
};
