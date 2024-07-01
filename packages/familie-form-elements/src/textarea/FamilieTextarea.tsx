import React from 'react';
import { BodyShort, Label, Textarea, TextareaProps } from '@navikt/ds-react';

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
        <div className={className}>
            {label && <Label size={size}>{label}</Label>}
            <BodyShort size={size}>{value === '' ? tekstLesevisning : value}</BodyShort>
        </div>
    ) : (
        <Textarea className={className} label={label} value={value} size={size} {...props}>
            {children}
        </Textarea>
    );
};
