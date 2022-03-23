import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { TimelinePeriod } from './TimelinePeriod';
import { PositionedPeriod } from '../types.internal';

const TimelineRowStyle = styled.div`
    flex: 1;
    height: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 1.5rem;
`;

const EmptyRowHr = styled.hr`
    flex: 1;
    height: 1.5rem;
    width: 100%;
    border: none;
    background-color: #f8f8f8;
    margin-top: 0;
    margin-bottom: 1.5rem;

    &.aktivRad {
        background-color: #e5f3ff;
    }
`;

interface EmptyTimelineRowProps {
    active?: boolean;
}

interface TimelineRowProps {
    periods: PositionedPeriod[];
    onSelectPeriod?: (periode: PositionedPeriod) => void;
    active?: boolean;
}

export const EmptyTimelineRow = ({ active = false }: EmptyTimelineRowProps) => (
    <EmptyRowHr className={classNames(active && 'aktivRad')} />
);

export const TimelineRow = ({ periods, onSelectPeriod, active = false }: TimelineRowProps) => (
    <TimelineRowStyle className={classNames('tidslinjerad', active && 'aktivRad')}>
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
