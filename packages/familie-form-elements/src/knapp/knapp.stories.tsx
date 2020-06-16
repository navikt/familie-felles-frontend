import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import { FamilieKnapp } from '..';
import '../../stories.less';

export default {
    component: FamilieKnapp,
    parameters: {
        componentSubtitle: 'Som en vanlig knapp, men med lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieKnapp',
};

export const FamilieKnappStory: React.FC = () => {
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
                <FamilieKnapp erLesevisning={lesevisning}>FamilieKnapp</FamilieKnapp>
            </div>
        </>
    );
};
