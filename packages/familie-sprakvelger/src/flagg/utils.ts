import { LocaleType } from './../typer';

export const ariaLabelForEngelskFlagg = (locale: LocaleType) => {
    switch (locale) {
        case LocaleType.en:
            return 'British flag';
        case LocaleType.nb:
        case LocaleType.nn:
        default:
            return 'Britisk flagg';
    }
};

export const ariaLabelForNorskFlagg = (locale: LocaleType) => {
    switch (locale) {
        case LocaleType.en:
            return 'Norwegian flag';
        case LocaleType.nb:
        case LocaleType.nn:
        default:
            return 'Norsk flagg';
    }
};
