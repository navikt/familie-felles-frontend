import { ReactNode } from 'react';
import { FeltState } from './typer';
export declare const ok: {
    <T>(felt: FeltState<T>): FeltState<T>;
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
export declare const feil: <T>(felt: FeltState<T>, feilmelding: ReactNode) => FeltState<T>;
