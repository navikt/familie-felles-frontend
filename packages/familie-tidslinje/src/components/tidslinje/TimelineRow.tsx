import { Box, HStack } from '@navikt/ds-react';
import { Space24, Space32 } from '@navikt/ds-tokens/dist/tokens';
import classNames from 'classnames';
import type { PositionedPeriod } from '../types.internal';
import { TimelinePeriod } from './TimelinePeriod';

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

export const EmptyTimelineRow = ({ active = false, kompakt = false, className }: EmptyTimelineRowProps) => (
    <Box
        asChild
        height={kompakt ? Space24 : Space32}
        flexBasis={'0'}
        flexShrink={'1'}
        flexGrow={'1'}
        width={'100%'}
        background={active ? 'accent-moderate' : 'neutral-moderate'}
        marginBlock={kompakt ? 'space-0 space-16' : 'space-0 space-24'}
        borderWidth={'0'}
    >
        <hr className={classNames(active && 'aktivRad', className)} />
    </Box>
);

export const TimelineRow = ({
    periods,
    onSelectPeriod,
    active = false,
    kompakt = false,
    className,
}: TimelineRowProps) => (
    <HStack
        align={'center'}
        position={'relative'}
        height={kompakt ? Space24 : Space32}
        marginBlock={kompakt ? 'space-0 space-16' : 'space-0 space-24'}
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
    </HStack>
);
