import React, { useState } from 'react';

import { ISODateString } from 'nav-datovelger/lib/types';

import '../../stories.less';
import { FamilieDatovelger } from '..';
import { BodyShort, Switch } from '@navikt/ds-react';
import '@navikt/ds-css';

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
            <div className={'story-elements switch-gruppe'}>
                <Switch checked={lesevisning} onClick={() => settLesevisning(!lesevisning)}>
                    Lesevisning
                </Switch>
                <Switch checked={medFeil} onClick={() => settMedFeil(!medFeil)}>
                    Feil
                </Switch>
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
                        <BodyShort size={'small'}>
                            Dette er en beskrivelse, f.eks. (format: dd.mm.åååå)
                        </BodyShort>
                    }
                    valgtDato={valgtDato}
                    erLesesvisning={lesevisning}
                    {...args}
                />
            </div>
        </>
    );
};
