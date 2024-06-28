import * as React from 'react';
import styled from 'styled-components';
import PilVenstre from '@navikt/familie-ikoner/dist/utils/PilVenstre';
import PilNed from '@navikt/familie-ikoner/dist/utils/PilNed';
import PilHøyre from '@navikt/familie-ikoner/dist/utils/PilHøyre';
import { ILogiskVedlegg, Journalposttype } from '@navikt/familie-typer';
import { LogiskeVedlegg } from './LogiskeVedlegg';
import { BodyShort, Detail, Label } from '@navikt/ds-react';
import '@navikt/ds-css';

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
        background-color: var(--a-gray-100);
        cursor: pointer;
    }
`;

const JournalpostIkon = styled.span`
    grid-area: ikon;
    padding-top: 0.3rem;
`;
const StyledUndertekst = styled(Detail)`
    grid-area: dato;
    display: flex;
`;

const StyledDokumentnavn = styled(Label)`
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    color: var(--a-blue-500);
    grid-area: tittel;
    display: flex;
    text-align: left;
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
    skalBrukePiler?: boolean;
}

export interface DokumentlisteProps {
    dokumenter: DokumentProps[];
    onClick: (dokument: DokumentProps) => void;
    className?: string;
    skalBrukePiler?: boolean;
}

export const DokumentElement: React.FC<DokumentElementProps> = ({
    dokument,
    onClick,
    skalBrukePiler,
}) => {
    return (
        <li>
            <StyledKnapp onClick={() => onClick(dokument)}>
                <JournalpostIkon>
                    {skalBrukePiler ? (
                        <Journalpostikon journalposttype={dokument.journalposttype} />
                    ) : (
                        <BodyShort>{dokument.journalposttype}</BodyShort>
                    )}
                </JournalpostIkon>
                <StyledDokumentnavn size={'small'}>{dokument.tittel}</StyledDokumentnavn>
                <LogiskeVedlegg logiskeVedlegg={dokument.logiskeVedlegg} />
                <StyledUndertekst>{dokument.dato}</StyledUndertekst>
            </StyledKnapp>
        </li>
    );
};

export const Dokumentliste: React.FC<DokumentlisteProps> = ({
    dokumenter,
    onClick,
    className,
    skalBrukePiler = true,
}) => {
    return (
        <StyledDokumentListe className={className}>
            {dokumenter.map((dokument: DokumentProps, indeks: number) => {
                return (
                    <DokumentElement
                        dokument={dokument}
                        onClick={onClick}
                        key={indeks}
                        skalBrukePiler={skalBrukePiler}
                    />
                );
            })}
        </StyledDokumentListe>
    );
};

export default Dokumentliste;
