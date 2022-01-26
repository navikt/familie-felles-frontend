import { Knapp } from 'nav-frontend-knapper';
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

export const FamilieSelectStory: React.FC = ({...args}) => {
    const [lesevisning, settLesevisning] = useState(true);
    const [knappTekst, settKnappTekst] = useState('Fjern lesevisning');
    const [valgtOption, settValgtOption] = useState('');

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
                <FamilieSelect
                    erLesevisning={lesevisning}
                    lesevisningVerdi={valgtOption}
                    bredde={'l'}
                    onChange={e => settValgtOption(e.target.value)}
                    value={valgtOption}
                    {...args}
                >
                    <option>Valg1</option>
                    <option>Valg2</option>
                </FamilieSelect>
            </div>
        </>
    );
};
