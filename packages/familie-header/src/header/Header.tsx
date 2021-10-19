import './Header.less';

import navFarger from 'nav-frontend-core';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import React from 'react';

import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import UserPanel from '@navikt/nap-user-panel';

import { System } from '@navikt/ds-icons';
import { Systemtittel } from 'nav-frontend-typografi';

export interface Brukerinfo {
    navn: string;
    enhet?: string;
}

export interface PopoverItem {
    name: string;
    href: string;
    isExternal?: boolean;
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
    const [anker, settAnker] = React.useState<HTMLElement | undefined>(undefined);

    return (
        <div>
            <UserPanel
                name={navn}
                unit={enhet ? `Enhet: ${enhet}` : 'Ukjent enhet'}
                onClick={e => {
                    settAnker(anker === undefined ? e.currentTarget : undefined);
                }}
            />
            {popoverItems && (
                <Popover
                    id={'meny-popover'}
                    ankerEl={anker}
                    orientering={PopoverOrientering.Under}
                    autoFokus={false}
                    onRequestClose={() => {
                        settAnker(undefined);
                    }}
                    tabIndex={-1}
                    utenPil
                >
                    <BoxedListWithLinks items={popoverItems} />
                </Popover>
            )}
        </div>
    );
};

export const LenkePopover = ({ lenker }: LenkePopoverProps) => {
    const [anker, settAnker] = React.useState<HTMLElement | undefined>(undefined);

    return (
        <div>
            <button
                title={'Andre systemer'}
                className="systemknapp"
                onClick={e => {
                    settAnker(anker === undefined ? e.currentTarget : undefined);
                }}
            >
                <System color={navFarger.white} />
            </button>
            {lenker && (
                <Popover
                    id={'this'}
                    ankerEl={anker}
                    orientering={PopoverOrientering.UnderHoyre}
                    autoFokus={false}
                    onRequestClose={() => {
                        settAnker(undefined);
                    }}
                    tabIndex={-1}
                >
                    <BoxedListWithLinks items={lenker || []} />
                </Popover>
            )}
        </div>
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
                    <h1 className="tittel" tabIndex={-1}>
                        <Systemtittel onClick={tittelOnClick} tag={'h1'}>
                            {tittel}
                        </Systemtittel>
                    </h1>
                )}
            </div>
            <div className="rad">
                {children}
                <LenkePopover lenker={eksterneLenker} />
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
