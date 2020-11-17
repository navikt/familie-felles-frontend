import React from 'react';
import Vedlegg from './src';
import { Journalposttype } from '@navikt/familie-typer';

export default {
    component: Vedlegg,
    parameters: {
        componentSubtitle: 'Vedlegg brukes til å vise informasjon om et vedlegg fra en journalpost.',
    },
    title: 'Komponenter/Vedlegg',
};

const lastNedDokument = (dokumentinfoId: string, journalpostId: string, tittel: string) => {
    // tslint:disable-next-line:no-console
    console.log('Laster ned', dokumentinfoId, journalpostId, tittel);
};
const vedleggListe = [
    {
        dokumentinfoId: '12345',
        journalpostId: '23456',
        tittel: 'Vedlegg 1',
        journalposttype: Journalposttype.I,
        dato: '2020-11-30',
        lastNedDokument,
    },
    {
        dokumentinfoId: '12344',
        journalpostId: '23454',
        tittel: 'Vedlegg 2',
        journalposttype: Journalposttype.U,
        dato: '2020-12-05',
        lastNedDokument,
    },
    {
        dokumentinfoId: '12345',
        journalpostId: '23455',
        tittel: 'Vedlegg 3',
        journalposttype: Journalposttype.N,
        dato: '2020-12-02',
        lastNedDokument,
    },
];
export const visittkort = () => {
    return vedleggListe.map((vedlegg) => {
        return <Vedlegg
            dokumentinfoId={vedlegg.dokumentinfoId}
            tittel={vedlegg.tittel}
            journalpostId={vedlegg.journalpostId}
            journalposttype={vedlegg.journalposttype}
            dato={vedlegg.dato}
            lastNedDokument={vedlegg.lastNedDokument} />;
    });
};
