import { Felt, ValiderFelt, Avhengigheter } from './typer';
/**
 * Konfigurasjon for å opprette et felt.
 *
 * @verdi verdien til feltet med generisk Verdi type
 * @valideringsfunksjon optional valideringsfunksjon på feltet
 * @skalFeltetVises optional visningsfunksjon. Kan brukes dersom skjemaet
 * skjuler felter for bruker under gitte omstendigheter
 * @avhengigheter avhengighetene som brukes til validering og vis/skjul
 */
export interface FeltConfig<Verdi> {
    avhengigheter?: Avhengigheter;
    feltId?: string;
    skalFeltetVises?: (avhengigheter: Avhengigheter) => boolean;
    valideringsfunksjon?: ValiderFelt<Verdi>;
    verdi: Verdi;
    nullstillVedAvhengighetEndring?: boolean;
}
export declare function useFelt<Verdi = string>({ avhengigheter, feltId, skalFeltetVises, valideringsfunksjon, verdi, nullstillVedAvhengighetEndring, }: FeltConfig<Verdi>): Felt<Verdi>;
export declare namespace useFelt {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            avhengigheter: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            feltId: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            skalFeltetVises: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            valideringsfunksjon: {
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
            nullstillVedAvhengighetEndring: {
                defaultValue: {
                    value: boolean;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
}
