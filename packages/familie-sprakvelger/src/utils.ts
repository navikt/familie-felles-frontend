import { LocaleType } from './typer';

export const hentSprakvelgerLabelTekst = (locale: LocaleType) => {
    switch (locale) {
        case LocaleType.en:
            return 'Language selection';
        case LocaleType.nn:
            return 'Språkval';
        default:
            return 'Språkvalg';
    }
};
