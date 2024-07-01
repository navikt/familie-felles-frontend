import React from 'react';
import { BodyShort, Label, RadioGroup, RadioGroupProps } from '@navikt/ds-react';

export interface IRadioGruppeProps extends RadioGroupProps {
    erLesevisning: boolean;
}
export const FamilieRadioGruppe: React.FC<IRadioGruppeProps> = ({
    children,
    className,
    erLesevisning,
    legend,
    value,
    ...props
}) => {
    return erLesevisning ? (
        <div className={className}>
            {legend && <Label>{legend}</Label>}
            <BodyShort>{value}</BodyShort>
        </div>
    ) : (
        <RadioGroup className={className} value={value} legend={legend} {...props}>
            {children}
        </RadioGroup>
    );
};
