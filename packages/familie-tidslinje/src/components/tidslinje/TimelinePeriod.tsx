import classNames from 'classnames';
import React, { type CSSProperties, type ReactNode, type RefObject, useLayoutEffect, useRef, useState } from 'react';
import type { PositionedPeriod } from '../types.internal';
import Styles from './TimelinePeriod.module.less';
import { Tooltip } from './Tooltip';

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

// eslint-disable-next-line react/display-name
const ClickablePeriod = React.memo(
    ({ buttonRef, period, className, onSelectPeriod, kompakt }: ClickablePeriodProps) => {
        const [showHoverLabel, setShowHoverLabel] = useState(false);

        const onClick = () => {
            if (!period.disabled) {
                onSelectPeriod?.(period);
            }
        };

        const enableHoverLabel = () => {
            // tslint:disable-next-line:no-unused-expression
            period.hoverLabel && setShowHoverLabel(true);
        };

        const disableHoverLabel = () => {
            // tslint:disable-next-line:no-unused-expression
            period.hoverLabel && setShowHoverLabel(false);
        };

        return (
            <button
                ref={buttonRef}
                className={classNames(className, Styles.periodeKnapp)}
                onClick={onClick}
                onMouseEnter={enableHoverLabel}
                onMouseLeave={disableHoverLabel}
                aria-label={ariaLabel(period)}
                type={'button'}
                style={style(period)}
            >
                {period.hoverLabel && showHoverLabel && <Tooltip>{period.hoverLabel}</Tooltip>}
                {period.infoPin && <div className={classNames('infoPin', Styles.infoPin, Styles.paaPeriode)} />}
                {period.children && (
                    <div className={classNames(Styles.innhold, { [Styles.innholdKompakt]: kompakt })}>
                        {period.children}
                    </div>
                )}
            </button>
        );
    },
);

const NonClickablePeriod = ({ divRef, period, className, kompakt }: NonClickablePeriodProps) => (
    <section ref={divRef} className={className} aria-label={ariaLabel(period)} style={style(period)}>
        {period.infoPin && <div className={classNames('infoPin', Styles.infoPin)} />}
        {period.children && (
            <div className={classNames(Styles.innhold, { [Styles.innholdKompakt]: kompakt })}>{period.children}</div>
        )}
    </section>
);

const finnClassnames = (period: PositionedPeriod, active: boolean | undefined, isMini: boolean): string[] => {
    const newClassNames: string[] = [];

    switch (period.cropped) {
        case 'both':
            newClassNames.push('croppedBegge');
            break;
        case 'left':
            if (period.direction === 'left') {
                newClassNames.push('croppedVenstre');
            } else {
                newClassNames.push('croppedHøyre');
            }
            break;
        case 'right':
            if (period.direction === 'left') {
                newClassNames.push('croppedHøyre');
            } else {
                newClassNames.push('croppedVenstre');
            }
            break;
        default:
            break;
    }

    switch (period.connectingEdge) {
        case 'both':
            newClassNames.push('sammenhengendeFraBegge');
            break;
        case 'left':
            if (period.direction === 'left') {
                newClassNames.push('sammenhengendeFraVenstre');
            } else {
                newClassNames.push('sammenhengendeFraHøyre');
            }
            break;
        case 'right':
            if (period.direction === 'left') {
                newClassNames.push('sammenhengendeFraHøyre');
            } else {
                newClassNames.push('sammenhengendeFraVenstre');
            }
            break;
        default:
            break;
    }

    if (active) {
        newClassNames.push('active');
    }
    if (isMini) {
        newClassNames.push('mini');
    }

    return newClassNames;
};

// eslint-disable-next-line react/display-name
export const TimelinePeriod = React.memo(({ period, onSelectPeriod, active, kompakt }: TimelinePeriodProps) => {
    const ref = useRef<HTMLButtonElement | HTMLDivElement>(null);
    const [isMini, setIsMini] = useState(false);

    const className = classNames(
        'periode',
        finnClassnames(period, active, isMini),
        period.status,
        period.className,
        Styles.periode,
        {
            [Styles.mini]: isMini,
            [Styles.periodeKompakt]: kompakt,
            [Styles.advarsel]: period.status === 'advarsel',
            [Styles.feil]: period.status === 'feil',
            [Styles.inaktiv]: period.status === 'inaktiv',
            [Styles.suksess]: period.status === 'suksess',
            [Styles.croppedVenstre]:
                period.cropped === 'both' ||
                (period.cropped === 'left' && period.direction === 'left') ||
                (period.cropped === 'right' && period.direction !== 'left'),
            [Styles.croppedHøyre]:
                period.cropped === 'both' ||
                (period.cropped === 'right' && period.direction === 'left') ||
                (period.cropped === 'left' && period.direction !== 'left'),
            [Styles.sammenhengendeFraVenstre]:
                period.connectingEdge === 'both' ||
                (period.connectingEdge === 'left' && period.direction === 'left') ||
                (period.connectingEdge === 'right' && period.direction !== 'left'),
            [Styles.sammenhengendeFraHøyre]:
                period.connectingEdge === 'both' ||
                (period.connectingEdge === 'right' && period.direction === 'left') ||
                (period.connectingEdge === 'left' && period.direction !== 'left'),
        },
    );
    // biome-ignore lint/correctness/useExhaustiveDependencies: skal kjøre på nytt når ref.current settes for å måle bredden på elementet
    useLayoutEffect(() => {
        const currentWidth = ref.current?.offsetWidth;
        if (currentWidth && currentWidth < 30) {
            setIsMini(true);
        }
    }, [ref.current]);

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
            className={classNames(className, Styles.ikkeKlikkbar)}
            kompakt={kompakt}
        />
    );
});
