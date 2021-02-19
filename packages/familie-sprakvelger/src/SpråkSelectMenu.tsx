import React, { FC } from 'react';
import { Menu, MenuItem } from 'react-aria-menubutton';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';

import { Sprak } from './typer';
import { Normaltekst } from 'nav-frontend-typografi';

const StyledListe = styled.ul`
    padding-left: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
    margin-top: 3px;

    :hover,
    :focus {
        outline: none;
    }

    li {
        list-style: none;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid ${navFarger.navGra40};
    border-left: 1px solid ${navFarger.navGra40};
    border-right: 1px solid ${navFarger.navGra40};

    :hover,
    :focus {
        outline: none;
        background-color: ${navFarger.navBla};
        color: #fff;
    }

    :hover {
        cursor: pointer;
    }
`;

const SelectMenuItem: FC<{ språkObj: Sprak }> = ({ språkObj }) => {
    return (
        <li key={språkObj.locale} value={språkObj.locale}>
            <StyledMenuItem>
                <Normaltekst id={språkObj.tittel}>{språkObj.tittel}</Normaltekst>
            </StyledMenuItem>
        </li>
    );
};

export const SpråkSelectMenu: FC<{
    støttedeSprak: Sprak[];
    locale: string;
}> = ({ støttedeSprak, locale }) => {
    return (
        <Menu>
            <StyledListe>
                {støttedeSprak.map(sprakObj => {
                    return (
                        sprakObj.locale !== locale && (
                            <SelectMenuItem key={sprakObj.locale} språkObj={sprakObj} />
                        )
                    );
                })}
            </StyledListe>
        </Menu>
    );
};
