import React, { ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { AxisLabels } from './AxisLabels';
import { EmptyTimelineRow, TimelineRow } from './TimelineRow';
import { Etikett, Periode, Pin } from '../types.external';
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
}

const TidslinjeStyle = styled.div`
    position: relative;
    padding: 0.75rem 0;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const TidslinjeRadStyle = styled.div`
    position: relative;
    padding: 0;

    & .periode {
        cursor: pointer;
        background: #e7e9e9;
        border: 1px solid #59514b;

        height: 1.5rem;
        border-radius: 1.5rem;
        position: absolute;
        transition: box-shadow 0.1s ease;
        padding: 0;

        &.sammenhengendeFraHøyre {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }

        &.sammenhengendeFraVenstre {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }

        &.sammenhengendeFraBegge {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
        }

        &.mini {
            min-width: 0;
            padding: 0;
            &:before {
                display: none;
            }
        }
        &.mini:before {
            display: none;
        }

        &.advarsel {
            background: #ffe9cc;
            border: 1px solid #ff9100;

            &:hover,
            &.active,
            &:focus {
                background: #fed7a3;
                //background: blue;
            }
        }

        &.feil {
            background: #f1d8d4;
            border: 1px solid #ba3a26;
            &:hover,
            &.active,
            &:focus {
                background: #e3b0a8;
            }
        }

        &.inaktiv {
            background: #e7e9e9;
            border: 1px solid #78706a;
            &:hover,
            &.active,
            &:focus {
                background: #c3c3c3;
            }
        }

        &.suksess {
            background: #cde7d8;
            border: 1px solid #117938;
            &:hover,
            &.active,
            &:focus {
                background: #9bd0b0;
            }
        }

        & div.infoPin {
            position: absolute;
            background: #0067c5;
            height: 6px;
            width: 2px;
            top: 0;
            left: 50%;
            transform: translate(-1px, -7px);

            &:before {
                content: '';
                position: absolute;
                top: 0;
                width: 10px;
                height: 10px;
                background: #0067c5;
                transform: translate(-5px, -100%);
                border-radius: 50%;
            }
        }
    }
`;

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
    onSelectPeriod?: (periode: Periode) => void;
    axisLabelRenderer?: (etikett: AxisLabel) => ReactNode;
    pins?: Pin[];
}

const Timeline = React.memo(
    ({
        pins,
        rows,
        start,
        endInclusive,
        onSelectPeriod,
        activeRow,
        direction,
        axisLabelRenderer,
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
                <TidslinjeRadStyle className={classNames('tidslinjerader')}>
                    <EmptyRowsStyle>
                        {rows.map((_, i) => (
                            <EmptyTimelineRow key={i} active={i === activeRow} />
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
                    {rows.map((tidslinje, i) => (
                        <TimelineRow
                            key={tidslinje.id}
                            {...tidslinje}
                            onSelectPeriod={onSelectPeriodeWrapper}
                            active={i === activeRow}
                        />
                    ))}
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
        retning = 'stigende',
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
                axisLabelRenderer={etikettRender}
                pins={pins}
            />
        );
    },
);
