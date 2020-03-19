import React, { ReactNode } from 'react';

export interface IkonProps {
    color?: string;
    width?: number;
    height?: number;
    viewBox?: number;
    children?: ReactNode | ReactNode[];
}

const Ikon = ({ children, width = 16, height = 16, viewBox = 24 }: IkonProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${viewBox} ${viewBox}`}>
            {children}
        </svg>
    );
};

export default Ikon;
