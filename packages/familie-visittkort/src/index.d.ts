import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
import './index.less';
export interface IProps {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string;
}
declare const Visittkort: React.StatelessComponent<IProps>;
export default Visittkort;
