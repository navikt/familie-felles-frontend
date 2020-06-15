/* eslint-disable @typescript-eslint/no-empty-function */
import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import { FamilieDatovelger } from '..';
import '../../stories.less';

export default {
    component: FamilieDatovelger,
    parameters: {
        componentSubtitle: 'En datovelger med støtte for lesevisning.',
    },
    title: 'Komponenter/FamilieDatovelger',
};

export const FamilieDatovelgerStory = () => {
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
                <FamilieDatovelger
                    id={'dato'}
                    label={'Datovelger'}
                    onChange={() => {}}
                    erLesesvisning={lesevisning}
                />
            </div>
        </>
    );
};
