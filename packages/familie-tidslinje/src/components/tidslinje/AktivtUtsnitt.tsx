import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import { EnkelPeriode } from '../types.external';
import { usePositionAndSize } from './usePositionAndSize';
import { ABlue50, ABlue500 } from '@navikt/ds-tokens/dist/tokens';

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
        content: '';
        position: absolute;
        top: -2px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${ABlue500};
        box-shadow: 0 0 0 1px ${ABlue500};
        left: -1px;
    }

    &:after {
        content: '';
        position: absolute;
        top: -2px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${ABlue500};
        box-shadow: 0 0 0 1px ${ABlue500};
        right: -1px;
    }
`;

const AktivPeriodeBorder = styled(AktivPeriode)`
    box-shadow:
        inset 2px 0 0 -1px ${ABlue500},
        inset -2px 0 0 -1px ${ABlue500};
`;

const AktivPeriodeBakgrunn = styled(AktivPeriode)`
    background: ${ABlue50};
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
