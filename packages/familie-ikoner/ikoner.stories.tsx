import React from 'react';
import { FamilieIkonVelger } from './src';
import { kjønnType } from '@navikt/familie-typer';

export default {
    component: FamilieIkonVelger,
    parameters: {
        componentSubtitle: 'Fellesikoner for team familie. Kan inneholde litt logikk.',
    },
    title: 'Komponenter/Ikoner',
};

export const familievelger = () => {
    return (
        <>
            <FamilieIkonVelger alder={30} kjønn={kjønnType.KVINNE} />
            <FamilieIkonVelger alder={3} kjønn={kjønnType.KVINNE} />
            <FamilieIkonVelger alder={30} kjønn={kjønnType.MANN} />
            <FamilieIkonVelger alder={3} kjønn={kjønnType.MANN} />
        </>
    );
};
