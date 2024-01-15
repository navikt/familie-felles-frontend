import React from 'react';

import { BodyShort, Button, Dropdown, HStack, Tag } from '@navikt/ds-react';
import { kjønnType } from '@navikt/familie-typer';

import Visittkort from './src';
import '@navikt/ds-css';

export default {
    component: Visittkort,
    parameters: {
        componentSubtitle:
            'Visittkort brukes til å vise enkel informasjon om en bruker. Eksempel nr 2 under er laget for full skjermbredde. ',
    },
    title: 'Komponenter/Visittkort',
};

export const visittkort = ({ ...args }) => {
    return (
        <>
            <Visittkort
                alder={30}
                kjønn={kjønnType.KVINNE}
                navn="FREDFULL KETSJUP"
                ident={'123456 78910'}
                {...args}
            />
            <Visittkort
                alder={35}
                kjønn={kjønnType.UKJENT}
                navn="HEMMELIGHETSFULL BIBLIOTEKAR"
                ident="123456 78910"
            >
                <HStack justify="space-between" gap="4" align="center">
                    <HStack gap="4" align="center">
                        <div>|</div>
                        <BodyShort>{`Kommunenr: 0181`}</BodyShort>
                        <Tag variant="neutral-filled" size="small">
                            Død 01.01.2024
                        </Tag>
                    </HStack>
                    <HStack gap="4" align="center">
                        <Tag variant="info" size="small" children={`Migrert 01.01.2024`}></Tag>
                        <BodyShort>Saksoversikt</BodyShort>
                        <BodyShort>Dokumenter</BodyShort>
                        <Dropdown>
                            <Button
                                variant="secondary"
                                size="small"
                                iconPosition={'right'}
                                as={Dropdown.Toggle}
                            >
                                Behandlingsmeny
                            </Button>
                        </Dropdown>
                    </HStack>
                </HStack>
            </Visittkort>
        </>
    );
};

visittkort.args = {
    alder: 30,
    kjønn: kjønnType.KVINNE,
    navn: 'FREDFULL KETSJUP',
    ident: '123456 78910',
};

visittkort.argTypes = {
    alder: {
        control: {
            type: 'number',
        },
    },
};
