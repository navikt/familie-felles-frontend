import React from 'react';
import { JaNeiSpørsmål } from './JaNeiSpørsmål';
import { ESvar } from './typer';
import styled from 'styled-components';
// Det må faktisk være plugin fra workspace her så vidt jeg forstår
// tslint:disable-next-line:no-implicit-dependencies

export default {
    component: JaNeiSpørsmål,
    parameters: {
        componentSubtitle: 'En toggle for å svare på ja- og neispørsmål',
    },
    title: 'Komponenter/Form-elementer/JaNeiSpørsmål',
};

const DivMedBredde = styled.div<{ bredde: string }>`
    width: ${props => props.bredde};
    margin-bottom: 3rem;
`;

interface Props {
    bredde: number
}
export const FamilieJaNeiSpørsmålStory: React.FC<Props> = ({ bredde, ...args }) => {
    // const bredde = number('Breddebegrensning', 100, {
    //     min: 10,
    //     max: 100,
    //     step: 1,
    //     range: true,
    // });
    return (
        <>
            <DivMedBredde bredde={bredde.toString(10) + '%'} {...args}>
                <JaNeiSpørsmål
                    labelTekstForRadios={{ ja: 'Ja', nei: 'Nei' }}
                    legend={'Har du det bra?'}
                    name={'person.hardudetbra'}
                    onChange={value => {
                        alert(value === ESvar.NEI ? 'So sad' : 'Yayy, hurra!');
                    }}
                    initiellVerdi={null}
                />
            </DivMedBredde>
            <DivMedBredde bredde={bredde.toString(10) + '%'}>
                <JaNeiSpørsmål
                    onChange={() => {
                        alert('feil');
                    }}
                    legend={'Denne har feilmelding'}
                    name={'felt.medfeil'}
                    labelTekstForRadios={{ ja: 'Yes sir', nei: 'Nåneidu' }}
                    feil={'Dette var ikke bra'}
                    initiellVerdi={null}
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
                    initiellVerdi={null}
                />
            </DivMedBredde>
            <div>Du kan begrense bredde via knobs</div>
        </>
    );
};

// @ts-ignore
FamilieJaNeiSpørsmålStory.args = {
    bredde: 100
}

// @ts-ignore
FamilieJaNeiSpørsmålStory.argTypes = {
    bredde: {
        control: {
            type: 'range',
            min: 10,
            max: 100,
            step: 1
        }
    }
}
