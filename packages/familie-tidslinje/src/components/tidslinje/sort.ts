import type { Dayjs } from 'dayjs';
import type { Period, PositionedPeriod } from '../types.internal';

export const sisteDato = (a: Dayjs, b: Dayjs): number => b.diff(a);

export const sistePeriode = (a: PositionedPeriod, b: PositionedPeriod): number =>
    a.horizontalPosition - b.horizontalPosition;

export const sisteEnklePeriode = (a: Period, b: Period): number => b.endInclusive.diff(a.endInclusive);
