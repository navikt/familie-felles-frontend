let backendUrl: string | undefined;
export const setBackendUrl = (url: string) => (backendUrl = url);

export const hentEndringsLoggEntries = async (
    userId: string,
    appId: string,
    dataset: string,
    maxEntries: number,
): Promise<Response> =>
    fetch(`${backendUrl}/endringslogg/text`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, appId, dataset, maxEntries }),
    });

export const hentEndringsloggSlideImage = async (
    slideImageRef: string,
    dataset: string,
): Promise<Response> =>
    fetch(`${backendUrl}/endringslogg/image`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slideImageRef, dataset }),
    });

export const trackSeenStatus = async (
    userId: string,
    appId: string,
    documentIds: string[],
): Promise<Response> =>
    fetch(`${backendUrl}/analytics/sett-endringer`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, appId, documentIds }),
    });

export const trackSeenForcedModal = async (
    userId: string,
    documentIds: string[],
): Promise<Response> =>
    fetch(`${backendUrl}/analytics/seen-forced-modal`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, documentIds }),
    });
