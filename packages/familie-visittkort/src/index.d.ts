import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
import './index.less';
export interface IVisittkortProps {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string;
}
declare const Visittkort: React.SFC<IVisittkortProps>;
export default Visittkort;
