import * as React from 'react';
interface IPilVenstre {
    className?: string;
    heigth?: number;
    width?: number;
    onClick?: React.MouseEventHandler;
}
declare const PilVenstre: React.FunctionComponent<IPilVenstre>;
export default PilVenstre;
