import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';

export type PeriodStatus = 'suksess' | 'advarsel' | 'feil' | 'inaktiv' | 'ukjent';
export type Percentage = number;

export interface Positioned {
    horizontalPosition: number;
    direction: 'left' | 'right';
}

export interface Period {
    start: Dayjs;
    endInclusive: Dayjs;
}

export interface PositionedPeriod extends Period, Positioned {
    id: string;
    width: number;
    status: PeriodStatus;
    active?: boolean;
    connectingEdge?: 'left' | 'right' | 'both';
    cropped?: 'left' | 'right' | 'both';
    disabled?: boolean;
    className?: string;
    hoverLabel?: ReactNode;
    infoPin?: boolean;
    children?: ReactNode;
}

export interface Spatial {
    width: number;
}

export interface AxisLabel extends Positioned, Spatial {
    label: string;
    date: Date;
}

export interface InternalSimpleTimeline {
    id: string;
    periods: PositionedPeriod[];
}
