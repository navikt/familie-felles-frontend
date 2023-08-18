import React from 'react';
import { CheckmarkCircleIcon, FilesIcon } from '@navikt/aksel-icons';

interface IProps {
    type: 'check' | 'copy';
    size?: number;
}

const ClipboardIcon = ({ type, size = 24 }: IProps) => {
    return type === 'check' ? (
        <CheckmarkCircleIcon
            fr="mask"
            height={size}
            width={size}
            onResize={undefined}
            onResizeCapture={undefined}
        />
    ) : (
        <FilesIcon
            fr="mask"
            height={size}
            width={size}
            onResize={undefined}
            onResizeCapture={undefined}
        />
    );
};

export default ClipboardIcon;
