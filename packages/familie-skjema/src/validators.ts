import { ReactNode } from 'react';
import { FeltState, Valideringsstatus } from './typer';

export const ok = <T>(felt: FeltState<T>): FeltState<T> => {
    return {
        ...felt,
        feilmelding: '',
        valideringsstatus: Valideringsstatus.OK,
    };
};

export const feil = <T>(felt: FeltState<T>, feilmelding: ReactNode): FeltState<T> => {
    return {
        ...felt,
        feilmelding,
        valideringsstatus: Valideringsstatus.FEIL,
    };
};
