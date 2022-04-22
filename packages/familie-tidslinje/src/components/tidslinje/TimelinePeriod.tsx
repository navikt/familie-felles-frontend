import React, {
    CSSProperties,
    ReactNode,
    RefObject,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import classNames from 'classnames';
import { Tooltip } from './Tooltip';
import { PositionedPeriod } from '../types.internal';
import { ClassValue } from 'classnames/types';
import styled, { css } from 'styled-components';

const fellesPeriodeStyle = css`
    background: #e7e9e9;
    border-top: 1px solid #59514b;
    border-bottom: 1px solid #59514b;

    border-radius: 1.5rem;
    position: absolute;
    transition: box-shadow 0.1s ease;
    padding: 0;

    &.mini {
        min-width: 0;
        padding: 0;
        &:before {
            display: none;
        }
    }
    &.mini:before {
        display: none;
    }

    &.advarsel {
        background: #ffe9cc;
        border: 1px solid #ff9100;
    }

    &.feil {
        background: #f1d8d4;
        border: 1px solid #ba3a26;
    }

    &.inaktiv {
        background: #e7e9e9;
        border: 1px solid #78706a;
    }

    &.suksess {
        background: #cde7d8;
        border: 1px solid #117938;
    }

    &.sammenhengendeFraHøyre {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    &.sammenhengendeFraVenstre {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    &.sammenhengendeFraBegge {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    &.croppedHøyre {
        border-right: none;
    }

    &.croppedVenstre {
        border-left: none;
    }

    &.croppedBegge {
        border-left: none;
        border-right: none;
    }

    & div.infoPin {
        position: absolute;
        background: #0067c5;
        height: 6px;
        width: 2px;
        top: 0;
        left: 50%;
        transform: translate(-1px, -7px);

        &:before {
            content: '';
            position: absolute;
            top: 0;
            width: 10px;
            height: 10px;
            background: #0067c5;
            transform: translate(-5px, -100%);
            border-radius: 50%;
        }
    }
`;

const PeriodeInnhold = styled.div(
    (props: { kompakt?: boolean }) => `
    margin: ${props.kompakt ? 0 : 0.3}rem 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    text-align: left;
    position: relative;
    top: ${props.kompakt ? 0 : -2}px;
`,
);

const PeriodeKnapp = styled.button(
    (props: { kompakt?: boolean }) => `
    ${fellesPeriodeStyle}
    height: ${props.kompakt ? 1.5 : 2}rem;
    cursor: pointer;

    &.advarsel {
        &:hover,
        &.active,
        &:focus {
            background: #fed7a3;
        }
    }

    &.feil {
        &:hover,
        &.active,
        &:focus {
            background: #e3b0a8;
        }
    }

    &.inaktiv {
        &:hover,
        &.active,
        &:focus {
            background: #c3c3c3;
        }
    }

    &.suksess {
        &:hover,
        &.active,
        &:focus {
            background: #9bd0b0;
        }
    }
`,
);

const PeriodeDiv = styled.div(
    (props: { kompakt?: boolean }) => `
    ${fellesPeriodeStyle}
    height: ${props.kompakt ? 1.5 : 2}rem;

    div.infoPin {
        &:before {
            transform: translate(-4px, -100%);
        }
    }
`,
);

interface NonClickablePeriodProps {
    period: PositionedPeriod;
    divRef: RefObject<HTMLDivElement>;
    className?: string;
    kompakt?: boolean;
}

interface ClickablePeriodProps {
    period: PositionedPeriod;
    buttonRef: RefObject<HTMLButtonElement>;
    onSelectPeriod: (period: PositionedPeriod) => void;
    className?: string;
    kompakt?: boolean;
}

interface TimelinePeriodProps {
    period: PositionedPeriod;
    active?: boolean;
    onSelectPeriod?: (period: PositionedPeriod) => void;
    onHoverPeriod?: ReactNode;
    kompakt?: boolean;
}

const ariaLabel = (period: PositionedPeriod): string => {
    const start = period.start.format('DD.MM.YYYY');
    const end = period.endInclusive.format('DD.MM.YYYY');
    return `${period.status} fra ${start} til og med ${end}`;
};

const style = (period: PositionedPeriod): CSSProperties => ({
    [period.direction]: `${period.horizontalPosition}%`,
    width: `${period.width}%`,
});

const ClickablePeriod = React.memo(
    ({ buttonRef, period, className, onSelectPeriod, kompakt }: ClickablePeriodProps) => {
        const [showHoverLabel, setShowHoverLabel] = useState(false);

        const onClick = () => {
            if (!period.disabled) {
                onSelectPeriod?.(period);
            }
        };

        const enableHoverLabel = () => {
            period.hoverLabel && setShowHoverLabel(true);
        };

        const disableHoverLabel = () => {
            period.hoverLabel && setShowHoverLabel(false);
        };

        return (
            <PeriodeKnapp
                kompakt={kompakt}
                ref={buttonRef}
                className={className}
                onClick={onClick}
                onMouseEnter={enableHoverLabel}
                onMouseLeave={disableHoverLabel}
                aria-label={ariaLabel(period)}
                style={style(period)}
            >
                {period.hoverLabel && showHoverLabel && <Tooltip>{period.hoverLabel}</Tooltip>}
                {period.infoPin && <div className={'infoPin'} />}
                {period.children && (
                    <PeriodeInnhold kompakt={kompakt}>{period.children}</PeriodeInnhold>
                )}
            </PeriodeKnapp>
        );
    },
);

const NonClickablePeriod = ({ divRef, period, className, kompakt }: NonClickablePeriodProps) => (
    <PeriodeDiv
        kompakt={kompakt}
        ref={divRef}
        className={className}
        aria-label={ariaLabel(period)}
        style={style(period)}
    >
        {period.infoPin && <div className={'infoPin'} />}
        {period.children && <PeriodeInnhold kompakt={kompakt}>{period.children}</PeriodeInnhold>}
    </PeriodeDiv>
);

const finnClassnames = (
    period: PositionedPeriod,
    active: boolean | undefined,
    isMini: boolean,
): ClassValue[] => {
    const classNames = [];

    switch (period.cropped) {
        case 'both':
            classNames.push('croppedBegge');
            break;
        case 'left':
            if (period.direction === 'left') classNames.push('croppedVenstre');
            else classNames.push('croppedHøyre');
            break;
        case 'right':
            if (period.direction === 'left') classNames.push('croppedHøyre');
            else classNames.push('croppedVenstre');
            break;
        default:
            break;
    }

    switch (period.connectingEdge) {
        case 'both':
            classNames.push('sammenhengendeFraBegge');
            break;
        case 'left':
            if (period.direction === 'left') classNames.push('sammenhengendeFraVenstre');
            else classNames.push('sammenhengendeFraHøyre');
            break;
        case 'right':
            if (period.direction === 'left') classNames.push('sammenhengendeFraHøyre');
            else classNames.push('sammenhengendeFraVenstre');
            break;
        default:
            break;
    }

    if (active) classNames.push('active');
    if (isMini) classNames.push('mini');

    return classNames;
};

export const TimelinePeriod = React.memo(
    ({ period, onSelectPeriod, active, kompakt }: TimelinePeriodProps) => {
        const ref = useRef<HTMLButtonElement | HTMLDivElement>(null);
        const [isMini, setIsMini] = useState(false);

        const className = classNames(
            'periode',
            finnClassnames(period, active, isMini),
            period.status,
            period.className,
        );
        useLayoutEffect(() => {
            const currentWidth = ref.current?.offsetWidth;
            if (currentWidth && currentWidth < 30) {
                setIsMini(true);
            }
        }, [ref.current]);

        useEffect(() => {
            if (active) ref.current?.focus();
        }, [active]);

        return onSelectPeriod ? (
            <ClickablePeriod
                buttonRef={ref as RefObject<HTMLButtonElement>}
                period={period}
                onSelectPeriod={onSelectPeriod}
                className={className}
                kompakt={kompakt}
            />
        ) : (
            <NonClickablePeriod
                divRef={ref as RefObject<HTMLDivElement>}
                period={period}
                className={className}
                kompakt={kompakt}
            />
        );
    },
);
