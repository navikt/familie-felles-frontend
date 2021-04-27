import { ChangeEvent, ReactNode } from 'react';
import { Ressurs } from '@navikt/familie-typer';
export interface FeltState<Verdi> {
    feilmelding: ReactNode;
    valider: ValiderFelt<Verdi>;
    valideringsstatus: Valideringsstatus;
    verdi: Verdi;
}
export declare type FeltOnChange<Verdi> = (verdi: Verdi | ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => void;
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
export declare enum Valideringsstatus {
    FEIL = "FEIL",
    ADVARSEL = "ADVARSEL",
    OK = "OK",
    IKKE_VALIDERT = "IKKE_VALIDERT"
}
export declare type Avhengigheter = {
    [key: string]: any;
};
export declare type ValiderFelt<Verdi> = (felt: FeltState<Verdi>, avhengigheter?: Avhengigheter) => FeltState<Verdi>;
export declare type ValiderOgSettFelt<Verdi> = (verdi: Verdi, avhengigheter?: Avhengigheter) => void;
export declare const defaultValidator: {
    <Verdi>(felt: FeltState<Verdi>): {
        valideringsstatus: Valideringsstatus;
        feilmelding: ReactNode;
        valider: ValiderFelt<Verdi>;
        verdi: Verdi;
    };
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            feilmelding: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            valider: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            valideringsstatus: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            verdi: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare type FieldDictionary<Record extends unknown> = {
    [Key in keyof Record]: Felt<Record[Key]>;
};
export interface ISkjema<Felter, SkjemaRespons> {
    felter: FieldDictionary<Felter>;
    submitRessurs: Ressurs<SkjemaRespons>;
    skjemanavn: string;
    visFeilmeldinger: boolean;
}
