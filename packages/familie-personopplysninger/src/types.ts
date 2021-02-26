// om deg
export interface IPersonopplysninger {
    fnr: string;
    statsborgerskap: string[];
    sivilstand?: string;
    adresse: IAdresse;
    kontakttelefon: string;
}

export interface IAdresse {
    adresse: string;
    postnummer: string;
    poststed?: string;
}

// spørsmål og svar
export enum ESvar {
    JA = 'JA',
    NEI = 'NEI',
}

export enum ESvarTekstid {
    JA = 'svar.ja',
    NEI = 'svar.nei',
}
