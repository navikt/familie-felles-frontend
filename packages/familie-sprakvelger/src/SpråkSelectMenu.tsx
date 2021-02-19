import React, { FC } from 'react';
import { Menu, MenuItem } from 'react-aria-menubutton';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';

import { Sprak } from './typer';
import { Normaltekst } from 'nav-frontend-typografi';

const StyledListe = styled.ul`
    margin: 0;
    padding-left: 0;

    position: absolute;
    width: 100%;
    z-index: 100;
    left: 0;
    top: 100%;

    :hover,
    :focus {
        outline: none;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
    }

    li {
        list-style: none;
    }
`;

const StyledMenuItem = styled(MenuItem)`
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid ${navFarger.navGra40};
    border-left: 1px solid ${navFarger.navGra40};
    border-right: 1px solid ${navFarger.navGra40};

    :hover,
    :focus {
        outline: none;
        cursor: pointer;
        box-shadow: 0 0 0 3px ${navFarger.orangeFocus};
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
