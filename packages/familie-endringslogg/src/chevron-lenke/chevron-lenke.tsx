import * as React from 'react';
import classNames from 'classnames';
import './chevron-lenke.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@navikt/aksel-icons';

export enum Direction {
    RIGHT,
    LEFT,
}

interface ChevronLenkeProps {
    retning: Direction;
    tekst: string;
    hide?: boolean;
    dataTestId: string;

    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const ChevronLenke = (props: ChevronLenkeProps) => {
    const { retning, tekst, onClick, hide, dataTestId } = props;
    const clsPar = ['chevron-lenke', { 'chevron-lenke--hide': hide }];
    return (
        <button className={classNames(clsPar)} onClick={onClick} data-testid={dataTestId}>
            {retning === Direction.RIGHT ? (
                <>
                    <span className={'chevron-lenke__tekst'} role="button">
                        {tekst}
                    </span>
                    <ArrowRightIcon
                        fr="mask"
                        className={'chevron-right'}
                        onResize={undefined}
                        onResizeCapture={undefined}
                    />
                </>
            ) : (
                <>
                    <ArrowLeftIcon
                        fr="mask"
                        className={'chevron-left'}
                        onResize={undefined}
                        onResizeCapture={undefined}
                    />
                    <span className={'chevron-lenke__tekst'} role="button">
                        {tekst}
                    </span>
                </>
            )}
        </button>
    );
};

export default ChevronLenke;
