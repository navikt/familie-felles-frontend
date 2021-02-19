import * as React from 'react';
import styled from 'styled-components';
import { Normaltekst } from 'nav-frontend-typografi';
import { SpråkSelectMenu } from './SpråkSelectMenu';
import navFarger from 'nav-frontend-core';
import { Button, Wrapper } from 'react-aria-menubutton';
import { useSprakContext } from './SprakContext';
import { Sprak } from './typer';
import { Globe, Expand, Collapse } from '@navikt/ds-icons';

const StyledWrapper = styled(Wrapper)`
    width: 170px;
    position: relative;
    outline: none;
    margin: auto;
`;

const StyledButton = styled(Button)`
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    outline: none;
    border-radius: 0.25rem;
    border: 3px solid ${navFarger.navGra40};

    &:focus {
        border: solid 3px ${navFarger.fokusFarge};
    }
`;

const StyledNormalTekst = styled(Normaltekst)`
    padding: 0 1.22rem;
    flex-grow: 1;
`;

export const Sprakvelger: React.FC<{ støttedeSprak: Sprak[] }> = ({ støttedeSprak }) => {
    const [sprak, setSprak] = useSprakContext();
    const [erÅpen, setErÅpen] = React.useState(false);

    const handleSelection = (value: JSX.Element) => {
        const valgtSprakTittel = value.props.children;
        const valgtSprak = støttedeSprak.find(sprakObj => sprakObj.tittel === valgtSprakTittel);
        if (valgtSprak) {
            setSprak(valgtSprak);
        }
    };

    return (
        <StyledWrapper
            onSelection={(value: JSX.Element) => handleSelection(value)}
            onMenuToggle={wrapperState => setErÅpen(wrapperState.isOpen)}
        >
            <StyledButton>
                <Globe />
                <StyledNormalTekst>{sprak.tittel}</StyledNormalTekst>
                {erÅpen ? <Collapse /> : <Expand />}
            </StyledButton>
            <SpråkSelectMenu locale={sprak.locale} støttedeSprak={støttedeSprak} />
        </StyledWrapper>
    );
};
