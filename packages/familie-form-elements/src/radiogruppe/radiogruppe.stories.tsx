import React, { useState } from 'react';
import { Button, Radio } from '@navikt/ds-react';
import '../../stories.less';
import { FamilieRadioGruppe } from './FamilieRadioGruppe';

export default {
    component: FamilieRadioGruppe,
    parameters: {
        componentSubtitle: 'En radiogruppe som kun vises dersom man ikke er i lesevisningsmodus.',
    },
    title: 'Komponenter/Form-elementer/FamilieRadioGruppe',
};

export const FamilieRadioGruppeStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [knappTekst, settKnappTekst] = useState('Vis med lesevisning');

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
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
            </div>
            <div className={'story-elements'}>
                <FamilieRadioGruppe
                    legend={'Eksempel på radiogruppe'}
                    erLesevisning={lesevisning}
                    {...args}
                >
                    <Radio children={'Radio1'} value={'Radio1'} name={'radio1'} />
                    <Radio children={'Radio2'} value={'Radio2'} name={'radio2'} />
                </FamilieRadioGruppe>
            </div>
        </>
    );
};
