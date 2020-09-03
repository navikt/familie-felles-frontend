import { RadioGruppe } from 'nav-frontend-skjema';
import { SkjemaGruppeProps } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IRadioGruppeProps extends SkjemaGruppeProps {
    verdi?: string;
    erLesevisning: boolean;
}
export const FamilieRadioGruppe: React.FC<IRadioGruppeProps> = ({
    children,
    className,
    erLesevisning,
    feil,
    feilmeldingId,
    legend,
    verdi,
    ...props
}) => {
    return erLesevisning ? (
        <FamilieLesefelt className={className} label={legend} verdi={verdi} {...props} />
    ) : (
        <RadioGruppe
            className={className}
            feil={feil}
            feilmeldingId={feilmeldingId}
            legend={legend}
            {...props}
        >
            {children}
        </RadioGruppe>
    );
};
