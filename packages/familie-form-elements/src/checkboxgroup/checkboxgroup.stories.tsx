import { BodyShort, Button, Checkbox } from '@navikt/ds-react';
import React, { useState } from 'react';
import { FamilieCheckboxGroup } from '..';
import '../../stories.less';

export default {
    component: FamilieCheckboxGroup,
    parameters: {
        componentSubtitle: 'Som en vanlig checkboxgroup, men med lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieCheckboxGroup',
};

export const FamilieCheckboxGroupStory = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [tilstand, settTilstand] = useState<any[]>([]);
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
                Vær obs på at verdien som settes som <em>value</em>-prop på <em>Checkbox</em> er den
                verdien som vil bli vist i lesevisning.
            </BodyShort>
            <div className={'story-elements'}>
                <Button onClick={onClickToggleKnapp}>{knappTekst}</Button>
            </div>
            <div className={'story-elements'}>
                <FamilieCheckboxGroup
                    legend={'Eksempel på checkboxgroup'}
                    value={tilstand}
                    erLesevisning={lesevisning}
                    onChange={verdi => settTilstand(verdi)}
                    {...args}
                >
                    <Checkbox value="Ole Duck">Ole Duck</Checkbox>
                    <Checkbox value="Dole Duck">Dole Duck</Checkbox>
                    <Checkbox value="Doffen Duck">Doffen Duck</Checkbox>
                    <Checkbox value="Pippilotta Viktualia Rullegardina Krusemynte Efraimsdatter Langstrømpe">
                        Pippilotta Viktualia Rullegardina Krusemynte Efraimsdatter Langstrømpe
                    </Checkbox>
                </FamilieCheckboxGroup>
            </div>
        </>
    );
};
