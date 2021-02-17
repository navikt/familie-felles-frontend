import React, { FC } from 'react';
import { Menu, MenuItem } from 'react-aria-menubutton';
import { StyledTekst, SVGFlagg } from './Sprakvelger';
import styled from 'styled-components/macro';
import navFarger from 'nav-frontend-core';
import { EngelskFlaggIkon, NorskFlaggIkon } from '@navikt/familie-ikoner';
import { Sprak } from './typer';

const StyledSpråkMeny = styled(Menu)`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
`;

const StyledListe = styled.ul`
    margin: 0;
    padding-left: 0;

    position: absolute;
    width: 100%;
    z-index: 100;
    left: 0;
    top: 100%;

    &:hover {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
    }

    ul {
        margin: 0;
        padding-left: 0;

        position: absolute;
        width: 100%;
        z-index: 100;
        left: 0;
        top: 100%;
    }

    li {
        width: 100%;
        list-style: none;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 1.1rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    outline: none;
    background-color: #ffffff;
    border-bottom: 1px solid ${navFarger.navGra40};
    border-left: 1px solid ${navFarger.navGra40};
    border-right: 1px solid ${navFarger.navGra40};

    &:hover {
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
    }
`;

const SelectMenuItem: FC<{ språkObj: Sprak }> = ({ språkObj }) => {
    return (
        <li key={språkObj.locale} value={språkObj.locale}>
            <StyledMenuItem>
                <SVGFlagg key={språkObj.locale}>
                    {språkObj.locale === 'en' ? <EngelskFlaggIkon /> : <NorskFlaggIkon />}
                </SVGFlagg>
                <StyledTekst id={språkObj.tittel}>{språkObj.tittel}</StyledTekst>
            </StyledMenuItem>
        </li>
    );
};

export const SpråkSelectMenu: FC<{
    støttedeSprak: Sprak[];
    locale: string;
}> = ({ støttedeSprak, locale }) => {
    return (
        <StyledSpråkMeny>
            <StyledListe>
                {støttedeSprak.map(sprakObj => {
                    return (
                        sprakObj.locale !== locale && (
                            <SelectMenuItem key={sprakObj.locale} språkObj={sprakObj} />
                        )
                    );
                })}
            </StyledListe>
        </StyledSpråkMeny>
    );
};
