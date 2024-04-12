import React, { FC } from 'react';
import { Menu, MenuItem } from 'react-aria-menubutton';
import styled from 'styled-components';

import { LocaleType, sprakTittel } from './typer';
import { BodyShort } from '@navikt/ds-react';

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

// @ts-ignore
const StyledMenuItem = styled(MenuItem)`
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid var(--a-gray-300);
    border-left: 1px solid var(--a-gray-300);
    border-right: 1px solid var(--a-gray-300);

    &:hover,
    &:focus {
        outline: none;
        background-color: var(--a-blue-500);
        color: #fff;
    }

    &:hover {
        cursor: pointer;
    }
`;

const SelectMenuItem: FC<{ locale: LocaleType }> = ({ locale }) => {
    return (
        <li value={locale}>
            <StyledMenuItem>
                <BodyShort size={'small'} key={locale}>
                    {sprakTittel[locale]}
                </BodyShort>
            </StyledMenuItem>
        </li>
    );
};

export const SpråkSelectMenu: FC<{
    støttedeSprak: LocaleType[];
    valgtLocale: LocaleType;
}> = ({ støttedeSprak, valgtLocale }) => {
    return (
        // @ts-ignore
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
