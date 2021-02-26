export enum ESivilstand {
    // GIFT = 'GIFT',
    REPA = 'REPA',
    UGIF = 'UGIF',
    ENKE = 'ENKE',
    GJPA = 'GJPA',
    SEPA = 'SEPA',
    SEPR = 'SEPR',
    SKIL = 'SKIL',
    SKPA = 'SKPA',
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
            return 'Annen sivilstatus enn GIFT, UGIF, SAMB, SEPA, SKIL, SEPR';
    }
};
