import './Header.less';
import React from 'react';
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
}
interface BrukerProps {
    navn: string;
    enhet?: string;
    popoverItems?: PopoverItem[];
}
interface LenkePopoverProps {
    lenker: PopoverItem[];
}
export declare const Bruker: {
    ({ navn, enhet, popoverItems }: BrukerProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            navn: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            enhet: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            popoverItems: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LenkePopover: {
    ({ lenker }: LenkePopoverProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            lenker: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Header: {
    ({ tittel, children, brukerinfo, tittelHref, brukerPopoverItems, eksterneLenker, }: HeaderProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            tittel: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            brukerinfo: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            tittelHref: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            brukerPopoverItems: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            eksterneLenker: {
                defaultValue: {
                    value: string;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export {};
