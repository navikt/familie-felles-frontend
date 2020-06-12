
import React from 'react';
import { FamilieCheckbox } from './src';

export default {
    component: FamilieCheckbox,
    parameters: {
        componentSubtitle: 'Som en vanlig checkbox, men med lesevisning.',
    },
    title: 'Komponenter/FamilieCheckbox',
};

export const familieCheckbox = () => {    
    return (
        <FamilieCheckbox
            label={"label"}
            checked={false}
            erLesevisning={true}
        />);
};  