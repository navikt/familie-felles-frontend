export interface IOppgave {
    id: string;
    identer?: IOppgaveIdent[];
    tildeltEnhetsnr?: string;
    journalpostId?: string;
    saksreferanse?: string;
    aktoerId?: string;
    behandlingstema?: string;
    beskrivelse?: string;
    mappeId?: number;
    fristFerdigstillelse?: string;
    oppgavetype: string;
    opprettetTidspunkt?: string;
    prioritet: OppgavePrioritet;
    status: string;
    tilordnetRessurs?: string;
}

export interface IOppgaveIdent {
    ident: string;
    gruppe: IdentGruppe;
}

export enum IdentGruppe {
    AKTOERID = 'AKTOERID',
    FOLKEREGISTERIDENT = 'FOLKEREGISTERIDENT',
    NPID = 'NPID',
    ORGNR = 'ORGNR',
    SAMHANDLERNR = 'SAMHANDLERNR',
}

export enum OppgavePrioritet {
    HOY = 'HOY',
    NORM = 'NORM',
    LAV = 'LAV',
}

export enum OppgaveStatus {
    OPPRETTET = 'OPPRETTET',
    AAPNET = 'AAPNET',
    UNDER_BEHANDLING = 'UNDER_BEHANDLING',
    FERDIGSTILT = 'FERDIGSTILT',
    FEILREGISTRERT = 'FEILREGISTRERT',
}
