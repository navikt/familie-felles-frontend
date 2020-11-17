import * as React from 'react';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';
import { Undertekst, Element } from 'nav-frontend-typografi';
import PilVenstre from '@navikt/familie-ikoner/dist/utils/PilVenstre';
import PilNed from '@navikt/familie-ikoner/dist/utils/PilNed';
import PilHøyre from '@navikt/familie-ikoner/dist/utils/PilHøyre';
import { Journalposttype } from '@navikt/familie-typer';

const StyledDokumentliste = styled.div`
    padding: 0.5rem 1rem;
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: minmax(min-content, max-content);
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
        'ikon tittel'
        'ikon dato';
    max-width: 300px;

    :hover {
        cursor: pointer;
        background-color: ${navFarger.navLysGra};
    }
`;

const StyledJournalpostIkon = styled.span`
    grid-area: ikon;
    padding-top: 0.3rem;
`;
const StyledDato = styled(Undertekst)`
    grid-area: dato;
`;

const StyledDokumentnavn = styled(Element)`
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    color: ${navFarger.navBla};
    grid-area: tittel;
`;


interface JournalpostikonProps {
    journalposttype: Journalposttype;
}

const Journalpostikon: React.FC<JournalpostikonProps> = ({ journalposttype }) => {
    switch (journalposttype) {
        case 'I':
            return <PilVenstre heigth={16} width={16} />;
        case 'N':
            return <PilNed heigth={16} width={16} />;
        case 'U':
            return <PilHøyre heigth={16} width={16} />;
        default:
            return <div />;
    }
};


export interface DokumentlisteProps {
    tittel: string;
    dato?: string;
    journalposttype: Journalposttype;
    onClick: () => void;
}

const Dokumentliste: React.FC<DokumentlisteProps> = ({ tittel, dato, journalposttype, onClick }) => {
    return (
        <StyledDokumentliste
            role={'button'}
            onClick={() => onClick()}
        >
            <StyledJournalpostIkon>
                <Journalpostikon
                    journalposttype={journalposttype}
                />
            </StyledJournalpostIkon>
            <StyledDokumentnavn>{tittel}</StyledDokumentnavn>
            <StyledDato>{dato}</StyledDato>
        </StyledDokumentliste>
    );
};

export default Dokumentliste;
