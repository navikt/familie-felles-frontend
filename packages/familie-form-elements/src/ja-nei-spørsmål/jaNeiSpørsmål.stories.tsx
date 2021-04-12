import React from "react";
import { JaNeiSpørsmål } from './JaNeiSpørsmål';
import { ESvar } from './typer';
import styled from "styled-components";
import { number, withKnobs } from "@storybook/addon-knobs";
import { NumberTypeKnobOptions } from "@storybook/addon-knobs/dist/components/types";

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

const JaNeiMedBreddeToggle: React.FC = ({children}) => {
  const knobOptions: NumberTypeKnobOptions = {
    min: 10,
    max: 100,
    step: 1,
    range: true
  }
  return (
    <>
      <DivMedBredde bredde={number('Breddebegrensning', 100, knobOptions).toString() + '%'}>
        {children}
      </DivMedBredde>
    </>
  )
}

export const FamilieJaNeiSpørsmålStory: React.FC = () => {
    return (
      <>
        <JaNeiMedBreddeToggle>
          <JaNeiSpørsmål
            labelTekstForJaNei={{ ja: 'Ja', nei: 'Nei' }}
            legend={'Har du det bra?'}
            name={'person.hardudetbra'}
            onChange={value => {
              alert(value === ESvar.NEI ? 'So sad' : 'Yayy, hurra!');
            }}
          />
        </JaNeiMedBreddeToggle>
        <div>
          Du kan begrense bredde via knobs
        </div>
      </>
    );
};
