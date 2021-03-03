import React from 'react';
import { JaNeiSpørsmål } from './JaNeiSpørsmål';
import { ESvar } from './typer';

export default {
    component: JaNeiSpørsmål,
    parameters: {
        componentSubtitle: 'En toggle for å svare på ja- og neispørsmål',
    },
    title: 'Komponenter/Form-elementer/JaNeiSpørsmål',
};

export const FamilieJaNeiSpørsmålStory: React.FC = () => {
    return (
        <>
            <JaNeiSpørsmål
                labelTekstForJaNei={{ ja: 'Ja', nei: 'Nei' }}
                legend={'Har du det bra?'}
                name={'person.hardudetbra'}
                onChange={value => {
                    alert(value === ESvar.NEI ? 'So sad' : 'Yayy, hurra!');
                }}
            />
        </>
    );
};
