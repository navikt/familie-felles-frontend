import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
export interface IProps {
    alder: number;
    className?: string;
    kjønn: kjønnType;
    width?: number;
    height?: number;
}
export declare const FamilieIkonVelger: React.FunctionComponent<IProps>;
