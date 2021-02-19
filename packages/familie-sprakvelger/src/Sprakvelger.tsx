import * as React from 'react';
import { NedChevron } from 'nav-frontend-chevron';
import styled from 'styled-components';
import { Normaltekst } from 'nav-frontend-typografi';
import { SpråkSelectMenu } from './SpråkSelectMenu';
import navFarger from 'nav-frontend-core';
import { Button, Wrapper } from 'react-aria-menubutton';
import { useSprakContext } from './SprakContext';
import { Sprak } from './typer';
import { Globe } from '@navikt/ds-icons';

const StyledWrapper = styled(Wrapper)`
    width: 170px;
    border-radius: 0.25rem;
    border: 3px solid ${navFarger.navGra40};
    position: relative;
    outline: none;
    margin: auto;
`;

const StyledButton = styled(Button)`
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1.22rem;
    padding: 0.5rem 1rem;
    align-items: center;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.fokusFarge};
        border-color: transparent;
    }
`;

export const Sprakvelger: React.FC<{ støttedeSprak: Sprak[] }> = ({ støttedeSprak }) => {
    const [sprak, setSprak] = useSprakContext();

    const handleSelection = (value: JSX.Element) => {
        const valgtSprakTittel = value.props.children;
        const valgtSprak = støttedeSprak.find(sprakObj => sprakObj.tittel === valgtSprakTittel);
        if (valgtSprak) {
            setSprak(valgtSprak);
        }
    };

    return (
        <StyledWrapper onSelection={(value: JSX.Element) => handleSelection(value)}>
            <StyledButton>
                <Globe />
                <Normaltekst>{sprak.tittel}</Normaltekst>
                <NedChevron />
            </StyledButton>
            <SpråkSelectMenu locale={sprak.locale} støttedeSprak={støttedeSprak} />
        </StyledWrapper>
    );
};
