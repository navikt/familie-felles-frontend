import { ESvar, ESvarTekstid, ISvar } from '../models/felles/spørsmålogsvar';

export const JaNeiSvar = (): ISvar[] => [JaSvar(), NeiSvar()];

export const NeiSvar = (): ISvar => ({
    id: ESvar.NEI,
    svarTekst: ESvarTekstid.NEI,
});
export const JaSvar = (): ISvar => ({
    id: ESvar.JA,
    svarTekst: ESvarTekstid.JA,
});
