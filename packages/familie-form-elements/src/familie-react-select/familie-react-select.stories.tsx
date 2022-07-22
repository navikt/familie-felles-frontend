import React, { useState } from 'react';
import '../../stories.less';
import { FamilieReactSelect, ISelectOption } from './FamilieReactSelect';
import { Switch } from '@navikt/ds-react';

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

export const FamilieReactSelectStory: React.FC = ({ ...args }) => {
    const [land, settLand] = useState<ISelectOption[]>([]);
    const [lesevisning, settLesevisning] = useState(false);
    const [multi, settMulti] = useState(true);
    const [creatable, settCreatable] = useState(true);
    const [feil, settFeil] = useState(false);

    return (
        <>
            <div className={'story-elements switch-gruppe'}>
                <Switch checked={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </Switch>
                <Switch checked={feil} onClick={() => settFeil(!feil)}>
                    Feil
                </Switch>
                <Switch checked={multi} onClick={() => settMulti(!multi)}>
                    Multiselect
                </Switch>
                <Switch checked={creatable} onClick={() => settCreatable(!creatable)}>
                    Creatable
                </Switch>
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
                    {...args}
                />
            </div>
        </>
    );
};
