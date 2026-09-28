import { LOG_LEVEL, logError, logInfo } from '@navikt/familie-logging';
import type { Request } from 'express';
import * as client from 'openid-client';
import type { IApi } from '../typer';
import { logRequest } from '../utils';

export const tokenSetSelfId = 'self';

/**
 * Serialiserbar versjon av tokenresponsen som lagres på sesjonen.
 * `expires_at` (sekunder siden epoch) er med for å kunne avgjøre om tokenet er utløpt etter deserialisering.
 */
export type LagretTokenSet = client.TokenEndpointResponse & { expires_at?: number };

export const tilLagretTokenSet = (
    tokens: client.TokenEndpointResponse & client.TokenEndpointResponseHelpers,
): LagretTokenSet => {
    const expiresIn = tokens.expiresIn();
    return {
        // Hjelpefunksjonene (claims, expiresIn) er ikke-enumerable og blir derfor ikke med her
        ...(tokens as client.TokenEndpointResponse),
        expires_at: expiresIn !== undefined ? Math.floor(Date.now() / 1000) + expiresIn : undefined,
    };
};

/**
 * Dekoder claims fra id_token uten validering (tilsvarer `TokenSet.claims()` i openid-client v5).
 */
export const hentClaims = (tokenSet?: LagretTokenSet): client.IDToken | undefined => {
    const payload = tokenSet?.id_token?.split('.')[1];
    if (!payload) {
        return undefined;
    }
    return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
};

export interface UtledAccessTokenProps {
    authClient: client.Configuration;
    req: Request;
    api: IApi;
    promise: {
        resolve: (value: string) => void;
        reject: (reason: string | Error) => void;
    };
}

const utledAccessToken = (props: UtledAccessTokenProps, retryCount: number) => {
    const { authClient: authConfig, req, api, promise } = props;
    client
        .genericGrantRequest(authConfig, 'urn:ietf:params:oauth:grant-type:jwt-bearer', {
            assertion: req.session.passport.user.tokenSets[tokenSetSelfId].access_token,
            requested_token_use: 'on_behalf_of',
            scope: createOnBehalfOfScope(api),
        })
        .then(tokens => {
            if (!req.session) {
                throw Error('Mangler session på request.');
            }

            const tokenSet = tilLagretTokenSet(tokens);
            req.session.passport.user.tokenSets[api.clientId] = tokenSet;

            if (tokenSet.access_token) {
                promise.resolve(tokenSet.access_token);
            } else {
                promise.reject('Token ikke tilgjengelig');
            }
        })
        .catch((err: Error) => {
            const message = err.message;
            if (
                (err instanceof client.ResponseBodyError && err.error === 'invalid_grant') ||
                message.includes('invalid_grant')
            ) {
                logInfo(`Bruker har ikke tilgang: ${message}`);
                promise.reject(err);
            } else if (retryCount > 0) {
                logInfo(`Kjører retry for uthenting av access token: ${message}`);
                utledAccessToken(props, retryCount - 1);
            } else {
                logError('Feil ved henting av obo token', err);
                promise.reject(err);
            }
        });
};

export const getOnBehalfOfAccessToken = (
    authConfig: client.Configuration,
    req: Request,
    api: IApi,
): Promise<string> => {
    const retryCount = 1;
    return new Promise((resolve, reject) => {
        if (hasValidAccessToken(req, api.clientId)) {
            const tokenSets = getTokenSetsFromSession(req);
            resolve(tokenSets?.[api.clientId]?.access_token ?? '');
        } else {
            if (!req.session) {
                throw Error('Session på request mangler.');
            }
            utledAccessToken({ authClient: authConfig, req, api, promise: { resolve, reject } }, retryCount);
        }
    });
};

export const appendDefaultScope = (scope: string) => `${scope}/.default`;

const formatClientIdScopeForV2Clients = (clientId: string) => appendDefaultScope(`api://${clientId}`);

const createOnBehalfOfScope = (api: IApi) => {
    if (api.scopes && api.scopes.length > 0) {
        return `${api.scopes.join(' ')}`;
    } else {
        return `${formatClientIdScopeForV2Clients(api.clientId)}`;
    }
};

export const getTokenSetsFromSession = (req: Request): Record<string, LagretTokenSet> | undefined => {
    if (req?.session?.passport) {
        return req.session.passport.user.tokenSets;
    }

    return undefined;
};

const loggOgReturnerOmTokenErGyldig = (req: Request, key: string, validAccessToken: boolean) => {
    logRequest(req, `Har ${validAccessToken ? 'gyldig' : 'ikke gyldig'} token for key '${key}'`, LOG_LEVEL.INFO);
    return validAccessToken;
};

export const hasValidAccessToken = (req: Request, key = tokenSetSelfId) => {
    const tokenSets = getTokenSetsFromSession(req);
    if (!tokenSets) {
        return loggOgReturnerOmTokenErGyldig(req, key, false);
    }
    const tokenSet = tokenSets[key];
    if (!tokenSet) {
        return loggOgReturnerOmTokenErGyldig(req, key, false);
    }
    return loggOgReturnerOmTokenErGyldig(req, key, erUtgått(tokenSet) === false);
};

// kallkjedene kan ta litt tid, og tokenet kan i corner-case gå ut i løpet av kjeden. Så innfører et buffer
// på 2 minutter.
const erUtgått = (tokenSet: LagretTokenSet): boolean =>
    tokenSet.expires_at !== undefined && tokenSet.expires_at - Math.floor(Date.now() / 1000) < 120;
