import React, { useState } from 'react';
import { FamilieKnapp } from '..';
import '../../stories.less';
import { Switch } from '@navikt/ds-react';
//import '@navikt/ds-css';

export default {
    component: FamilieKnapp,
    parameters: {
        componentSubtitle: 'Som en vanlig knapp, men med lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieKnapp',
};

export const FamilieKnappStory: React.FC = ({ ...args }) => {
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
                <Switch checked={lesevisning} onClick={onClickToggleKnapp}>
                    {knappTekst}
                </Switch>
            </div>
            <div className={'story-elements'}>
                <FamilieKnapp erLesevisning={lesevisning} {...args}>
                    FamilieKnapp
                </FamilieKnapp>
            </div>
        </>
    );
};
