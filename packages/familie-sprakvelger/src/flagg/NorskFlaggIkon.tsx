import * as React from 'react';
import { useSprakContext } from './../SprakContext';
import { ariaLabelForNorskFlagg } from './utils';

export const NorskFlaggIkon = () => {
    const [sprak] = useSprakContext();

    return (
        <svg width={25} height={18} aria-label={ariaLabelForNorskFlagg(sprak.locale)} role="img">
            <g fill="none" fillRule="evenodd">
                <path fill="#EF2B2D" d="M0 0h25v18H0z" />
                <path fill="#FFF" d="M6.875 0h4.688v18H6.875z" />
                <path fill="#FFF" d="M0 6.9h25v4.5H0z" />
                <path fill="#002868" d="M8.125 0h2.188v18H8.125z" />
                <path fill="#002868" d="M0 7.8h25v2.4H0z" />
            </g>
        </svg>
    );
};
