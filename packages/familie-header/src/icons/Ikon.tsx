import React, { ReactNode } from 'react';

export interface IkonProps {
    color?: string;
    width?: number;
    height?: number;
    viewBox?: number;
    className?: string;
    children?: ReactNode | ReactNode[];
}

export const Ikon = ({
    children,
    width = 16,
    height = 16,
    viewBox = 24,
    className = '',
}: IkonProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${viewBox} ${viewBox}`}
            className={className}
        >
            {children}
        </svg>
    );
};
