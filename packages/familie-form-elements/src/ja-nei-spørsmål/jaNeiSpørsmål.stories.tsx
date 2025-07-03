import React from 'react';
import { JaNeiSpørsmål } from './JaNeiSpørsmål';
import { ESvar } from './typer';
import styled from 'styled-components';
// Det må faktisk være plugin fra workspace her så vidt jeg forstår
// tslint:disable-next-line:no-implicit-dependencies

export default {
    component: JaNeiSpørsmål,
    parameters: {
        docs: {
            subtitle: 'En toggle for å svare på ja- og neispørsmål',
        },
    },
    title: 'Komponenter/Form-elementer/JaNeiSpørsmål',
};

const DivMedBredde = styled.div<{ bredde: string }>`
    width: ${props => props.bredde};
    margin-bottom: 3rem;
`;

interface Props {
    bredde: number;
}
export const FamilieJaNeiSpørsmålStory: React.FC<Props> = ({ bredde, ...args }) => {
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
                    error={'Dette var ikke bra'}
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
        </>
    );
};

// @ts-expect-error Storybookspesifikk kode
FamilieJaNeiSpørsmålStory.args = {
    bredde: 100,
};

// @ts-expect-error Storybookspesifikk kode
FamilieJaNeiSpørsmålStory.argTypes = {
    bredde: {
        control: {
            type: 'range',
            min: 10,
            max: 100,
            step: 1,
        },
    },
};
