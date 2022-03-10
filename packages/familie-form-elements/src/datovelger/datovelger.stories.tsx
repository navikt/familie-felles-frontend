import React, { useState } from 'react';

import { ISODateString } from 'nav-datovelger/lib/types';
import { Normaltekst } from 'nav-frontend-typografi';
import { ToggleKnapp } from 'nav-frontend-toggle';

import '../../stories.less';
import { FamilieDatovelger } from '..';

export default {
    component: FamilieDatovelger,
    parameters: {
        componentSubtitle: 'En datovelger med støtte for lesevisning.',
    },
    title: 'Komponenter/Form-elementer/FamilieDatovelger',
};

export const FamilieDatovelgerStory: React.FC = ({ ...args }) => {
    const [lesevisning, settLesevisning] = useState(false);
    const [medFeil, settMedFeil] = useState(false);
    const [valgtDato, settValgtDato] = useState<ISODateString | undefined>('01.01.20');

    return (
        <>
            <div className={'story-elements'}>
                <ToggleKnapp pressed={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </ToggleKnapp>
                <ToggleKnapp pressed={medFeil} onClick={() => settMedFeil(!medFeil)}>
                    Feil
                </ToggleKnapp>
            </div>
            <div className={'story-elements'}>
                <FamilieDatovelger
                    id={'dato'}
                    label={'Datovelger'}
                    onChange={(dato?: ISODateString) => {
                        settValgtDato(dato);
                    }}
                    feil={medFeil ? 'Denne har feil' : undefined}
                    description={
                        <Normaltekst>
                            Dette er en beskrivelse, f.eks. (format: dd.mm.åååå)
                        </Normaltekst>
                    }
                    valgtDato={valgtDato}
                    erLesesvisning={lesevisning}
                    {...args}
                />
            </div>
        </>
    );
};
