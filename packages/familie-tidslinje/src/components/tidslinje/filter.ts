import type { Dayjs } from 'dayjs';
import type { Positioned, Spatial } from '../types.internal';

export const erSynlig = ({ horizontalPosition }: Positioned): boolean =>
    horizontalPosition <= 100 && horizontalPosition >= 0;

export const innenEtDøgn = (dato1: Dayjs, dato2: Dayjs): boolean => Math.abs(dato1.diff(dato2, 'day')) <= 1;

export const invisiblePeriods = ({ horizontalPosition, width }: Positioned & Spatial) =>
    horizontalPosition >= 0 && horizontalPosition <= 100 && width > 0;
