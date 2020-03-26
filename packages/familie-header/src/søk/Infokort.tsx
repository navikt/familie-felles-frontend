import './Infokort.less';

import React from 'react';

export interface IInfokortProps {
    ikon?: React.ReactNode;
    header?: string;
    index: number;
    onClick?: (index: number) => void;
    children?: React.ReactNode | React.ReactNode[];
}

export const Infokort: React.FunctionComponent<IInfokortProps> = ({
    ikon, header, index, onClick, children
}) => {

    const onclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick?.(+event.currentTarget.id)
    }

    return (
        <div className={'infokort' + (index % 2 ? ' infokort__odd' : ' infokort__even')}>
            <div className='infokort__ikon'>{ikon}</div>
            <div className='infokort__content' onClick={onclick} id={index.toString()}>
                <div className='infokort_header'>{header}</div>
                {children}
            </div>
        </div>
    )
}