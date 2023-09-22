import React from 'react';
import { Sprakvelger, LocaleType, SprakProvider, useSprakContext } from './src';
import styled from 'styled-components';
import { BodyShort } from '@navikt/ds-react';

export default {
    component: Sprakvelger,
    parameters: {
        componentSubtitle: 'Kort tekst om komponenten',
    },
    title: 'Komponenter/Sprakvelger',
};

const messages = {
    en: {
        greeting: 'Hey på engelsk',
    },
    nb: {
        greeting: 'Hei på bokmål',
    },
    nn: {
        greeting: 'Hei på nynorsk',
    },
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const StyledSprakvelger = styled(Sprakvelger)`
    color: green;
    margin: auto;
`;

export const SprakvelgerContainer: React.FC = ({ ...args }) => {
    const [valgtLocale] = useSprakContext();
    return (
        <Wrapper>
            <Sprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} {...args} />
            <p>
                <BodyShort>{messages[valgtLocale].greeting}</BodyShort>
            </p>
            <p>Den kan styles om ønskelig</p>
            <StyledSprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} />
        </Wrapper>
    );
};

export const FamilieSprakvelger: React.FC = ({ ...args }) => {
    return (
        <SprakProvider defaultLocale={LocaleType.en}>
            <SprakvelgerContainer {...args} />
        </SprakProvider>
    );
};

// @ts-ignore
FamilieSprakvelger.args = {
    støttedeSprak: [LocaleType.en, LocaleType.nn, LocaleType.nb],
};
