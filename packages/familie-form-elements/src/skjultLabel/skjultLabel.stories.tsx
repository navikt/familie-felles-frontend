import React from 'react';
import SkjultLabel from './SkjultLabel';
import { Input } from 'nav-frontend-skjema';

export default {
    component: SkjultLabel,
    parameters: {
        componentSubtitle: 'En skjult label som kun vises i htmldom-strukturen for skjermlesere.',
    },
    title: 'Komponenter/Form-elementer/SkjultLabel',
};

export const SkjultLabelStory: React.FC = () => (
    <>
        <SkjultLabel htmlFor="input" />
        <Input id="input">
            Her er et inputfelt som har en label som ikke vises for andre enn skjermleseren
        </Input>
    </>
);
