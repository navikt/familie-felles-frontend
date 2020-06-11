import React from 'react';
import { FamilieCheckbox } from './src';

export default {
    component: FamilieCheckbox,
    parameters: {
        componentSubtitle: 'Visittkort brukes til å vise enkel informasjon om en bruker.',
    },
    title: 'Komponenter/Visittkort',
};

export const familieCheckbox = () => {
    return (
        <FamilieCheckbox
            label={"label"}
            checked={false}
            erLesevisning={true}
        />
    );
}; 