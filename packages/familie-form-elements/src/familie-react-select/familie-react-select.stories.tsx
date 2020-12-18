import React, { useState } from 'react';
import '../../stories.less';
import { FamilieReactSelect, ISelectOption } from './FamilieReactSelect';
import { ToggleKnapp } from 'nav-frontend-toggle';

export default {
    component: FamilieReactSelect,
    parameters: {
        componentSubtitle: 'En Select som kun vises dersom man ikke er i lesevisningsmodus',
    },
    title: 'Komponenter/Form-elementer/FamilieReactSelect',
};

const options: ISelectOption[] = [
    { value: 'NORGE', label: 'Norge' },
    { value: 'SVERIGE', label: 'Sverige' },
];

export const FamilieReactSelectStory: React.FC = () => {
    const [land, settLand] = useState<ISelectOption[]>([]);
    const [lesevisning, settLesevisning] = useState(false);
    const [multi, settMulti] = useState(true);
    const [creatable, settCreatable] = useState(true);
    const [feil, settFeil] = useState(false);

    return (
        <>
            <div className={'story-elements'}>
                <ToggleKnapp pressed={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </ToggleKnapp>
                <ToggleKnapp pressed={feil} onClick={() => settFeil(!feil)}>
                    Feil
                </ToggleKnapp>
                <ToggleKnapp pressed={multi} onClick={() => settMulti(!multi)}>
                    Multiselect
                </ToggleKnapp>
                <ToggleKnapp pressed={creatable} onClick={() => settCreatable(!creatable)}>
                    Creatable
                </ToggleKnapp>
            </div>
            <div className={'story-elements'}>
                <FamilieReactSelect
                    label={'Land'}
                    placeholder={'Velg land'}
                    feil={feil ? 'Denne har feil' : undefined}
                    erLesevisning={lesevisning}
                    value={land}
                    onChange={valgteOptions => {
                        settLand(valgteOptions === null ? [] : (valgteOptions as ISelectOption[]));
                    }}
                    isMulti={multi}
                    creatable={creatable}
                    options={options}
                />
            </div>
        </>
    );
};
