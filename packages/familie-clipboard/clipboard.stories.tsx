import React from 'react';
import Clipboard from './src';

export default {
    component: Clipboard,
    parameters: {
        componentSubtitle: `Clipboard komponent som gjerne brukes for å presentere en tekst med tilhørende 'kopier' funksjonalitet. Teksten som skal kopieres må wrappes in en html tag.`,
    },
    title: 'Komponenter/Clipboard',
};

export const standard = ({...args}) => {
    return (
        <Clipboard {...args}>
            <div>12345678910</div>
        </Clipboard>
    );
};
