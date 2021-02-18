export enum LocaleType {
    en = 'en',
    nb = 'nb',
    nn = 'nn',
}

export interface Sprak {
    tittel: string;
    locale: LocaleType;
}
