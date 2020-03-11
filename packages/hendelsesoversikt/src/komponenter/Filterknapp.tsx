import '../Filterknapp.less';

import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface IFilterknappProps {
    children: ReactNode;
    onClick: () => void;
    aktiv?: boolean;
}

const Filterknapp = ({ children, onClick, aktiv }: IFilterknappProps) => {
    return (
        <button onClick={onClick} className={classNames('knapp', aktiv && 'aktivKnapp')}>
            {children}
        </button>
    );
};

export default Filterknapp;
