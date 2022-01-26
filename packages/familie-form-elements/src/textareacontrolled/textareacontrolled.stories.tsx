/* eslint-disable @typescript-eslint/no-empty-function */
import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import '../../stories.less';
import { FamilieTextareaControlled } from './FamilieTextareaControlled';

export default {
    component: FamilieTextareaControlled,
    parameters: {
        componentSubtitle:
            'Et TextareaControlled som kun vises dersom man ikke er i lesevisningsmodus',
    },
    title: 'Komponenter/Form-elementer/FamilieTextareaControlled',
};

export const FamilieTextareaStory: React.FC = ({...args}) => {
    const [lesevisning, settLesevisning] = useState(true);
    const [knappTekst, settKnappTekst] = useState('Fjern lesevisning');

    const onClickToggleKnapp = () => {
        if (lesevisning) {
            settLesevisning(false);
            settKnappTekst('Vis med lesevisning');
        } else {
            settLesevisning(true);
            settKnappTekst('Fjern lesevisning');
        }
    };

    return (
        <>
            <div className={'story-elements'}>
                <Knapp onClick={onClickToggleKnapp}>{knappTekst}</Knapp>
            </div>
            <div className={'story-elements'}>
                <FamilieTextareaControlled
                    erLesevisning={lesevisning}
                    defaultValue={'Default value'}
                    {...args}
                />
            </div>
        </>
    );
};
