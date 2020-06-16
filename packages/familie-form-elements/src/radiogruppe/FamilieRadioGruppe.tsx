import { RadioGruppe } from 'nav-frontend-skjema';
import { SkjemaGruppeProps } from 'nav-frontend-skjema';
import React from 'react';
import { FamilieLesefelt } from '../lesefelt';

export interface IRadioGruppeProps extends SkjemaGruppeProps {
    verdi?: string;
    erLesevisning: boolean;
}
export const FamilieRadioGruppe: React.FC<IRadioGruppeProps> = ({
    verdi,
    erLesevisning,
    legend,
    feil,
    feilmeldingId,
    children,
}) => {
    return erLesevisning ? (
        <FamilieLesefelt label={legend} verdi={verdi} />
    ) : (
        <RadioGruppe legend={legend} feil={feil} feilmeldingId={feilmeldingId}>
            {children}
        </RadioGruppe>
    );
};
