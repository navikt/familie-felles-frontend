import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { TimelinePeriod } from './TimelinePeriod';
import { PositionedPeriod } from '../types.internal';

const TimelineRowStyle = styled.div(
    (props: { compact?: boolean }) => `
    flex: 1;
    height: ${props.compact ? 1.5 : 2}rem;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: ${props.compact ? 0 : 1.56}rem;
    margin-bottom: 1.5rem;
`,
);

const EmptyRowHr = styled.hr(
    (props: { compact: boolean }) =>
        `
    flex: 1;
    height: ${props.compact ? 1.5 : 2}rem;
    width: 100%;
    border: none;
    background-color: #f8f8f8;
    margin-top: ${props.compact ? 0 : 1.56}rem;;
    margin-bottom: 1.5rem;

    &.aktivRad {
        background-color: #e5f3ff;
    }
    `,
);

interface EmptyTimelineRowProps {
    active?: boolean;
    compact?: boolean;
}

interface TimelineRowProps {
    periods: PositionedPeriod[];
    onSelectPeriod?: (periode: PositionedPeriod) => void;
    active?: boolean;
    compact?: boolean;
}

export const EmptyTimelineRow = ({ active = false, compact = false }: EmptyTimelineRowProps) => (
    <EmptyRowHr compact={compact} className={classNames(active && 'aktivRad')} />
);

export const TimelineRow = ({
    periods,
    onSelectPeriod,
    active = false,
    compact = false,
}: TimelineRowProps) => (
    <TimelineRowStyle
        compact={compact}
        className={classNames('tidslinjerad', active && 'aktivRad')}
    >
        {periods.map(period => (
            <TimelinePeriod
                key={period.id}
                period={period}
                onSelectPeriod={onSelectPeriod}
                active={period.active}
            />
        ))}
    </TimelineRowStyle>
);
