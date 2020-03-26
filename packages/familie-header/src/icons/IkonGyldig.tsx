import React from 'react';
import {Ikon, IkonProps } from './Ikon';

const navLysGra= '#E9E7E7';

export const IkonGyldig = ({ color = navLysGra, width = 16, height = 16 }: IkonProps) => {
    return (
        <Ikon width={width} height={height}>
            <path
                fill={color}
                d="M23.854,5.396l-3.5-3.5c-0.195-0.195-0.512-0.195-0.707,0L7.5,14.043l-3.146-3.146c-0.195-0.195-0.512-0.195-0.707,0
                l-3.5,3.5c-0.195,0.195-0.195,0.512,0,0.707l7,7C7.244,22.201,7.372,22.25,7.5,22.25s0.256-0.049,0.354-0.146l16-16
                C24.049,5.908,24.049,5.592,23.854,5.396z"
            />
        </Ikon>
    );
};