import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { TimelinePeriod } from './TimelinePeriod';
import { PositionedPeriod } from '../types.internal';
import {
    NavdsGlobalColorBlue50,
    NavdsGlobalColorGray50,
    NavdsSpacing4,
    NavdsSpacing6,
    NavdsSpacing8,
} from '@navikt/ds-tokens/dist/tokens';

const TimelineRowStyle = styled.div(
    (props: { kompakt?: boolean }) => `
    flex: 1;
    height: ${props.kompakt ? NavdsSpacing6 : NavdsSpacing8};
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: ${props.kompakt ? NavdsSpacing4 : NavdsSpacing6};
`,
);

const EmptyRowHr = styled.hr(
    (props: { kompakt: boolean }) =>
        `
    flex: 1;
    height: ${props.kompakt ? NavdsSpacing6 : NavdsSpacing8};
    width: 100%;
    border: none;
    background-color: ${NavdsGlobalColorGray50};
    margin-bottom: ${props.kompakt ? NavdsSpacing4 : NavdsSpacing6};

    &.aktivRad {
        background-color: ${NavdsGlobalColorBlue50};
    }
    `,
);

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
    <EmptyRowHr kompakt={kompakt} className={classNames(active && 'aktivRad', className)} />
);

export const TimelineRow = ({
    periods,
    onSelectPeriod,
    active = false,
    kompakt = false,
    className,
}: TimelineRowProps) => (
    <TimelineRowStyle
        kompakt={kompakt}
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
