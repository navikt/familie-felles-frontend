import dayjs, { Dayjs } from 'dayjs';
import { nanoid } from 'nanoid';
import { InternalSimpleTimeline, PositionedPeriod } from '../types.internal';
import { Periode } from '../types.external';
import { horizontalPositionAndWidth } from './calc';
import { innenEtDøgn, invisiblePeriods } from './filter';
import { sistePeriode } from './sort';
import { useMemo } from 'react';
import { TidslinjeProps } from './Tidslinje';

const spatialPeriod = (
    period: Periode,
    timelineStart: Dayjs,
    timelineEndInclusive: Dayjs,
    direction: 'left' | 'right' = 'left',
): PositionedPeriod => {
    const start = dayjs(period.fom);
    const endInclusive = dayjs(period.tom);
    const { horizontalPosition, width } = horizontalPositionAndWidth(
        start.startOf('day'),
        endInclusive.endOf('day'),
        timelineStart,
        timelineEndInclusive,
    );
    return {
        id: period.id || nanoid(),
        start: start,
        endInclusive: endInclusive,
        horizontalPosition: horizontalPosition,
        hoverLabel: period.hoverLabel,
        direction: direction,
        className: period.className,
        disabled: period.disabled,
        status: period.status,
        active: period.active,
        infoPin: period.infoPin,
        width: width,
        children: period.children,
    };
};

const adjustedEdges = (
    period: PositionedPeriod,
    i: number,
    allPeriods: PositionedPeriod[],
): PositionedPeriod => {
    const left = i > 0 && innenEtDøgn(allPeriods[i - 1].endInclusive, period.start);
    const right =
        i < allPeriods.length - 1 && innenEtDøgn(period.endInclusive, allPeriods[i + 1].start);
    return left && right
        ? { ...period, connectingEdge: 'both' }
        : left
          ? { ...period, connectingEdge: 'left' }
          : right
            ? { ...period, connectingEdge: 'right' }
            : period;
};

const trimmedPeriods = (period: PositionedPeriod): PositionedPeriod => {
    let { horizontalPosition, width, connectingEdge } = period;
    let cropped: 'left' | 'right' | 'both' | undefined = undefined;
    if (horizontalPosition + width > 100) {
        width = 100 - horizontalPosition;
        cropped = 'right';
        connectingEdge = connectingEdge === 'left' || connectingEdge === 'both' ? 'both' : 'right';
    }
    if (horizontalPosition < 0 && horizontalPosition + width > 0) {
        width = horizontalPosition + width;
        horizontalPosition = 0;
        cropped = cropped === 'right' ? 'both' : 'left';
        connectingEdge = connectingEdge === 'right' || connectingEdge === 'both' ? 'both' : 'left';
    }
    return {
        ...period,
        width: width,
        horizontalPosition: horizontalPosition,
        connectingEdge: connectingEdge,
        cropped: cropped,
    };
};

export const useTidslinjerader = (
    rader: Periode[][],
    startDato: Dayjs,
    sluttDato: Dayjs,
    direction: 'left' | 'right',
): InternalSimpleTimeline[] =>
    useMemo(
        () =>
            rader.map(perioder => {
                const tidslinjeperioder = perioder
                    .map((periode: Periode) =>
                        spatialPeriod(periode, startDato, sluttDato, direction),
                    )
                    .sort(sistePeriode)
                    .map(adjustedEdges)
                    .map(trimmedPeriods)
                    .filter(invisiblePeriods);
                return {
                    id: nanoid(),
                    periods: direction === 'left' ? tidslinjeperioder : tidslinjeperioder.reverse(),
                };
            }),
        [rader, startDato, sluttDato, direction],
    );

const tidligsteDato = (tidligst: Date, periode: Periode) =>
    periode.fom < tidligst ? periode.fom : tidligst;

const tidligsteFomDato = (rader: Periode[][]) => rader.flat().reduce(tidligsteDato, new Date());

export const useTidligsteDato = ({ startDato, rader }: TidslinjeProps) =>
    useMemo(
        () => (startDato ? dayjs(startDato) : dayjs(tidligsteFomDato(rader))),
        [startDato, rader],
    );

const senesteDato = (senest: Date, periode: Periode) =>
    periode.tom > senest ? periode.tom : senest;

const senesteTomDato = (rader: Periode[][]) => rader.flat().reduce(senesteDato, new Date(0));

export const useSenesteDato = ({ sluttDato, rader }: TidslinjeProps) =>
    useMemo(
        () => (sluttDato ? dayjs(sluttDato) : dayjs(senesteTomDato(rader)).add(1, 'day')),
        [sluttDato, rader],
    );
