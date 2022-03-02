import * as React from 'react';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';
import { Element, Undertekst } from 'nav-frontend-typografi';
import PilVenstre from '@navikt/familie-ikoner/dist/utils/PilVenstre';
import PilNed from '@navikt/familie-ikoner/dist/utils/PilNed';
import PilHøyre from '@navikt/familie-ikoner/dist/utils/PilHøyre';
import { ILogiskVedlegg, Journalposttype } from '@navikt/familie-typer';
import { LogiskeVedlegg } from './LogiskeVedlegg';

const StyledDokumentListe = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

const StyledKnapp = styled.button`
    padding: 0.5rem 1rem;
    display: grid;
    grid-gap: 0 1rem;
    grid-template-columns: minmax(min-content, max-content);
    grid-template-rows: repeat(3, min-content);
    grid-template-areas:
        'ikon tittel'
        'ikon vedlegg'
        'ikon dato';
    max-width: 300px;
    background-color: transparent;
    border: none;

    :hover {
        background-color: ${navFarger.navLysGra};
        cursor: pointer;
    }
`;

const JournalpostIkon = styled.span`
    grid-area: ikon;
    padding-top: 0.3rem;
`;
const StyledUndertekst = styled(Undertekst)`
    grid-area: dato;
    display: flex;
`;

const StyledDokumentnavn = styled(Element)`
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    color: ${navFarger.navBla};
    grid-area: tittel;
    display: flex;
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

export interface DokumentProps {
    tittel: string;
    dato?: string;
    journalpostId: string;
    journalposttype: Journalposttype;
    dokumentinfoId: string;
    filnavn?: string;
    logiskeVedlegg?: ILogiskVedlegg[];
}

export interface DokumentElementProps {
    dokument: DokumentProps;
    onClick: (dokument: DokumentProps) => void;
}

export interface DokumentlisteProps {
    dokumenter: DokumentProps[];
    onClick: (dokument: DokumentProps) => void;
    className?: string;
}

export const DokumentElement: React.FC<DokumentElementProps> = ({ dokument, onClick }) => {
    return (
        <li>
            <StyledKnapp onClick={() => onClick(dokument)}>
                <JournalpostIkon>
                    <Journalpostikon journalposttype={dokument.journalposttype} />
                </JournalpostIkon>
                <StyledDokumentnavn>{dokument.tittel}</StyledDokumentnavn>
                <LogiskeVedlegg logiskeVedlegg={dokument.logiskeVedlegg} />
                <StyledUndertekst>{dokument.dato}</StyledUndertekst>
            </StyledKnapp>
        </li>
    );
};

export const Dokumentliste: React.FC<DokumentlisteProps> = ({ dokumenter, onClick, className }) => {
    return (
        <StyledDokumentListe className={className}>
            {dokumenter.map((dokument: DokumentProps, indeks: number) => {
                return <DokumentElement dokument={dokument} onClick={onClick} key={indeks} />;
            })}
        </StyledDokumentListe>
    );
};

export default Dokumentliste;
