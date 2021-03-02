import { alpha3ToAlpha2, getName } from 'i18n-iso-countries';
import { ESivilstand } from './typer';

export const landkodeTilSpråk = (landkode: string, locale: string) => {
    const landkodeIso = alpha3ToAlpha2(landkode);
    return getName(landkodeIso, locale);
};

export const hentSivilstatus = (statuskode?: string) => {
    switch (statuskode) {
        case ESivilstand.UOPPGITT:
        case ESivilstand.UGIFT:
        case ESivilstand.GIFT:
        case ESivilstand.ENKE_ELLER_ENKEMANN:
        case ESivilstand.SKILT:
        case ESivilstand.SEPARERT:
        case ESivilstand.PARTNER:
        case ESivilstand.SEPARERT_PARTNER:
        case ESivilstand.SKILT_PARTNER:
        case ESivilstand.GJENLEVENDE_PARTNER:
            return `sivilstatus.kode.${statuskode}`;
        // TPS
        // case ESivilstand.GIFT:
        case ESivilstand.REPA:
        case ESivilstand.UGIF:
        case ESivilstand.SAMB:
        case ESivilstand.SEPA:
        case ESivilstand.SEPR:
        case ESivilstand.SKIL:
        case ESivilstand.GJPA:
        case ESivilstand.ENKE:
            return `sivilstatus.kode.${statuskode}`;

        default:
            return 'sivilstatus.kode.ANNET';
    }
};
