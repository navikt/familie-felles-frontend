import React from 'react';
import Dokumentliste, { DokumentProps } from './src';
import { Journalposttype } from '@navikt/familie-typer';
const dokumenterForStory: DokumentProps[] = [
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
        tittel: 'Et litt lengre navn på et dokument som går over to linjer',
        journalposttype: Journalposttype.U,
        dato: '2020-12-05',
        logiskeVedlegg: [
            { logiskVedleggId: '1', tittel: 'Manuelt skannet innhold 1' },
            { logiskVedleggId: '2', tittel: 'Manuelt skannet innhold 2' },
        ],
    },
    {
        dokumentinfoId: '12345',
        journalpostId: '23455',
        tittel: 'Dokument 3',
        journalposttype: Journalposttype.N,
        dato: '2020-12-02',
    },
];

export default {
    component: Dokumentliste,
    parameters: {
        componentSubtitle:
            'Dokumentliste-komponenten brukes til å vise informasjon om dokumenter fra journalposter.',
    },
    title: 'Komponenter/Dokumentliste',
    args: {
        dokumenter: dokumenterForStory,
    },
};

const lastNedDokument = (dokument: DokumentProps): void => {
    // tslint:disable-next-line:no-console
    console.log('Laster ned', dokument);
};

interface Props {
    dokumenter: DokumentProps[];
}
export const Dokumentlistekomponent = (args: Props) => {
    return (
        <>
            <Dokumentliste onClick={lastNedDokument} {...args} />
            <Dokumentliste onClick={lastNedDokument} skalBrukePiler={false} {...args} />
        </>
    );
};
