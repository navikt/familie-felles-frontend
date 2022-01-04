import { EndringsloggContainer } from "./endringslogg-container";
import React, { useEffect, useState } from "react";
import {
    EndringsloggEntryWithSeenStatus,
    mapRemoteToState,
    setAllEntriesSeen,
} from "./utils/endringslogg-custom";
import {
    hentEndringsLoggEntries,
    trackSeenStatus,
    trackSessionDuration,
    trackSeenForcedModal,
    setBackendUrl,
} from "./utils/utils";
import { useTimer } from "./hooks/use-timer";
import TourModal from "./modal/tour-modal/tour-modal";
import { StilType } from './icons/endringslogg-icon';

const DEFAULT_MAX_ENTRIES = 50;
export interface EndringsloggProps {
    userId: string;
    appId: string;
    backendUrl: string;
    stil?: StilType;
    dataset?: string;
    maxEntries?: number;
    appName?: string;
    alignLeft?: boolean;
    localData?: EndringsloggEntryWithSeenStatus[];
}

const Endringslogg = (props: EndringsloggProps) => {
    const { startTimer, stopTimer } = useTimer();
    const [endringsloggEntries, setEndringsloggEntries] = useState<
        EndringsloggEntryWithSeenStatus[]
        >([]);
    const [forcedEndringsloggEntries, setForcedEndringsloggEntries] = useState<
        EndringsloggEntryWithSeenStatus[]
        >([]);

    useEffect(() => {
        if (!props.localData) {
            setBackendUrl(props.backendUrl);
            hentEndringsLoggEntries(
                props.userId,
                props.appId,
                props.dataset || "production",
                props.maxEntries || DEFAULT_MAX_ENTRIES
            ).then((response) =>
                response
                    .json()
                    .then((jsonResponse: any) => {
                        const entries = mapRemoteToState(jsonResponse);
                        setEndringsloggEntries(entries);
                        setForcedEndringsloggEntries(
                            entries.filter((entry) => entry.forced && !entry.seenForced)
                        );
                    })
                    .catch(() => {
                        // TODO: Kunne ikke hente endringslogg som melding i boksen?
                        // console.error("Could not get endringslogg");
                    })
            );
        } else {
            setEndringsloggEntries(props.localData);
            setForcedEndringsloggEntries(
                endringsloggEntries.filter((entry) => entry.forced && !entry.seenForced)
            );
        }
    }, [props.appId]);

    const onClose = () => {
        const ulesteFelter = endringsloggEntries.filter(
            (endringsloggEntry) => !endringsloggEntry.seen
        );
        trackSessionDuration(
            props.userId,
            props.appId,
            stopTimer(),
            ulesteFelter.length
        );
        if (ulesteFelter.length > 0) {
            const newList = setAllEntriesSeen(endringsloggEntries);
            setEndringsloggEntries(newList);
        }
    };

    const onOpen = () => {
        startTimer();
        const ulesteFelter = endringsloggEntries.filter(
            (endringsloggEntry) => !endringsloggEntry.seen
        );
        if (ulesteFelter.length > 0) {
            trackSeenStatus(
                props.userId,
                props.appId,
                ulesteFelter.map((entry) => entry._id)
            );
        }
    };

    const onCloseForcedModal = () => {
        trackSeenForcedModal(props.userId, [
            forcedEndringsloggEntries[forcedEndringsloggEntries.length - 1]._id,
        ]);
        setForcedEndringsloggEntries(forcedEndringsloggEntries.slice(0, -1));
    };

    return (
        <>
            <EndringsloggContainer
                content={endringsloggEntries}
                onClose={onClose}
                onOpen={onOpen}
                stil={props.stil}
                userId={props.userId}
                appId={props.appId}
                appName={props.appName || props.appId}
                alignLeft={props.alignLeft}
            />
            {forcedEndringsloggEntries.length > 0 && (
                <TourModal
                    open={true}
                    modal={
                        forcedEndringsloggEntries[forcedEndringsloggEntries.length - 1]
                            .modal!
                    }
                    onClose={() => onCloseForcedModal()}
                />
            )}
        </>
    );
};

export default Endringslogg;
