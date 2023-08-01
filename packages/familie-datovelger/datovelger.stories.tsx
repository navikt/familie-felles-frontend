import React, { useState } from 'react';

import { ISODateString } from 'nav-datovelger/lib/types';

import { BodyShort, Switch } from '@navikt/ds-react';
import '@navikt/ds-css';
import { FamilieDatovelger } from './src';

export default {
    component: FamilieDatovelger,
    parameters: {
        componentSubtitle: 'En datovelger med støtte for lesevisning.',
    },
    title: 'Komponenter/FamilieDatovelger',
};

export const FamilieDatovelgerStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [medFeil, settMedFeil] = useState(false);
    const [value, settValue] = useState<ISODateString | undefined>('01.01.20');

    return (
        <>
            <div>
                <Switch checked={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </Switch>
                <Switch checked={medFeil} onClick={() => settMedFeil(!medFeil)}>
                    Feil
                </Switch>
            </div>
            <div>
                <FamilieDatovelger
                    id={'dato'}
                    label={'Datovelger'}
                    onChange={(dato?: ISODateString) => {
                        settValue(dato);
                    }}
                    feil={medFeil ? 'Denne har feil' : undefined}
                    description={
                        <BodyShort size={'small'}>
                            Dette er en beskrivelse, f.eks. (format: dd.mm.åååå)
                        </BodyShort>
                    }
                    value={value}
                    erLesesvisning={lesevisning}
                    {...args}
                />
            </div>
        </>
    );
};