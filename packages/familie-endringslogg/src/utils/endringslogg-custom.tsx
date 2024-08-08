import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlockContentType = any;
export type ModalType = {
    header?: string;
    slides: Step[];
};

type Step = {
    slideHeader: string;
    slideDescription?: BlockContentType;
    altText?: string;
    slideImageRef?: string;
};
export interface EndringsloggEntry {
    title: string;
    _id: string;
    description?: BlockContentType;
    linkAttributes?: string[];
    date?: string;
    linkText?: string;
    link?: string;
    children?: React.ReactNode;
    featureToggleName?: string;
    modal?: ModalType;
    forced: boolean;
}

export interface EndringsloggEntryWithSeenStatus extends EndringsloggEntry {
    seen: boolean;
    seenForced: boolean;
}

export const setAllEntriesSeen = (endringsloggEntries: EndringsloggEntryWithSeenStatus[]) =>
    endringsloggEntries.map(el => {
        return { ...el, seen: true };
    });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapRemoteToState = (remotestorage: any[]): EndringsloggEntryWithSeenStatus[] =>
    remotestorage
        .map(endring => {
            return {
                title: endring?.title,
                _id: endring._id,
                description: endring?.description,
                modal: endring?.modal,
                linkText: endring.linkAttributes?.linkText,
                link: endring.linkAttributes?.link,
                date: endring?.date,
                seen: endring?.seen,
                forced: endring?.forcedModal,
                seenForced: endring.seenForced,
            };
        })
        .sort((a, b) => (a?.date > b?.date ? -1 : 1));
