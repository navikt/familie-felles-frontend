/* eslint-disable @typescript-eslint/no-empty-function */
import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import '../../stories.less';
import { FamilieTextarea } from './FamilieTextarea';

export default {
    component: FamilieTextarea,
    parameters: {
        componentSubtitle: 'Textarea som kun vises dersom man ikke er i lesevisningsmodus',
    },
    title: 'Komponenter/Form-elementer/FamilieTextarea',
};

export const FamilieTextareaStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [knappTekst, settKnappTekst] = useState('Vis med lesevisning');
    const [kontrollertVerdi, settKontrollertVerdi] = useState('Eksempelverdi');

    const onClickToggleKnapp = () => {
        if (lesevisning) {
            settLesevisning(false);
            settKnappTekst('Vis med lesevisning');
        } else {
            settLesevisning(true);
            settKnappTekst('Fjern lesevisning');
        }
    };
    console.log({ kontrollertVerdi });

    return (
        <>
            <div className={'story-elements'}>
                <Knapp onClick={onClickToggleKnapp}>{knappTekst}</Knapp>
            </div>
            <div className={'story-elements'}>
                <FamilieTextarea
                    label={'Eksempel med kontrollert verdi'}
                    erLesevisning={lesevisning}
                    value={kontrollertVerdi}
                    onChange={event => settKontrollertVerdi(event.target.value)}
                    {...args}
                />
            </div>
            <div className={'story-elements'}>
                <FamilieTextarea
                    label={'Eksempel uten kontrollert verdi'}
                    erLesevisning={lesevisning}
                    onBlur={event => {
                        console.log(event.target.value);
                    }}
                    {...args}
                />
            </div>
        </>
    );
};
