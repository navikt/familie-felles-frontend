import React from 'react';
import styled from 'styled-components';

import { Buildings3Icon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dropdown, Spacer, Tag } from '@navikt/ds-react';
import { AGreen600, ASpacing6 } from '@navikt/ds-tokens/dist/tokens';
import { kjønnType } from '@navikt/familie-typer';

import Visittkort from './src';
import '@navikt/ds-css';

const IkonSirkel = styled.span`
    border-color: ${AGreen600};
    border-radius: 50%;
    background-color: ${AGreen600};
    display: inline-grid;
    place-items: center;
    height: ${ASpacing6};
    width: ${ASpacing6};
    color: white;
`;

export default {
    component: Visittkort,
    parameters: {
        docs: {
            subtitle:
                'Visittkort brukes til å vise enkel informasjon om en bruker. Eksempel nr 2 under er laget for full skjermbredde.',
        },
    },
    title: 'Komponenter/Visittkort',
};

export const VisittkortStory = ({ ...args }) => {
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
                alder={12}
                kjønn={kjønnType.MANN}
                navn="ROLIG BAJAS"
                ident={'123456 78910'}
                ikon={
                    <IkonSirkel>
                        <Buildings3Icon width={20} height={20} />
                    </IkonSirkel>
                }
            />
            <Visittkort
                alder={35}
                kjønn={kjønnType.UKJENT}
                navn="HEMMELIGHETSFULL BIBLIOTEKAR"
                ident="123456 78910"
                dempetKantlinje
                padding
            >
                <div>|</div>
                <BodyShort>{`Kommunenr: 0181`}</BodyShort>
                <Tag variant="neutral-filled" size="small">
                    Død 01.01.2024
                </Tag>
                <Spacer />
                <Tag variant="info" size="small">{`Migrert 01.01.2024`}</Tag>
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
            </Visittkort>
        </>
    );
};

VisittkortStory.args = {
    alder: 30,
    kjønn: kjønnType.KVINNE,
    navn: 'FREDFULL KETSJUP',
    ident: '123456 78910',
};

VisittkortStory.argTypes = {
    alder: {
        control: {
            type: 'number',
        },
    },
    dempetKantlinje: {
        control: {
            type: 'boolean',
        },
    },
    padding: {
        control: {
            type: 'boolean',
        },
    },
};
