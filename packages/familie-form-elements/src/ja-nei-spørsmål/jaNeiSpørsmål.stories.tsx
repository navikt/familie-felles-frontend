import React from "react";
import { JaNeiSpørsmål } from './JaNeiSpørsmål';
import { ESvar } from './typer';
import styled from "styled-components";
// Det må faktisk være plugin fra workspace her så vidt jeg forstår
// tslint:disable-next-line:no-implicit-dependencies
import { number, withKnobs } from "@storybook/addon-knobs";

export default {
    component: JaNeiSpørsmål,
    parameters: {
        componentSubtitle: 'En toggle for å svare på ja- og neispørsmål',
    },
    title: 'Komponenter/Form-elementer/JaNeiSpørsmål',
    decorators: [withKnobs]
};

const DivMedBredde = styled.div<{bredde: string}>`
  width: ${props => props.bredde};
`

export const FamilieJaNeiSpørsmålStory: React.FC = () => {
    const bredde = number(
        'Breddebegrensning',
        100,
        {
            min: 10,
            max: 100,
            step: 1,
            range: true
        }
    )
    return (
        <>
            <DivMedBredde bredde={bredde.toString(10) + '%'}>
                <JaNeiSpørsmål
                    labelTekstForJaNei={{ ja: 'Ja', nei: 'Nei' }}
                    legend={'Har du det bra?'}
                    name={'person.hardudetbra'}
                    onChange={value => {
                        alert(value === ESvar.NEI ? 'So sad' : 'Yayy, hurra!');
                    }}
                />
            </DivMedBredde>
            <div>
                Du kan begrense bredde via knobs
            </div>
        </>
    );
};
