import type { Adressebeskyttelsegradering } from '@navikt/familie-typer';

export interface ISøkeresultat {
    adressebeskyttelseGradering?: Adressebeskyttelsegradering;
    fagsakId?: number | string; // null betyr at det ikke finnes fagsak på personen
    harTilgang: boolean;
    // Vises i stedet for navn når saksbehandler ikke har tilgang. Faller tilbake til adressebeskyttelsen når den mangler.
    manglerTilgangBegrunnelse?: string;
    ident: string;
    ikon: React.ReactNode;
    rolle?: string;
    navn?: string;
}
