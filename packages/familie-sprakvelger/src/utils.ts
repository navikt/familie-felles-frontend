export const hentValgtSpråk = (locale: LocaleType) => {
    let språk: string = '';
    locale === LocaleType.en
        ? (språk = LangType.English)
        : locale === LocaleType.nn
        ? (språk = LangType.Nynorsk)
        : (språk = LangType.Bokmål);
    return språk;
};

export const hentListeMedSpråk = (): Språk[] => [
    { tittel: 'Bokmål', locale: 'nb' },
    { tittel: 'English', locale: 'en' },
];


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

export interface LocaleString {
    [key: string]: string | undefined;
    nb?: string;
    en?: string;
    nn?: string;
}

export interface Språk {
    tittel: string;
    locale: string;
}


