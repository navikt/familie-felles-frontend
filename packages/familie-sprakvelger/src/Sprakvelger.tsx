import * as React from 'react';
import styled from 'styled-components';
import { Normaltekst } from 'nav-frontend-typografi';
import { SpråkSelectMenu } from './SpråkSelectMenu';
import navFarger from 'nav-frontend-core';
import { Button, Wrapper } from 'react-aria-menubutton';
import { useSprakContext } from './SprakContext';
import { LocaleType, sprakTittel } from './typer';
import { Globe, Expand, Collapse } from '@navikt/ds-icons';
import { SkjultLabel } from '@navikt/familie-form-elements';
import { hentSprakvelgerLabelTekst } from './utils';

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

const StyledCollapse = styled(Collapse)`
  z-index: -1;
`

const StyledExpand = styled(Expand)`
  z-index: -1;
`

export const Sprakvelger: React.FC<{ støttedeSprak: LocaleType[] }> = ({ støttedeSprak }) => {
    const [valgtLocale, setValgtLocale] = useSprakContext();
    const [erÅpen, setErÅpen] = React.useState(false);

    const handleSelection = (value: JSX.Element) => {
        const valgtSprak = støttedeSprak.find(locale => locale === value.key);
        if (valgtSprak) {
            setValgtLocale(valgtSprak);
        }
    };

    return (
        <StyledWrapper
            onSelection={(value: JSX.Element) => handleSelection(value)}
            onMenuToggle={wrapperState => setErÅpen(wrapperState.isOpen)}
        >
            <SkjultLabel htmlFor="språkvelger">
                {hentSprakvelgerLabelTekst(valgtLocale)}
            </SkjultLabel>
            <StyledButton id="språkvelger" value={valgtLocale}>
                <Globe role="img" />
                <StyledNormalTekst>{sprakTittel[valgtLocale as LocaleType]}</StyledNormalTekst>
                {erÅpen ? <StyledCollapse role="img" /> : <StyledExpand role="img" />}
            </StyledButton>
            <SpråkSelectMenu valgtLocale={valgtLocale} støttedeSprak={støttedeSprak} />
        </StyledWrapper>
    );
};
