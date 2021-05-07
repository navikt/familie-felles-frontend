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
    margin-bottom: 3rem;
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
                    labelTekstForRadios={{ ja: 'Ja', nei: 'Nei' }}
                    legend={'Har du det bra?'}
                    name={'person.hardudetbra'}
                    onChange={value => {
                        alert(value === ESvar.NEI ? 'So sad' : 'Yayy, hurra!');
                    }}
                />
            </DivMedBredde>
            <DivMedBredde bredde={bredde.toString(10) + '%'}>
                <JaNeiSpørsmål
                    onChange={() => {alert('feil')}}
                    legend={"Denne har feilmelding"}
                    name={'felt.medfeil'}
                    labelTekstForRadios={{ja: "Yes sir", nei: "Nåneidu"}}
                    feil={"Dette var ikke bra"}
                />
            </DivMedBredde>
            <DivMedBredde bredde={bredde.toString(10) + '%'}>
                <JaNeiSpørsmål
                    labelTekstForRadios={{ ja: 'Ja', nei: 'Nei', vetikke: 'Vet ikke' }}
                    legend={'Har du det bra? Her kan du også svare vet ikke'}
                    name={'person.hardudetbra'}
                    onChange={value => {
                        alert(value !== ESvar.NEI ? 'Yayy, hurra!' : 'So sad');
                    }}
                />
            </DivMedBredde>
            <div>
                Du kan begrense bredde via knobs
            </div>
        </>
    );
};
