import { Box } from '@navikt/ds-react';
import classNames from 'classnames';
import type { Dayjs } from 'dayjs';
import type { EnkelPeriode } from '../types.external';
import Styles from './AktivtUtsnitt.module.less';
import { usePositionAndSize } from './usePositionAndSize';

interface IntervallProps {
    tidslinjestart: Dayjs;
    tidslinjeslutt: Dayjs;
    aktivtUtsnitt: EnkelPeriode;
    direction: 'left' | 'right';
}

export const AktivtUtsnittBorder = ({ aktivtUtsnitt, tidslinjestart, tidslinjeslutt, direction }: IntervallProps) => {
    const style = usePositionAndSize({
        periode: aktivtUtsnitt,
        tidslinjestart,
        tidslinjeslutt,
        direction,
    });
    return (
        <Box
            position={'absolute'}
            bottom={'space-0'}
            right={'space-0'}
            width={'100%'}
            height={'100%'}
            className={classNames('aktivtUtsnittContainer', Styles.container)}
        >
            <Box
                position={'absolute'}
                height={'100%'}
                borderWidth={'0'}
                className={classNames('aktivPeriodeBorder', Styles.utsnitt, Styles.border)}
                style={style}
            />
        </Box>
    );
};

export const AktivtUtsnittBakgrunn = ({ aktivtUtsnitt, tidslinjestart, tidslinjeslutt, direction }: IntervallProps) => {
    const style = usePositionAndSize({
        periode: aktivtUtsnitt,
        tidslinjestart,
        tidslinjeslutt,
        direction,
    });
    return (
        <Box
            position={'absolute'}
            bottom={'space-0'}
            right={'space-0'}
            width={'100%'}
            height={'100%'}
            className={classNames('aktivtUtsnittContainer', Styles.container)}
        >
            <Box
                position={'absolute'}
                height={'100%'}
                borderWidth={'0'}
                className={classNames('aktivPeriodeBakgrunn', Styles.utsnitt, Styles.bakgrunn)}
                style={style}
            />
        </Box>
    );
};
