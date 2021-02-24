export enum LocaleType {
    en = 'en',
    nb = 'nb',
    nn = 'nn',
}

export const sprakTittel: Record<LocaleType, string> = {
    [LocaleType.en]: 'English',
    [LocaleType.nb]: 'Bokmål',
    [LocaleType.nn]: 'Nynorsk',
};
