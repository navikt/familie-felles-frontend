import React, { FC } from 'react';
import { Menu, MenuItem } from 'react-aria-menubutton';
import styled from 'styled-components';
import navFarger from 'nav-frontend-core';

import { LocaleType, sprakTittel } from './typer';
import { Normaltekst } from 'nav-frontend-typografi';

const StyledListe = styled.ul`
    padding-left: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
    margin-top: 0;

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
    border-bottom: 1px solid ${navFarger.navGra20};
    border-left: 1px solid ${navFarger.navGra20};
    border-right: 1px solid ${navFarger.navGra20};

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

const SelectMenuItem: FC<{ locale: LocaleType }> = ({ locale }) => {
    return (
        <li value={locale}>
            <StyledMenuItem>
                <Normaltekst key={locale}>{sprakTittel[locale]}</Normaltekst>
            </StyledMenuItem>
        </li>
    );
};

export const SpråkSelectMenu: FC<{
    støttedeSprak: LocaleType[];
    valgtLocale: LocaleType;
}> = ({ støttedeSprak, valgtLocale }) => {
    return (
        <Menu>
            <StyledListe>
                {støttedeSprak.map(locale => {
                    return (
                        locale !== valgtLocale && <SelectMenuItem key={locale} locale={locale} />
                    );
                })}
            </StyledListe>
        </Menu>
    );
};
