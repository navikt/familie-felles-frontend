import Element from 'nav-frontend-typografi';
import * as React from 'react';
import FamilieIkonVelger from './ikoner/Familie/FamilieIkonVelger';
import { kjønnType } from './typer';

import './index.less';

export interface IVisittkortProps {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string;
}

const Visittkort: React.SFC<IVisittkortProps> = ({ alder, ident, kjønn, navn }) => {
    return (
        <div className={'visittkort'}>
            <FamilieIkonVelger alder={alder} kjønn={kjønn} />
            <Element type={'element'}>{navn}</Element>
            {ident}
        </div>
    );
};

export default Visittkort;
