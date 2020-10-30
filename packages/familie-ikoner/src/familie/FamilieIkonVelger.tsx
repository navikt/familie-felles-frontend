import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
import { GuttIkon } from './GuttIkon';
import { JenteIkon } from './JenteIkon';
import { KvinneIkon } from './KvinneIkon';
import { MannIkon } from './MannIkon';
import { NøytralPersonIkon } from './NøytralPersonIkon';

export interface IProps {
    alder: number;
    className?: string;
    kjønn: kjønnType;
    width?: number;
    height?: number;
}

export const FamilieIkonVelger: React.FunctionComponent<IProps> = ({
    className,
    alder,
    kjønn,
    width = 32,
    height = 32,
}) => {
    switch (kjønn) {
        case kjønnType.KVINNE:
            if (alder < 18) {
                return <JenteIkon className={className} heigth={height} width={width} />;
            } else {
                return <KvinneIkon className={className} heigth={height} width={width} />;
            }
        case kjønnType.MANN:
            if (alder < 18) {
                return <GuttIkon className={className} heigth={height} width={width} />;
            } else {
                return <MannIkon className={className} heigth={height} width={width} />;
            }
        default:
            return <NøytralPersonIkon className={className} heigth={height} width={width} />;
    }
};
