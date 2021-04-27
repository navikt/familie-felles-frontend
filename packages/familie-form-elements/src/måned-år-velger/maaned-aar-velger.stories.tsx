import { Knapp } from 'nav-frontend-knapper';
import React, { useState } from 'react';
import '../../stories.less';
import { MånedÅrVelger } from './MånedÅrVelger';

export default {
    component: MånedÅrVelger,
    parameters: {
        componentSubtitle: 'En måned-år-velger som kun vises dersom man ikke er i lesevisningsmodus',
    },
    title: 'Komponenter/Form-elementer/MånedÅrVelger',
};

export const MånedårVelgerStory: React.FC = () => {
    const [lesevisning, settLesevisning] = useState(true);
    const [knappTekst, settKnappTekst] = useState('Fjern lesevisning');

    const [disabled, settDisabled] = useState(false);
    const [årMånedVerdi, settÅrMånedVerdi] = useState<string | undefined>('2021-02');

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
                <div>Formatet på initiell verdi og verdi som endres er 'mm-yyyy'</div>
                <Knapp onClick={onClickToggleKnapp}>{knappTekst}</Knapp>
                <Knapp onClick={() => settDisabled(!disabled)}>Toggle disabled</Knapp>
            </div>
            <div className={'story-elements'}>
                <MånedÅrVelger
                    erLesevisning={lesevisning}
                    onEndret={e => settÅrMånedVerdi(e)}
                    årMånedInitiell={årMånedVerdi}
                    antallÅrFrem={5}
                    antallÅrTilbake={5}
                    id={'årMånedVelger-1'}
                    feilmelding={'Ugyldig verdi'}
                    label={'Velg år og måned'}
                    disabled={disabled} />
            </div>
        </>
    );
};
