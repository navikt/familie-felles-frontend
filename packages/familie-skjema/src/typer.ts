import { ChangeEvent, ReactNode } from 'react';

import { Ressurs } from '@navikt/familie-typer';

export interface FeltState<Verdi> {
    feilmelding: ReactNode;
    valider: ValiderFelt<Verdi>;
    valideringsstatus: Valideringsstatus;
    verdi: Verdi;
}

export type FeltOnChange<Verdi> = (
    verdi:
        | Verdi
        | ChangeEvent<HTMLInputElement>
        | ChangeEvent<HTMLTextAreaElement>
        | ChangeEvent<HTMLSelectElement>,
) => void;

export interface Felt<Verdi> {
    erSynlig: boolean;
    feilmelding: ReactNode;
    hentNavBaseSkjemaProps(visFeilmelding: boolean): NavBaseSkjemaProps<Verdi>;
    hentNavInputProps(visFeilmelding: boolean): NavInputProps<Verdi>;
    id: string;
    nullstill(): void;
    onChange: FeltOnChange<Verdi>;
    valider: ValiderFelt<Verdi>;
    validerOgSettFelt: ValiderOgSettFelt<Verdi>;
    valideringsstatus: Valideringsstatus;
    verdi: Verdi;
}

export interface NavBaseSkjemaProps<Verdi> {
    id: string;
    feil: ReactNode | undefined;
    value: Verdi;
}

export interface NavInputProps<Verdi> extends NavBaseSkjemaProps<Verdi> {
    id: string;
    onChange: FeltOnChange<Verdi>;
}

// Kopiert fra feiloppsummering, men ønsker ikke å trekke inn dette som dependency
export interface FeiloppsummeringFeil {
    /**
     * ID til skjemaelementet som feilmeldingen tilhører.
     */
    skjemaelementId: string;
    /**
     * Selve feilmeldingen.
     */
    feilmelding: string;
}

export enum Valideringsstatus {
    FEIL = 'FEIL',
    ADVARSEL = 'ADVARSEL',
    OK = 'OK',
    IKKE_VALIDERT = 'IKKE_VALIDERT',
}

// eslint-disable-next-line
export type Avhengigheter = { [key: string]: any };
export type ValiderFelt<Verdi> = (
    felt: FeltState<Verdi>,
    avhengigheter?: Avhengigheter,
) => FeltState<Verdi>;

export type ValiderOgSettFelt<Verdi> = (
    verdi: Verdi,
    avhengigheter?: Avhengigheter,
) => FeltState<Verdi>;

export const defaultValidator = <Verdi>(felt: FeltState<Verdi>) => ({
    ...felt,
    valideringsstatus: Valideringsstatus.OK,
});

export type FieldDictionary<Record extends unknown> = {
    [Key in keyof Record]: Felt<Record[Key]>;
};

export interface ISkjema<Felter, SkjemaRespons> {
    felter: FieldDictionary<Felter>;
    submitRessurs: Ressurs<SkjemaRespons>;
    skjemanavn: string;
    visFeilmeldinger: boolean;
}
