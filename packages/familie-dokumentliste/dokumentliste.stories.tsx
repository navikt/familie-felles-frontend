import React from 'react';
import Dokumentliste, { DokumentProps } from './src';
import { Journalposttype } from '@navikt/familie-typer';

export default {
    component: Dokumentliste,
    parameters: {
        componentSubtitle: 'Dokumentliste-komponenten brukes til å vise informasjon om dokumenter fra journalposter.',
    },
    title: 'Komponenter/Dokumentliste',
};

const lastNedDokument = (dokument: DokumentProps): void => {
    // tslint:disable-next-line:no-console
    console.log('Laster ned', dokument);
};
const dokumenter = [
    {
        dokumentinfoId: '12345',
        journalpostId: '23456',
        tittel: 'Dokument 1',
        journalposttype: Journalposttype.I,
        dato: '2020-11-30',
    },
    {
        dokumentinfoId: '12344',
        journalpostId: '23454',
        tittel: 'Dokument 2',
        journalposttype: Journalposttype.U,
        dato: '2020-12-05',
    },
    {
        dokumentinfoId: '12345',
        journalpostId: '23455',
        tittel: 'Dokument 3',
        journalposttype: Journalposttype.N,
        dato: '2020-12-02',
    },
];
export const dokumentlistekomponent = () => {
    return (<
            Dokumentliste
            dokumenter={dokumenter}
            onClick={lastNedDokument} />
    );

};
