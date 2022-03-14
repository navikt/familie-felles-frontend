import React, { useState } from 'react';

import { ToggleKnapp } from 'nav-frontend-toggle';

import '../../stories.less';
import { FamilieLandvelger } from './';

export default {
    component: FamilieLandvelger,
    parameters: {
        componentSubtitle: 'En landvelger med støtte for lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieLandvelger',
};

export const LandvelgerStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [medFeil, settMedFeil] = useState(false);
    const [medMultiSelect, settMedMultiSelect] = useState(false);
    const [medFlagg, settMedFlagg] = useState(false);
    const [medWave, settMedWave] = useState(false);
    const [sirkulær, settSirkulær] = useState(false);
    const [medEøs, settMedEøs] = useState(false);
    const [stor, settStor] = useState(false);

    return (
        <>
            <div className={'story-elements'}>
                <ToggleKnapp pressed={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </ToggleKnapp>
                <ToggleKnapp pressed={medFeil} onClick={() => settMedFeil(!medFeil)}>
                    Feil
                </ToggleKnapp>
                <ToggleKnapp
                    pressed={medMultiSelect}
                    onClick={() => settMedMultiSelect(!medMultiSelect)}
                >
                    Multiselect
                </ToggleKnapp>
                <ToggleKnapp pressed={medFlagg} onClick={() => settMedFlagg(!medFlagg)}>
                    Med flagg
                </ToggleKnapp>
                <ToggleKnapp pressed={sirkulær} onClick={() => settSirkulær(!sirkulær)}>
                    Sirkulær
                </ToggleKnapp>
                <ToggleKnapp pressed={medWave} onClick={() => settMedWave(!medWave)}>
                    Med wave
                </ToggleKnapp>
                <ToggleKnapp pressed={medEøs} onClick={() => settMedEøs(!medEøs)}>
                    ÆØS-land
                </ToggleKnapp>
                <ToggleKnapp pressed={stor} onClick={() => settStor(!stor)}>
                    Stor
                </ToggleKnapp>
            </div>
            <div className={'story-elements'}>
                <FamilieLandvelger
                    label={'Landvelger'}
                    onChange={() => {}}
                    erLesevisning={lesevisning}
                    isMulti={medMultiSelect}
                    medFlagg={medFlagg}
                    sirkulær={sirkulær}
                    medWave={medWave}
                    eøs={medEøs}
                    size={stor ? 'medium' : 'small'}
                    feil={medFeil ? 'Denne har feil' : undefined}
                    {...args}
                />
            </div>
        </>
    );
};
