import React from 'react';
import '@navikt/ds-css';
import { ActionMenu, InternalHeader as NavHeader } from '@navikt/ds-react';
import { MenuGridIcon } from '@navikt/aksel-icons';
import { EksternLinkIkon } from '@navikt/familie-ikoner';

export interface Brukerinfo {
    navn: string;
    enhet?: string;
}

export type PopoverItem =
    | {
          name: string;
          href: string;
          isExternal?: boolean;
          onSelect?: never;
      }
    | { name: string; href?: never; isExternal?: never; onSelect: (e: Event) => void };

export interface HeaderProps {
    tittel: string;
    brukerinfo: Brukerinfo;
    tittelHref?: string;
    children?: React.ReactNode | React.ReactNode[];
    brukerPopoverDetail?: React.ReactNode;
    brukerPopoverItems?: PopoverItem[];
    eksterneLenker: PopoverItem[];
    tittelOnClick?: () => void;
    skalViseLabelsOgIkonPåLenker?: boolean;
}

interface BrukerProps {
    navn: string;
    enhet?: string;
    popoverDetail?: React.ReactNode;
    popoverItems?: PopoverItem[];
}

interface LenkePopoverProps {
    lenker: PopoverItem[];
}

export const Bruker = ({ navn, enhet, popoverItems, popoverDetail }: BrukerProps) => {
    return (
        <ActionMenu>
            <ActionMenu.Trigger>
                <NavHeader.UserButton
                    name={navn}
                    description={enhet ? `Enhet: ${enhet}` : 'Ukjent enhet'}
                    className="ml-auto"
                />
            </ActionMenu.Trigger>
            {(popoverItems || popoverDetail) && (
                <ActionMenu.Content>
                    {popoverDetail}
                    {popoverDetail && popoverItems && <ActionMenu.Divider />}
                    {popoverItems && (
                        <ActionMenu.Group label={''}>
                            {popoverItems.map((lenke, index) => {
                                return <ActionMenuLenke key={index} lenke={lenke} />;
                            })}
                        </ActionMenu.Group>
                    )}
                </ActionMenu.Content>
            )}
        </ActionMenu>
    );
};

export const LenkePopover = ({ lenker }: LenkePopoverProps) => {
    return (
        <ActionMenu>
            <ActionMenuTrigger />
            {lenker && (
                <ActionMenu.Content>
                    <ActionMenu.Group label={''}>
                        {lenker.map((lenke, index) => {
                            return <ActionMenuLenke lenke={lenke} key={index} />;
                        })}
                    </ActionMenu.Group>
                </ActionMenu.Content>
            )}
        </ActionMenu>
    );
};

const ActionMenuMedLabelOgIkoner: React.FC<{
    lenker: PopoverItem[];
}> = ({ lenker }) => {
    const interneLenker = lenker.filter(lenke => !lenke.isExternal);
    const eksterneLenker = lenker.filter(lenke => lenke.isExternal);
    return (
        <ActionMenu>
            <ActionMenuTrigger />
            {lenker && (
                <ActionMenu.Content>
                    {interneLenker.length > 0 && (
                        <ActionMenu.Group label="">
                            {interneLenker.map((lenke, index) => (
                                <ActionMenuLenke
                                    lenke={lenke}
                                    skalHaIkonPåLenke={true}
                                    key={index}
                                />
                            ))}
                        </ActionMenu.Group>
                    )}
                    {eksterneLenker.length > 0 && (
                        <ActionMenu.Group label="Lenker">
                            {eksterneLenker.map((lenke, index) => (
                                <ActionMenuLenke
                                    lenke={lenke}
                                    skalHaIkonPåLenke={true}
                                    key={index + interneLenker.length}
                                />
                            ))}
                        </ActionMenu.Group>
                    )}
                </ActionMenu.Content>
            )}
        </ActionMenu>
    );
};

const ActionMenuLenke: React.FC<{
    lenke: PopoverItem;
    skalHaIkonPåLenke?: boolean;
}> = ({ lenke, skalHaIkonPåLenke }) =>
    lenke.onSelect ? (
        <ActionMenu.Item onSelect={e => lenke.onSelect && lenke.onSelect(e)}>
            {lenke.name}
        </ActionMenu.Item>
    ) : (
        <ActionMenu.Item
            as={'a'}
            href={lenke.href}
            target={lenke.isExternal ? '_blank' : ''}
            rel={lenke.isExternal ? 'noopener noreferrer' : ''}
        >
            {skalHaIkonPåLenke && lenke.isExternal && <EksternLinkIkon width={16} height={16} />}
            {lenke.name}
        </ActionMenu.Item>
    );

export const Header = ({
    tittel,
    children,
    brukerinfo,
    tittelHref = '/',
    brukerPopoverDetail,
    brukerPopoverItems,
    eksterneLenker = [],
    tittelOnClick,
    skalViseLabelsOgIkonPåLenker: skalViseOverskrifterOgIkonPåLenker,
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
            {eksterneLenker.length > 0 &&
                (skalViseOverskrifterOgIkonPåLenker ? (
                    <ActionMenuMedLabelOgIkoner lenker={eksterneLenker} />
                ) : (
                    <LenkePopover lenker={eksterneLenker} />
                ))}

            <Bruker
                navn={brukerinfo.navn}
                enhet={brukerinfo.enhet}
                popoverDetail={brukerPopoverDetail}
                popoverItems={brukerPopoverItems}
            />
        </NavHeader>
    );
};

const ActionMenuTrigger = () => {
    return (
        <ActionMenu.Trigger>
            <NavHeader.Button className="ml-auto">
                <MenuGridIcon fontSize={'1.5rem'} title="Andre systemer" />
            </NavHeader.Button>
        </ActionMenu.Trigger>
    );
};
