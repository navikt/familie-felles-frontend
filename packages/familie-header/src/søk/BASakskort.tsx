import React from 'react';

import {
    GuttIkon, JenteIkon, KvinneIkon, MannIkon, NøytralPersonIkon
} from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';

import Infokort from './Infokort';

export enum BASakPersonRolle {
    Forelder = "FORELDER",
    Barn = "BARN",
}

export interface IBASakskortProps {
    navn: string;
    fnr: string;
    rolle: BASakPersonRolle;
    kjønn: kjønnType,
    index: number;
    onClick?: (index: number) => void;
    children?: React.ReactNode | React.ReactNode[];
}

const BASakskort: React.FunctionComponent<IBASakskortProps> = ({
    navn, fnr, rolle, kjønn, index, onClick, children
}) => {
    type IkonerMap = Record<string, React.ReactNode>;

    const ikoner: IkonerMap = {
        "FORELDER_MANN": <MannIkon className='ikon'></MannIkon>,
        "FORELDER_KVINNE": <KvinneIkon className='ikon'></KvinneIkon>,
        "FORELDER_UKJENT": <NøytralPersonIkon className='ikon'></NøytralPersonIkon>,
        "BARN_KVINNE": <JenteIkon className='ikon'></JenteIkon>,
        "BARN_MANN": <GuttIkon className='ikon'></GuttIkon>,
        "BARN_UKJENT": <NøytralPersonIkon className='ikon'></NøytralPersonIkon>
    };

    type RolleNavnMap = Record<string, string>;

    const rolleNavn: RolleNavnMap = {
        "FORELDER_MANN": "FAR",
        "FORELDER_KVINNE": "MOR",
        "FORELDER_UKJENT": "FORELDER",
        "BARN_KVINNE": "JENTE",
        "BARN_MANN": "GUTT",
        "BARN_UKJENT": "BARN"
    }

    return (
        <Infokort
            ikon={ikoner[rolle + '_' + kjønn]}
            header={navn + '(' + fnr + ')' + ' : ' + rolleNavn[rolle + '_' + kjønn]}
            index={index}
            onClick={onClick}
        >
            {children}
        </Infokort>
    )
}

export default BASakskort;