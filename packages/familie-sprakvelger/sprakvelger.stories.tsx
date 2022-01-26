import React from 'react';
import { Sprakvelger, LocaleType, SprakProvider } from './src';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

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

export const FamilieSprakvelger: React.FC = ({...args}) => {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
    `;

    const StyledSprakvelger = styled(Sprakvelger)`
        color: green;
        margin: auto;
    `;

    return (
        <SprakProvider tekster={messages} defaultLocale={LocaleType.en}>
            <Wrapper>
                <Sprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} {...args}/>
                <p>
                    <FormattedMessage id={'greeting'} />
                </p>
                <p>Den kan styles om ønskelig</p>
                <StyledSprakvelger støttedeSprak={[LocaleType.en, LocaleType.nn, LocaleType.nb]} />
            </Wrapper>
        </SprakProvider>
    );
};


// @ts-ignore
FamilieSprakvelger.args = {
    støttedeSprak: [LocaleType.en, LocaleType.nn, LocaleType.nb]
}
