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
}

export const FamilieIkonVelger: React.StatelessComponent<IProps> = ({
    className,
    alder,
    kjønn,
}) => {
    switch (kjønn) {
        case kjønnType.K:
            if (alder < 18) {
                return <JenteIkon className={className} heigth={32} width={32} />;
            } else {
                return <KvinneIkon className={className} heigth={32} width={32} />;
            }
        case kjønnType.M:
            if (alder < 18) {
                return <GuttIkon className={className} heigth={32} width={32} />;
            } else {
                return <MannIkon className={className} heigth={32} width={32} />;
            }
        default:
            return <NøytralPersonIkon className={className} heigth={32} width={32} />;
    }
};
