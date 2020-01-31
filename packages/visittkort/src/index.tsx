import * as React from 'react';
import './index.less';

export type VisittkortProps = {
    navn: String;
    ident: String;
};

const Visittkort: React.SFC<VisittkortProps> = ({ navn, ident }) => {
    return <div className={'visittkort'}>{`${navn}: ${ident}`}</div>;
};

export default Visittkort;
