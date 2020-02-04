import React from 'react';
import CheckIcon from './CheckIcon';
import CopyIcon from './CopyIcon';

interface IProps {
    type: 'check' | 'copy';
    size?: number;
}

const ClipboardIcon = ({ type, size = 20 }: IProps) => {
    return type === 'check' ? (
        <CheckIcon height={size} width={size} />
    ) : (
        <CopyIcon height={size} width={size} />
    );
};

export default ClipboardIcon;
