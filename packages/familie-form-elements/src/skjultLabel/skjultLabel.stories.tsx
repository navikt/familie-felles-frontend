import React from 'react';
import { SkjultLabel } from './SkjultLabel';
import { BodyLong, Link } from '@navikt/ds-react';

export default {
    component: SkjultLabel,
    parameters: {
        componentSubtitle: 'En skjult label som kun vises i htmldom-strukturen for skjermlesere.',
    },
    title: 'Komponenter/Form-elementer/SkjultLabel',
};

export const SkjultLabelStory: React.FC = ({ ...args }) => {
    return (
        <>
            <BodyLong>
                I noen tilfeller passer det ikke alltid i layouten med en tilhørende label som er
                synlig til hvert form-element. Likevel er det viktig at koden har en label, slik at
                de som bruker skjermleser får opp form-elements i riktig kontekst. Denne komponenten
                legger på en skjult label, som du vil se hvis du åpner inspect. Merk at NAVs
                skjemaelementer i hovedsak krever tilhørende label som prop. TextField
                (FamilieInput) har{' '}
                <Link href="https://aksel.nav.no/designsystem/komponenter/textfield">
                    innebygget støtte
                </Link>{' '}
                for å skjule den tilhørende labelen.
            </BodyLong>
            <SkjultLabel htmlFor="eksempelinput" {...args}>
                Hemmelig label
            </SkjultLabel>
            <input id="eksempelinput" />
        </>
    );
};
