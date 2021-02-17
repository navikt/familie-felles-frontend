export enum LocaleType {
    en = 'en',
    nb = 'nb',
    nn = 'nn',
}

export enum LangType {
    English = 'English',
    Bokmål = 'Bokmål',
    Nynorsk = 'Nynorsk',
}

export interface Sprak {
    tittel: string;
    locale: LocaleType;
}
