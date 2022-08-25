import { Button } from '@navikt/ds-react';
import React, { useState } from 'react';
import '../../stories.less';
import { FamilieSelect } from './FamilieSelect';

export default {
    component: FamilieSelect,
    parameters: {
        componentSubtitle: 'En Select som kun vises dersom man ikke er i lesevisningsmodus',
    },
    title: 'Komponenter/Form-elementer/FamilieSelect',
};

export const FamilieSelectStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [valgtOption, settValgtOption] = useState('');

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
            <div className={'story-elements'}>
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
            </div>
            <div className={'story-elements'}>
                <FamilieSelect
                    label="Eksempel"
                    erLesevisning={lesevisning}
                    lesevisningVerdi={valgtOption}
                    onChange={e => settValgtOption(e.target.value)}
                    value={valgtOption}
                    {...args}
                >
                    <option value="">Velg</option>
                    <option>Valg1</option>
                    <option>Valg2</option>
                </FamilieSelect>
            </div>
        </>
    );
};
