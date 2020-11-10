/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Infokort.less';

export interface IInfokortProps {
    ikon?: React.ReactNode;
    header?: string;
    index: number;
    onClick?: (index: number) => void;
    children?: React.ReactNode | React.ReactNode[];
    className?: string;
}

export const Infokort: React.FunctionComponent<IInfokortProps> = ({
    ikon,
    header,
    index,
    onClick,
    children,
    className,
}) => {
    const onclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick?.(+event.currentTarget.id);
    };

    return (
        <div
            className={'infokort' + (index % 2 ? ' infokort__odd' : ' infokort__even') + className}
        >
            <div className="infokort__ikon">{ikon}</div>
            <div className="infokort__content" onClick={onclick} id={index.toString()}>
                <div className="infokort_header">{header}</div>
                {children}
            </div>
        </div>
    );
};
