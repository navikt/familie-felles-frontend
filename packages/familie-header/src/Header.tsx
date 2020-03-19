import './Header.less';

import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import React from 'react';

import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import UserPanel from '@navikt/nap-user-panel';

import IkonSystem from './icons/IkonSystem';

export type Brukerinfo = {
    navn: string;
    enhet: string;
};

export type BrukerPopoverItem = {
    name: string;
    href: string;
}

export interface HeaderProps {
    tittel: string;
    brukerinfo: Brukerinfo;
    tittelHref?: string;
    children?: React.ReactNode | React.ReactNode[];
    brukerPopoverItems?: BrukerPopoverItem[];
}

interface BrukerProps {
    navn: string;
    enhet: string;
    popoverItems?: BrukerPopoverItem[];
}

export const Bruker = ({ navn, enhet, popoverItems }: BrukerProps) => {
    const [ankur, settAnkur]= React.useState<HTMLElement|undefined>(undefined);

    return (
        <div>
            <UserPanel
                name={navn}
                unit={`Enhet: ${enhet}`}
                onClick={(e) => {
                    settAnkur(ankur=== undefined? e.currentTarget: undefined);
                }}
            />
            {popoverItems &&
                <Popover
                    id={'this'}
                    ankerEl= {ankur}
                    orientering= {PopoverOrientering.Under}
                    autoFokus={false}
                    onRequestClose={()=>{settAnkur(undefined);}}
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

const Header = ({ tittel, children, brukerinfo, tittelHref = '/', brukerPopoverItems }: HeaderProps) => {
    return (
        <div className='header'>
            <div className='rad'>
                <h1 className='tittel'>
                    <a href={tittelHref}>{tittel}</a>
                </h1>
                <div className='avdeler' />
            </div>
            <div className='rad'>
                {children}
                <button className='systemknapp'>
                    <IkonSystem />
                </button>
                <div className='avdeler' />
                <Bruker {...brukerinfo} popoverItems={brukerPopoverItems} />
            </div>
        </div>
    );
};

export default Header;
