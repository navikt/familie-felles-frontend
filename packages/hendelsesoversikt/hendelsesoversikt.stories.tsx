import React from 'react';

import Hendelsesoversikt from './src';
import { BehandlerRolle } from './src/types';

export default {
    component: Hendelsesoversikt,
    parameters: {
        componentSubtitle: 'Hendelser i systemet.',
    },
    title: 'Komponenter/Hendelsesoversikt',
};

export const hendelsesoversikt = () => {
    return (
        <Hendelsesoversikt
            hendelser={[
                {
                    id: '1',
                    dato: '01.01.20',
                    tittel: 'Behandling opprettet',
                    utførtAv: 'System',
                    rolle: BehandlerRolle.SYSTEM,
                    beskrivelse: 'Revurderingsbehandling opprettet',
                },
                {
                    id: '2',
                    dato: '01.02.20',
                    tittel: 'Vilkårsvurdering',
                    utførtAv: 'Hans Hansen',
                    rolle: BehandlerRolle.SAKSBEHANDLER,
                    beskrivelse: 'Vilkårsvurdering utført',
                },
            ]}
        />
    );
};
