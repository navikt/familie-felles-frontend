import React from 'react';
import {Ikon, IkonProps } from './Ikon';
import './IkonSpinner.less';

export const IkonSpinner = ({width = 12, height = 12 }: IkonProps) => {
    return (
        <Ikon width={width} height={height} className= 'spinner'>
            <circle cx="12" cy="12" r="10"></circle>
        </Ikon>
    );
};
