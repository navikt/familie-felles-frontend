import { Box } from '@navikt/ds-react';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import Styles from './Tooltip.module.less';

interface TooltipProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const Tooltip = ({ children, className }: TooltipProps) => (
    <Box
        position={'absolute'}
        paddingInline={'space-16'}
        paddingBlock={'space-8'}
        borderRadius={'4'}
        borderWidth={'1'}
        borderColor={'neutral'}
        className={classNames(className, Styles.container)}
    >
        {children}
    </Box>
);
