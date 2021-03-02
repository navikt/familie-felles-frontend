import { Alpha3Code } from 'i18n-iso-countries';

export interface IPersonopplysninger {
    fnr: string;
    statsborgerskap: Alpha3Code[];
    sivilstand?: string;
    adresse: IAdresse;
    kontakttelefon: string;
}

export interface IAdresse {
    adresse: string;
    postnummer: string;
    poststed?: string;
}

export enum ESvarTekstid {
    JA = 'svar.ja',
    NEI = 'svar.nei',
}

export enum ESivilstand {
    // GIFT = 'GIFT',
    REPA = 'REPA',
    UGIF = 'UGIF',
    ENKE = 'ENKE',
    GJPA = 'GJPA',
    SEPA = 'SEPA',
    SEPR = 'SEPR',
    SKIL = 'SKIL',
    SAMB = 'SAMB',

    UOPPGITT = 'UOPPGITT',
    UGIFT = 'UGIFT',
    GIFT = 'GIFT',
    ENKE_ELLER_ENKEMANN = 'ENKE_ELLER_ENKEMANN',
    SKILT = 'SKILT',
    SEPARERT = 'SEPARERT',
    PARTNER = 'PARTNER',
    SEPARERT_PARTNER = 'SEPARERT_PARTNER',
    SKILT_PARTNER = 'SKILT_PARTNER',
    GJENLEVENDE_PARTNER = 'GJENLEVENDE_PARTNER',
}
