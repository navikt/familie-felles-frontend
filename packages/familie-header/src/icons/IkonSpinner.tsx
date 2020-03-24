import React from 'react';
import Ikon, { IkonProps } from './Ikon';
import './IkonSpinner.less';

const IkonSpinner = ({width = 16, height = 16 }: IkonProps) => {
    return (
        <Ikon width={width} height={height} className= 'spinner'>
            <circle cx="12" cy="12" r="10"></circle>
        </Ikon>
    );
};

export default IkonSpinner;