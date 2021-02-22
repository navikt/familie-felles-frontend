import React from 'react';
import SkjultLabel from './SkjultLabel';
import { Input } from 'nav-frontend-skjema';
import { Normaltekst } from 'nav-frontend-typografi';

export default {
    component: SkjultLabel,
    parameters: {
        componentSubtitle: 'En skjult label som kun vises i htmldom-strukturen for skjermlesere.',
    },
    title: 'Komponenter/Form-elementer/SkjultLabel',
};

export const SkjultLabelStory: React.FC = () => (
    <>
        <Normaltekst>
            I noen tilfeller passer det ikke alltid i layouten med en tilhørende label som er synlig
            til hvert form-element. Likevel er det viktig at koden har en label, slik at de som
            bruker skjermleser får opp form-elements i riktig kontekst. Denne komponenten legger på
            en skjult label, som du vil se hvis du åpner inspect.
        </Normaltekst>
        <SkjultLabel htmlFor="input" />
        <Input id="input" />
    </>
);
