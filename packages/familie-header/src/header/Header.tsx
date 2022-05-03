import './Header.less';

import navFarger from 'nav-frontend-core';
import React from 'react';

import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import UserPanel from '@navikt/nap-user-panel';

import { System } from '@navikt/ds-icons';
import { Dropdown } from '@navikt/ds-react-internal';
import '@navikt/ds-css-internal';
import { Systemtittel } from 'nav-frontend-typografi';

export interface Brukerinfo {
    navn: string;
    enhet?: string;
}

export interface PopoverItem {
    name: string;
    href: string;
    isExternal?: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
}

export interface HeaderProps {
    tittel: string;
    brukerinfo: Brukerinfo;
    tittelHref?: string;
    children?: React.ReactNode | React.ReactNode[];
    brukerPopoverItems?: PopoverItem[];
    eksterneLenker: PopoverItem[];
    tittelOnClick?: () => void;
}

interface BrukerProps {
    navn: string;
    enhet?: string;
    popoverItems?: PopoverItem[];
}
interface LenkePopoverProps {
    lenker: PopoverItem[];
}

export const Bruker = ({ navn, enhet, popoverItems }: BrukerProps) => {
    return (
        <Dropdown>
            <Dropdown.Toggle>
                <UserPanel name={navn} unit={enhet ? `Enhet: ${enhet}` : 'Ukjent enhet'} />
            </Dropdown.Toggle>
            {popoverItems && (
                <Dropdown.Menu>
                    <Dropdown.Menu.List>
                        {popoverItems.map(lenke => (
                            <Dropdown.Menu.List.Item>
                                <a href={lenke.href}>{lenke.name}</a>
                            </Dropdown.Menu.List.Item>
                        ))}
                    </Dropdown.Menu.List>
                    <BoxedListWithLinks
                        items={popoverItems}
                        onClick={(index, e) => popoverItems[index]?.onClick?.(e)}
                    />
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
};

export const LenkerDropdown = ({ lenker }: LenkePopoverProps) => {
    return (
        <Dropdown>
            <Dropdown.Toggle className={'systemknapp'}>
                <System color={navFarger.white} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Menu.List>
                    {lenker.map(lenke => (
                        <Dropdown.Menu.List.Item>
                            <a href={lenke.href}>{lenke.name}</a>
                        </Dropdown.Menu.List.Item>
                    ))}
                </Dropdown.Menu.List>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export const Header = ({
    tittel,
    children,
    brukerinfo,
    tittelHref = '/',
    brukerPopoverItems,
    eksterneLenker = [],
    tittelOnClick,
}: HeaderProps) => {
    return (
        <div className="header">
            <div className="rad">
                {!tittelOnClick && (
                    <a href={tittelHref} className="tittel">
                        <Systemtittel tag={'h1'}>{tittel}</Systemtittel>
                    </a>
                )}
                {tittelOnClick && (
                    <button className="tittelknapp" onClick={tittelOnClick}>
                        <Systemtittel tag={'h1'}>{tittel}</Systemtittel>
                    </button>
                )}
            </div>
            <div className="rad">
                {children}
                <LenkerDropdown lenker={eksterneLenker} />
                <div className="avdeler" />
                <Bruker
                    navn={brukerinfo.navn}
                    enhet={brukerinfo.enhet}
                    popoverItems={brukerPopoverItems}
                />
            </div>
        </div>
    );
};
