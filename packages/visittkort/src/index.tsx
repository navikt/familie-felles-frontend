import * as React from 'react';
import './index.less';

export interface IVisittkortProps {
    navn: string;
    ident: string;
}

const Visittkort: React.SFC<IVisittkortProps> = ({ navn, ident }) => {
    return <div className={'visittkort'}>{`${navn}: ${ident}`}</div>;
};

export default Visittkort;
