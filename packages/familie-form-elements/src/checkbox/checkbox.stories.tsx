import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import { FamilieCheckbox } from '..';
import '../../stories.less';

export default {
    component: FamilieCheckbox,
    parameters: {
        componentSubtitle: 'Som en vanlig checkbox, men med lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieCheckbox',
};

export const FamilieCheckboxStory = () => {
    const [lesevisning, settLesevisning] = useState(true);
    const [knappTekst, settKnappTekst] = useState('Fjern lesevisning');
    const [checked, settChecked] = useState(false);

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
                <FamilieCheckbox
                    label={'FamilieCheckbox'}
                    checked={checked}
                    erLesevisning={lesevisning}
                    onChange={() => settChecked(prevState => !prevState)}
                />
            </div>
        </>
    );
};
