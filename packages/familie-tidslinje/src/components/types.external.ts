import { ReactNode } from 'react';
import { AxisLabel } from './types.internal';

export interface EnkelPeriode {
    /**
     * Startdato for perioden, mao. periodens høyre kant.
     */
    fom: Date;
    /**
     * Sluttdato for perioden, mao. periodens venstre kant.
     */
    tom: Date;
}

export interface Periode extends EnkelPeriode {
    /**
     * Brukes for å style/fargesette periodeknappene og indikerer status for perioden.
     */
    status: 'suksess' | 'feil' | 'advarsel' | 'inaktiv' | 'ukjent';
    /**
     * Brukes for å unikt identifisere perioden, f.eks. om du ønsker å identifisere
     * perioden du klikker på med `onSelectPeriod`-funksjonen.
     */
    id?: string;
    /**
     * Gjør at periodeknappen ikke kaller `onSelectPeriod` når den klikkes.
     */
    disabled?: boolean;
    /**
     * Legges på periodeknappen og kan brukes for å stilsette knappen, f.eks. om
     * man ønsker forskjellige ikoner på knappene for å visuelt identifisere
     * forskjellige typer periods.
     */
    className?: string;
    /**
     * Bestemmer om perioden skal markeres som aktiv.
     */
    active?: boolean;
    /**
     * Dersom perioden har hoverLabel satt, vises en tooltip med hoverLabel-innholdet på hover over periodeknappen
     */
    hoverLabel?: ReactNode;
    /**
     * Indikerer om det skal rendres en blå markering over perioden.
     */
    infoPin?: boolean;
    /**
     * Innhold som skal vises inne i en periode i tidslinjen. Kan f.eks. være ikon, tekst eller ikon+tekst.
     */
    children?: ReactNode;
}

export interface Pin {
    /**
     * Dato objektet gjelder for og datoen den skal plasseres på i tidslinja.
     */
    date: Date;
    /**
     * Innhold som rendres ved hover.
     */
    render?: ReactNode;
}

export type Etikett = AxisLabel;
