import { Request } from 'express';
import { Client, TokenSet } from 'openid-client';
import { error, logRequest, LOG_LEVEL } from '../logging';
import { IApi } from '../typer';

export const tokenSetSelfId = 'self';

export const getOnBehalfOfAccessToken = (
    authClient: Client,
    req: Request,
    api: IApi,
): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (hasValidAccessToken(req, api.clientId)) {
            const tokenSets = getTokenSetsFromSession(req);
            resolve(tokenSets[api.clientId].access_token);
        } else {
            if (!req.session) {
                throw Error('Mangler session på request.');
            }

            authClient
                .grant({
                    assertion: req.session.passport.user.tokenSets[tokenSetSelfId].access_token,
                    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    requested_token_use: 'on_behalf_of',
                    scope: createOnBehalfOfScope(api),
                })
                .then((tokenSet: TokenSet) => {
                    if (!req.session) {
                        throw Error('Mangler session på request.');
                    }

                    req.session.passport.user.tokenSets[api.clientId] = tokenSet;
                    resolve(tokenSet.access_token);
                })
                .catch((err: Error) => {
                    error('Feil ved henting av obo token', err);
                    reject(err);
                });
        }
    });
};

export const appendDefaultScope = (scope: string) => `${scope}/.default`;

const formatClientIdScopeForV2Clients = (clientId: string) =>
    appendDefaultScope(`api://${clientId}`);

const createOnBehalfOfScope = (api: IApi) => {
    if (api.scopes && api.scopes.length > 0) {
        return `${api.scopes.join(' ')}`;
    } else {
        return `${formatClientIdScopeForV2Clients(api.clientId)}`;
    }
};

const getTokenSetsFromSession = (req: Request) => {
    if (req && req.session && req.session.passport) {
        return req.session.passport.user.tokenSets;
    }

    return undefined;
};

const loggOgReturnerOmTokenErGyldig = (req: Request, key: string, validAccessToken: boolean) => {
    logRequest(
        req,
        `Har ${validAccessToken ? 'gyldig' : 'ikke gyldig'} token for key '${key}'`,
        LOG_LEVEL.INFO,
    );
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
    return loggOgReturnerOmTokenErGyldig(req, key, new TokenSet(tokenSet).expired() === false);
};
