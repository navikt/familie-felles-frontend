import { Box } from '@navikt/ds-react';
import classNames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import type { Pin } from '../types.external';
import { position } from './calc';
import Styles from './Pins.module.less';
import { Tooltip } from './Tooltip';

const PinView = ({ render }: Partial<Pin>) => {
    const [showRender, setShowRender] = useState(false);
    return (
        <Box
            className={classNames('pin', Styles.pin)}
            onMouseOver={() => setShowRender(true)}
            onMouseLeave={() => setShowRender(false)}
            position={'absolute'}
            height={'calc(100% + 10px'}
            width={'1px'}
        >
            {showRender && render && <Tooltip className={classNames('tooltip', Styles.tooltip)}>{render}</Tooltip>}
        </Box>
    );
};

interface PinsProps {
    pins: Pin[];
    start: Dayjs;
    slutt: Dayjs;
    direction: 'left' | 'right';
}

export const Pins = ({ pins, start, slutt, direction }: PinsProps) => (
    <Box position={'absolute'} width={'100%'} height={'100%'} className={'pins'}>
        {pins.map(({ date, render }, index) => (
            <Box
                position={'absolute'}
                height={'100%'}
                // biome-ignore lint/suspicious/noArrayIndexKey: Vi har ingen god unik id vi kan bruke.
                key={index}
                className={'container'}
                style={{ [direction]: `${position(dayjs(date), start, slutt)}%` }}
            >
                <PinView render={render} />
            </Box>
        ))}
    </Box>
);
