import React from 'react';
import { Copy, SuccessColored } from '@navikt/ds-icons';

interface IProps {
    type: 'check' | 'copy';
    size?: number;
}

const ClipboardIcon = ({ type, size = 20 }: IProps) => {
    return type === 'check' ? (
        <SuccessColored
            fr="mask"
            height={size}
            width={size}
            onResize={undefined}
            onResizeCapture={undefined}
        />
    ) : (
        <Copy
            fr="mask"
            height={size}
            width={size}
            onResize={undefined}
            onResizeCapture={undefined}
        />
    );
};

export default ClipboardIcon;
