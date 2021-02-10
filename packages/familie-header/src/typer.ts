import { Adressebeskyttelsegradering } from '@navikt/familie-typer';

export interface ISøkResultat {
    adressebeskyttelseGradering?: Adressebeskyttelsegradering;
    fagsakId?: number; // null betyr at det ikke finnes fagsak på personen
    harTilgang: boolean;
    ident: string;
    ikon: React.ReactNode;
    navn?: string;
}
