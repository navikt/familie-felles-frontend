import React, { useState } from 'react';
import { Pin } from '../types.external';
import dayjs, { Dayjs } from 'dayjs';
import { position } from './calc';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';

const StyledTooltip = styled(Tooltip)`
    font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
    font-size: 14px;
    top: -10px;
`;

const PinView = ({ render }: Partial<Pin>) => {
    const [showRender, setShowRender] = useState(false);
    return (
        <PinStyle
            className={'pin'}
            onMouseOver={() => setShowRender(true)}
            onMouseLeave={() => setShowRender(false)}
        >
            {showRender && render && <StyledTooltip className={'tooltip'}>{render}</StyledTooltip>}
        </PinStyle>
    );
};

const PinsStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const PinStyle = styled.div`
    position: absolute;
    height: calc(100% + 10px);
    top: -22px;
    width: 1px;
    background: #000000;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        background: #ffffff;
        border: 6px solid #ba3a26;
        border-radius: 50%;
        transform: translate(-8.5px, -9.5px);
    }
`;

const PinContainer = styled.span`
    position: absolute;
    height: 100%;
`;

interface PinsProps {
    pins: Pin[];
    start: Dayjs;
    slutt: Dayjs;
    direction: 'left' | 'right';
}

export const Pins = ({ pins, start, slutt, direction }: PinsProps) => (
    <PinsStyle className={'pins'}>
        {pins.map(({ date, render }, i) => (
            <PinContainer
                key={i}
                className={'container'}
                style={{ [direction]: `${position(dayjs(date), start, slutt)}%` }}
            >
                <PinView render={render} />
            </PinContainer>
        ))}
    </PinsStyle>
);
