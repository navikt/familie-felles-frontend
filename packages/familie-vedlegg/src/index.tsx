import * as React from 'react';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';
import { Undertekst, Element } from 'nav-frontend-typografi';
import PilVenstre from '@navikt/familie-ikoner/dist/utils/PilVenstre';
import PilNed from '@navikt/familie-ikoner/dist/utils/PilNed';
import PilHøyre from '@navikt/familie-ikoner/dist/utils/PilHøyre';

const StyledVedlegg = styled.div`
    padding: 0.5rem 1rem;
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: minmax(min-content, max-content);
    grid-template-rows: repeat(2, min-content);
    grid-template-areas:
        'journalposttype tittel'
        'journalposttype dato';
    max-width: 300px;

    :hover {
        cursor: pointer;
        background-color: ${navFarger.navLysGra};
    }
`;

const StyledJournalpostIkon = styled.span`
    grid-area: journalposttype;
    padding-top: 0.3rem;
`;
const StyledDato = styled(Undertekst)`
    grid-area: dato;
`;

const StyledVedleggsnavn = styled(Element)`
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    color: ${navFarger.navBla};
    grid-area: tittel;
`;


type Journalposttype = 'I' | 'U' | 'N';

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


export interface VedleggProps {
    dokumentinfoId: string;
    tittel: string;
    journalpostId: string;
    dato?: string;
    journalposttype: Journalposttype;
    lastNedDokument: (journalpostId: string, dokumentinfoId: string, tittel: string) => void;
}

const Vedlegg: React.FC<VedleggProps> = ({ dokumentinfoId, tittel, journalpostId, dato, journalposttype, lastNedDokument }) => {
    return (
        <StyledVedlegg
            role={'button'}
            onClick={() => lastNedDokument(journalpostId, dokumentinfoId, tittel)}
        >
            <StyledJournalpostIkon>
                <Journalpostikon
                    journalposttype={journalposttype}
                />
            </StyledJournalpostIkon>
            <StyledVedleggsnavn>{tittel}</StyledVedleggsnavn>
            <StyledDato>{dato}</StyledDato>
        </StyledVedlegg>
    );
};

export default Vedlegg;
