import React from 'react';
import '@navikt/ds-css';
import { Dropdown, InternalHeader as NavHeader } from '@navikt/ds-react';
import { MenuGridIcon } from '@navikt/aksel-icons';

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
            <NavHeader.UserButton
                as={Dropdown.Toggle}
                name={navn}
                description={enhet ? `Enhet: ${enhet}` : 'Ukjent enhet'}
                className="ml-auto"
            />
            {popoverItems && (
                <Dropdown.Menu>
                    <Dropdown.Menu.List>
                        {popoverItems.map((lenke, index) => {
                            return <DropdownLenke key={index} lenke={lenke} />;
                        })}
                    </Dropdown.Menu.List>
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
};

export const LenkePopover = ({ lenker }: LenkePopoverProps) => {
    return (
        <Dropdown>
            <NavHeader.Button as={Dropdown.Toggle} className="ml-auto">
                <MenuGridIcon
                    fr="mask"
                    style={{ fontSize: '1.5rem' }}
                    title="Andre systemer"
                    onResize={undefined}
                    onResizeCapture={undefined}
                />
            </NavHeader.Button>
            {lenker && (
                <Dropdown.Menu>
                    <Dropdown.Menu.List>
                        {lenker.map((lenke, index) => {
                            return <DropdownLenke lenke={lenke} key={index} />;
                        })}
                    </Dropdown.Menu.List>
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
};

const DropdownLenke: React.FC<{ lenke: PopoverItem }> = ({ lenke }) => {
    return (
        <a
            href={lenke.href}
            target={lenke.isExternal ? '_blank' : ''}
            rel={lenke.isExternal ? 'noopener noreferrer' : ''}
            onClick={e => lenke?.onClick && lenke?.onClick(e)}
        >
            <Dropdown.Menu.List.Item>{lenke.name}</Dropdown.Menu.List.Item>
        </a>
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
        <NavHeader data-theme={''}>
            {!tittelOnClick && <NavHeader.Title href={tittelHref}>{tittel}</NavHeader.Title>}
            {tittelOnClick && (
                <NavHeader.Title onClick={tittelOnClick} style={{ cursor: 'pointer' }}>
                    {tittel}
                </NavHeader.Title>
            )}
            <div style={{ marginLeft: 'auto' }} />
            {children}
            {eksterneLenker.length > 0 && <LenkePopover lenker={eksterneLenker} />}
            <Bruker
                navn={brukerinfo.navn}
                enhet={brukerinfo.enhet}
                popoverItems={brukerPopoverItems}
            />
        </NavHeader>
    );
};
