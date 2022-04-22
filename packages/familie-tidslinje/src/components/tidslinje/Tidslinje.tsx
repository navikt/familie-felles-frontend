import React, { ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { AktivtUtsnittBakgrunn, AktivtUtsnittBorder } from './AktivtUtsnitt';
import { AxisLabels } from './AxisLabels';
import { EmptyTimelineRow, TimelineRow } from './TimelineRow';
import { EnkelPeriode, Etikett, Periode, Pin } from '../types.external';
import { AxisLabel, InternalSimpleTimeline, PositionedPeriod } from '../types.internal';
import { useSenesteDato, useTidligsteDato, useTidslinjerader } from './useTidslinjerader';
import { Pins } from './Pins';

export interface TidslinjeProps {
    /**
     * Perioder som rendres på tidslinjen. Rendres som 'button' dersom 'onSelectPeriode' er satt, ellers som en 'div'.
     * Hver liste av `Periode`-objekter representerer en egen rad i tidslinjen.
     */
    rader: Periode[][];
    /**
     * Bestemmer startpunktet for tidslinjen. Defaulter til tidligste dato blandt alle perioder i tidslinjen.
     */
    startDato?: Date;
    /**
     * Bestemmer sluttpunktet for tidslinjen. Defaulter til seneste dato blandt alle perioder i tidslinjen.
     */
    sluttDato?: Date;
    /**
     * Handling som skal skje når en bruker klikker på/interagerer med en periodeknapp.
     */
    onSelectPeriode?: (periode: Periode) => void;
    /**
     * Utsnittet av tidslinjen som skal markeres som aktivt.
     */
    aktivtUtsnitt?: EnkelPeriode;
    /**
     * Raden som skal markeres som aktiv.
     */
    aktivRad?: number;
    /**
     * Retningen periodene sorteres på. Default er 'stigende', hvor tidligste periode da vil rendres til venstre i
     * tidslinjen og seneste periode vil rendres til høyre.
     */
    retning?: 'stigende' | 'synkende';
    /**
     * Funksjon som tar en etikett og returnerer det som skal rendres.
     */
    etikettRender?: (etikett: Etikett) => ReactNode;
    /**
     * Markeringer for enkeltdager på tidslinjen.
     */
    pins?: Pin[];
    /**
     * Bruke kompakt style, med smalere stolper og uten margin.
     */
    kompakt?: boolean;
}

const TidslinjeStyle = styled.div`
    position: relative;
    padding: 0.75rem 0;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const TidslinjeRadStyle = styled.div(
    (props: { kompakt?: boolean }) => `
    position: relative;
    padding: 0;
    border-top: ${props.kompakt ? 'none' : '1px solid #e7e9e9'};

    .tidslinjerad.førsterad, hr.førsterad {
        margin-top: ${props.kompakt ? '0rem' : '1.56rem'};
    }
`,
);

const EmptyRowsStyle = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

export interface TimelineProps {
    rows: InternalSimpleTimeline[];
    start: Dayjs;
    direction: 'left' | 'right';
    endInclusive: Dayjs;
    activeRow?: number;
    aktivtUtsnitt?: EnkelPeriode;
    onSelectPeriod?: (periode: Periode) => void;
    axisLabelRenderer?: (etikett: AxisLabel) => ReactNode;
    pins?: Pin[];
    kompakt?: boolean;
}

const Timeline = React.memo(
    ({
        pins,
        rows,
        start,
        endInclusive,
        onSelectPeriod,
        aktivtUtsnitt,
        activeRow,
        direction,
        axisLabelRenderer,
        kompakt = false,
    }: TimelineProps) => {
        const onSelectPeriodeWrapper =
            onSelectPeriod &&
            useCallback(
                (periode: PositionedPeriod) => {
                    onSelectPeriod?.({
                        id: periode.id,
                        fom: periode.start.toDate(),
                        tom: periode.endInclusive.toDate(),
                        disabled: periode.disabled,
                        status: periode.status,
                    });
                },
                [onSelectPeriod],
            );

        return (
            <TidslinjeStyle className={classNames('tidslinje')}>
                <AxisLabels
                    start={start}
                    slutt={endInclusive}
                    direction={direction}
                    etikettRender={axisLabelRenderer}
                />
                <TidslinjeRadStyle kompakt={kompakt} className={classNames('tidslinjerader')}>
                    <EmptyRowsStyle>
                        {rows.map((_, i) => (
                            <EmptyTimelineRow
                                kompakt={kompakt}
                                className={classNames(i === 0 && 'førsterad')}
                                key={i}
                                active={i === activeRow}
                            />
                        ))}
                    </EmptyRowsStyle>
                    {pins && (
                        <Pins
                            pins={pins}
                            start={start}
                            slutt={endInclusive}
                            direction={direction}
                        />
                    )}
                    {aktivtUtsnitt && (
                        <AktivtUtsnittBakgrunn
                            tidslinjestart={start}
                            tidslinjeslutt={endInclusive}
                            aktivtUtsnitt={aktivtUtsnitt}
                            direction={direction}
                        />
                    )}
                    {rows.map((tidslinje, i) => (
                        <TimelineRow
                            key={tidslinje.id}
                            className={classNames(i === 0 && 'førsterad')}
                            {...tidslinje}
                            onSelectPeriod={onSelectPeriodeWrapper}
                            active={i === activeRow}
                            kompakt={kompakt}
                        />
                    ))}
                    {aktivtUtsnitt && (
                        <AktivtUtsnittBorder
                            tidslinjestart={start}
                            tidslinjeslutt={endInclusive}
                            aktivtUtsnitt={aktivtUtsnitt}
                            direction={direction}
                        />
                    )}
                </TidslinjeRadStyle>
            </TidslinjeStyle>
        );
    },
);

/**
 * Viser perioder i en tidslinje.
 */
export const Tidslinje = React.memo(
    ({
        pins,
        rader,
        aktivRad,
        startDato,
        sluttDato,
        etikettRender,
        onSelectPeriode,
        aktivtUtsnitt,
        retning = 'stigende',
        kompakt = false,
    }: TidslinjeProps) => {
        if (!rader) throw new Error('Tidslinjen mangler rader.');

        const direction = retning === 'stigende' ? 'left' : 'right';
        const start = useTidligsteDato({ startDato, rader }).startOf('day');
        const endInclusive = useSenesteDato({ sluttDato, rader }).endOf('day');
        const rows = useTidslinjerader(rader, start, endInclusive, direction);

        return (
            <Timeline
                rows={rows}
                start={start}
                activeRow={aktivRad}
                direction={direction}
                endInclusive={endInclusive}
                onSelectPeriod={onSelectPeriode}
                aktivtUtsnitt={aktivtUtsnitt}
                axisLabelRenderer={etikettRender}
                pins={pins}
                kompakt={kompakt}
            />
        );
    },
);
