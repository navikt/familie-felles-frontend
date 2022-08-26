import { Button } from '@navikt/ds-react';
import React, { useState } from 'react';
import '../../stories.less';
import { FamilieInput } from './FamilieInput';

export default {
    component: FamilieInput,
    parameters: {
        componentSubtitle: 'Et inputfelt med støtte for lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieInput',
};

export const FamilieInputStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [inputVerdi, settInputVerdi] = useState('Den satte verdien');

    const onClickToggleKnapp = () => {
        if (lesevisning) {
            settLesevisning(false);
        } else {
            settLesevisning(true);
        }
    };

    const knappTekst = lesevisning ? 'Fjern lesevisning' : 'Vis med lesevisning';

    return (
        <>
            <div className={'story-elements'}>
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
            </div>
            <div className={'story-elements'}>
                <FamilieInput
                    label="Eksempel på inputfelt"
                    erLesevisning={lesevisning}
                    onChange={e => settInputVerdi(e.target.value)}
                    value={inputVerdi}
                    {...args}
                />
            </div>
        </>
    );
};
