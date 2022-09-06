import { BodyShort, Button } from '@navikt/ds-react';
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

export const FamilieCheckboxStory = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(true);
    const [checked, settChecked] = useState(false);

    const knappTekst = lesevisning ? 'Fjern lesevisning' : 'Vis med lesevisning';

    const onClickToggleKnapp = () => {
        if (lesevisning) {
            settLesevisning(false);
        } else {
            settLesevisning(true);
        }
    };

    return (
        <>
            <BodyShort>
                OBS: prøv å unngå å bruke denne. Bruken av kontrollert <em>checked</em>-verdi er
                deprecated. Bruk enten FamilieCheckboxGroup eller designsystemkomponenten Checkbox
                direkte.
            </BodyShort>
            <div className={'story-elements'}>
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
            </div>
            <div className={'story-elements'}>
                <FamilieCheckbox
                    checked={checked}
                    erLesevisning={lesevisning}
                    onChange={() => settChecked(prevState => !prevState)}
                    {...args}
                >
                    FamilieCheckbox
                </FamilieCheckbox>
            </div>
        </>
    );
};
