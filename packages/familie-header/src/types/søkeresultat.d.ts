/// <reference types="react" />
import { Adressebeskyttelsegradering } from '@navikt/familie-typer';
export interface ISøkeresultat {
    adressebeskyttelseGradering?: Adressebeskyttelsegradering;
    fagsakId?: number | string;
    harTilgang: boolean;
    ident: string;
    ikon: React.ReactNode;
    rolle?: string;
    navn?: string;
}
