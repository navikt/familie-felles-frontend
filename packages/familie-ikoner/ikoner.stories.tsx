import React from 'react';
import { FamilieIkonVelger } from './src';
import { kjønnType } from '@navikt/familie-typer';

export default {
    component: FamilieIkonVelger,
    parameters: {
        docs: {
            subtitle: 'Fellesikoner for team familie. Kan inneholde litt logikk.',
        },
    },
    title: 'Komponenter/Ikoner',
};

export const FamilievelgerStory: React.FC = ({ ...args }) => {
    return (
        <>
            <FamilieIkonVelger alder={30} kjønn={kjønnType.UKJENT} {...args} />
            <FamilieIkonVelger alder={30} kjønn={kjønnType.KVINNE} />
            <FamilieIkonVelger alder={3} kjønn={kjønnType.KVINNE} />
            <FamilieIkonVelger alder={30} kjønn={kjønnType.MANN} />
            <FamilieIkonVelger alder={3} kjønn={kjønnType.MANN} />
        </>
    );
};

// @ts-expect-error storybook-spesifikk kode
FamilievelgerStory.args = {
    alder: 30,
};
// @ts-expect-error storybook-spesifikk kode
FamilievelgerStory.argTypes = {
    alder: {
        control: {
            type: 'number',
        },
    },
};
