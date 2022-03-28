import React from 'react';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { EnkelPeriode } from '../types.external';
import { usePositionAndSize } from './usePositionAndSize';

const AktivtUtsnittContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    pointer-events: none;
`;

const AktivPeriode = styled.div`
    position: absolute;
    height: 100%;
    border: none;
    background: none;
    padding: 0;

    &::-moz-focus-inner {
        border: 0;
    }

    &:hover,
    &:focus {
        outline: none;
    }

    &:before {
        .dot(3px);
        left: -1px;
    }

    &:after {
        .dot(3px);
        right: -1px;
    }
`;

const AktivPeriodeBorder = styled(AktivPeriode)`
    box-shadow: inset 2px 0 0 -1px ${navFarger.navBla}, inset -2px 0 0 -1px ${navFarger.navBla};
`;

const AktivPeriodeBakgrunn = styled(AktivPeriode)`
    background: #e5f3ff;
`;

interface IntervallProps {
    tidslinjestart: Dayjs;
    tidslinjeslutt: Dayjs;
    aktivtUtsnitt: EnkelPeriode;
    direction: 'left' | 'right';
}

export const AktivtUtsnittBorder = ({
    aktivtUtsnitt,
    tidslinjestart,
    tidslinjeslutt,
    direction,
}: IntervallProps) => {
    const style = usePositionAndSize({
        periode: aktivtUtsnitt,
        tidslinjestart,
        tidslinjeslutt,
        direction,
    });
    return (
        <AktivtUtsnittContainer className={'aktivtUtsnittContainer'}>
            <AktivPeriodeBorder className={classNames('aktivPeriodeBorder')} style={style} />
        </AktivtUtsnittContainer>
    );
};

export const AktivtUtsnittBakgrunn = ({
    aktivtUtsnitt,
    tidslinjestart,
    tidslinjeslutt,
    direction,
}: IntervallProps) => {
    const style = usePositionAndSize({
        periode: aktivtUtsnitt,
        tidslinjestart,
        tidslinjeslutt,
        direction,
    });
    return (
        <AktivtUtsnittContainer className={'aktivtUtsnittContainer'}>
            <AktivPeriodeBakgrunn className={classNames('aktivPeriodeBakgrunn')} style={style} />
        </AktivtUtsnittContainer>
    );
};
