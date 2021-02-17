import * as React from 'react';
import NedChevron from 'nav-frontend-chevron/lib/ned-chevron';
import styled from 'styled-components/macro';
import { Normaltekst } from 'nav-frontend-typografi';
import { SpråkSelectMenu } from './SpråkSelectMenu';
import navFarger from 'nav-frontend-core';
import { hentListeMedSpråk, hentValgtSpråk } from './utils';
import { Button, Wrapper } from 'react-aria-menubutton';
import { EngelskFlaggIkon, NorskFlaggIkon } from '@navikt/familie-ikoner';
import { useSprakContext } from './SprakContext';

const StyledSprakvelger = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledWrapper = styled(Wrapper)`
    width: 170px;
    border: 3px solid ${navFarger.navGra40};
    border-radius: 0.25rem;
    position: relative;
    outline: none;
`;

const StyledButton = styled(Button)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-gap: 1.22rem;
    padding: 0.5rem 1rem 0.5rem 1rem;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
        border-color: transparent;
    }
`;

export const SVGFlagg = styled.div`
    text-align: left;
    width: 65%;
`;

export const StyledTekst = styled(Normaltekst)`
    text-align: left;
    width: 65%;
`;

const StyledChevronNed = styled(NedChevron)`
    align-self: center;
`;

export const Sprakvelger: React.FC<any> = () => {
    const [ locale, setLocale ] = useSprakContext();
    const språkObjekter = hentListeMedSpråk();

    const handleSelection = (value: JSX.Element[]) => {
        const språk = value[1].props.children;
        const loc = språkObjekter.find(språkobj => språkobj.tittel === språk);
        if (loc) {
            setLocale(loc.locale);
        }
    };

    return (
        <StyledSprakvelger>
            <StyledWrapper onSelection={(value: JSX.Element[]) => handleSelection(value)}>
                <StyledButton>
                    <SVGFlagg>
                        {locale === 'en' ? <EngelskFlaggIkon /> : <NorskFlaggIkon />}
                    </SVGFlagg>
                    <StyledTekst>{hentValgtSpråk(locale)}</StyledTekst>
                    <StyledChevronNed />
                </StyledButton>
                <SpråkSelectMenu locale={locale} språkObjekter={språkObjekter} />
            </StyledWrapper>
        </StyledSprakvelger>
    );
};
