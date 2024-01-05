import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { TimelinePeriod } from './TimelinePeriod';
import { PositionedPeriod } from '../types.internal';
import {
    ABlue50,
    AGray50,
    ASpacing4,
    ASpacing6,
    ASpacing8,
} from '@navikt/ds-tokens/dist/tokens';

interface TimelineRowStyleProps {
    $kompakt?: boolean
}

const TimelineRowStyle = styled.div<TimelineRowStyleProps>`
    flex: 1;
    height: ${(props) => `${props.$kompakt ? ASpacing6 : ASpacing8}`};
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${(props) => `${props.$kompakt ? ASpacing4 : ASpacing6}`};
`;


const EmptyRowHr = styled.hr<TimelineRowStyleProps>`
    flex: 1;
    height: ${(props) => `${props.$kompakt ? ASpacing6 : ASpacing8}`};
    width: 100%;
    border: none;
    background-color: ${AGray50};
    margin-bottom: ${(props) => `${props.$kompakt ? ASpacing4 : ASpacing6}`};

    &.aktivRad {
        background-color: ${ABlue50};
    }
`;

interface EmptyTimelineRowProps {
    active?: boolean;
    kompakt?: boolean;
    className: string;
}

interface TimelineRowProps {
    periods: PositionedPeriod[];
    onSelectPeriod?: (periode: PositionedPeriod) => void;
    active?: boolean;
    kompakt?: boolean;
    className: string;
}

export const EmptyTimelineRow = ({
    active = false,
    kompakt = false,
    className,
}: EmptyTimelineRowProps) => (
    <EmptyRowHr $kompakt={kompakt} className={classNames(active && 'aktivRad', className)} />
);

export const TimelineRow = ({
    periods,
    onSelectPeriod,
    active = false,
    kompakt = false,
    className,
}: TimelineRowProps) => (
    <TimelineRowStyle
        $kompakt={kompakt}
        className={classNames('tidslinjerad', active && 'aktivRad', className)}
    >
        {periods.map(period => (
            <TimelinePeriod
                key={period.id}
                period={period}
                onSelectPeriod={onSelectPeriod}
                active={period.active}
                kompakt={kompakt}
            />
        ))}
    </TimelineRowStyle>
);
