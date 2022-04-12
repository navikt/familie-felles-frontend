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
import styled from 'styled-components';

const PeriodeInnhold = styled.div(
    (props: { kompakt?: boolean }) => `
    margin: ${props.kompakt ? 0 : 0.3}rem 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    text-align: left;
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
            <button
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
            </button>
        );
    },
);

const NonClickablePeriod = ({ divRef, period, className, kompakt }: NonClickablePeriodProps) => (
    <div ref={divRef} className={className} aria-label={ariaLabel(period)} style={style(period)}>
        {period.infoPin && <div className={'infoPin'} />}
        {period.children && <PeriodeInnhold kompakt={kompakt}>{period.children}</PeriodeInnhold>}
    </div>
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
