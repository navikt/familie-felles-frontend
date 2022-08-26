/* eslint-disable @typescript-eslint/no-empty-function */
import { Button } from '@navikt/ds-react';
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
    const [kontrollertVerdi, settKontrollertVerdi] = useState('Eksempelverdi');

    const knappTekst = lesevisning ? 'Fjern lesevisning' : 'Vis med lesevisning';

    const onClickToggleKnapp = () => {
        if (lesevisning) {
            settLesevisning(false);
        } else {
            settLesevisning(true);
        }
    };
    console.log({ kontrollertVerdi });

    return (
        <>
            <div className={'story-elements'}>
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
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
