import { Knapp } from 'nav-frontend-knapper';
import { Radio } from 'nav-frontend-skjema';
import React, { useState } from 'react';
import '../../stories.less';
import { FamilieRadioGruppe } from './FamilieRadioGruppe';

export default {
    component: FamilieRadioGruppe,
    parameters: {
        componentSubtitle: 'En radiogruppe som kun vises dersom man ikke er i lesevisningsmodus.',
    },
    title: 'Komponenter/Form-elementer/FamilieRadioGruppe',
};

export const FamilieRadioGruppeStory: React.FC = () => {
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
                <FamilieRadioGruppe erLesevisning={lesevisning}>
                    <Radio label={'Radio1'} name={'radio1'} />
                    <Radio label={'Radio2'} name={'radio2'} />
                </FamilieRadioGruppe>
            </div>
        </>
    );
};
