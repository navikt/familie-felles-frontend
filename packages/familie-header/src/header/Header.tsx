import './Header.less';

import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import React from 'react';

import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import UserPanel from '@navikt/nap-user-panel';

import { IkonSystem } from '../icons';

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
    eksterneLenker?: PopoverItem[];
}

interface BrukerProps {
    navn: string;
    popoverItems?: PopoverItem[];
}
interface LenkePopoverProps {
    lenker?: PopoverItem[];
}

export const Bruker = ({ navn, popoverItems }: BrukerProps) => {
    const [anker, settAnker] = React.useState<HTMLElement | undefined>(undefined);

    return (
        <div>
            <UserPanel
                name={navn}
                onClick={(e) => {
                    settAnker(anker === undefined ? e.currentTarget : undefined);
                }}
            />
            {popoverItems &&
                <Popover
                    id={'this'}
                    ankerEl={anker}
                    orientering={PopoverOrientering.Under}
                    autoFokus={false}
                    onRequestClose={() => { settAnker(undefined); }}
                    tabIndex={-1}
                    utenPil
                >
                    <BoxedListWithLinks
                        items={popoverItems!}
                    />
                </Popover>
            }
        </div>
    );
};

export const LenkePopover = ({ lenker }: LenkePopoverProps) => {
    const [anker, settAnker] = React.useState<HTMLElement | undefined>(undefined);

    return (
        <div>
            <button className='systemknapp' onClick={(e) => {
                settAnker(anker === undefined ? e.currentTarget : undefined);
            }}>
                <IkonSystem/>
            </button>
            {lenker &&
                <Popover
                    id={'this'}
                    ankerEl={anker}
                    orientering={PopoverOrientering.UnderHoyre}
                    autoFokus={false}
                    onRequestClose={() => { settAnker(undefined); }}
                    tabIndex={-1}
                >
                    <BoxedListWithLinks
                        items={lenker || []}
                    />
                </Popover>
            }
        </div>
    );
};

export const Header = ({ tittel, children, brukerinfo, tittelHref = '/', brukerPopoverItems, eksterneLenker }: HeaderProps) => {
    return (
        <div className='header'>
            <div className='rad'>
                <h1 className='tittel'>
                    <a href={tittelHref}>{tittel}</a>
                </h1>
            </div>
            <div className='rad'>
                {children}
                <LenkePopover lenker={eksterneLenker} />
                <div className='avdeler' />
                <Bruker navn={brukerinfo.navn} popoverItems={brukerPopoverItems} />
            </div>
        </div>
    );
};
