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

    & button.periode {
        cursor: pointer;

        & svg {
            position: relative;
            top: 2px;
        }

        &.advarsel {
            &:hover,
            &.active,
            &:focus {
                background: #fed7a3;
            }
        }

        &.feil {
            &:hover,
            &.active,
            &:focus {
                background: #e3b0a8;
            }
        }

        &.inaktiv {
            &:hover,
            &.active,
            &:focus {
                background: #c3c3c3;
            }
        }

        &.suksess {
            &:hover,
            &.active,
            &:focus {
                background: #9bd0b0;
            }
        }
    }

    & div.periode {
        & svg {
            position: relative;
            top: ${props.kompakt ? 3 : 2}px;
        }

        div.infoPin {
            &:before {
                transform: translate(-4px, -100%);
            }
        }
    }

    & .periode {
        background: #e7e9e9;
        border-top: 1px solid #59514b;
        border-bottom: 1px solid #59514b;

        height: ${props.kompakt ? 1.5 : 2}rem;
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

            &.croppedHøyre {
                border-right: none;
            }

            &.croppedVenstre {
                border-left: none;
            }

            &.croppedBegge {
                border-left: none;
                border-right: none;
            }
        }

        &.feil {
            background: #f1d8d4;
            border: 1px solid #ba3a26;

            &.croppedHøyre {
                border-right: none;
            }

            &.croppedVenstre {
                border-left: none;
            }

            &.croppedBegge {
                border-left: none;
                border-right: none;
            }
        }

        &.inaktiv {
            background: #e7e9e9;
            border: 1px solid #78706a;

            &.croppedHøyre {
                border-right: none;
            }

            &.croppedVenstre {
                border-left: none;
            }

            &.croppedBegge {
                border-left: none;
                border-right: none;
            }
        }

        &.suksess {
            background: #cde7d8;
            border: 1px solid #117938;

            &.croppedHøyre {
                border-right: none;
            }

            &.croppedVenstre {
                border-left: none;
            }

            &.croppedBegge {
                border-left: none;
                border-right: none;
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
