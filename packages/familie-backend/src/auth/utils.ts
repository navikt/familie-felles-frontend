import { Request } from 'express';
import { Client, TokenSet } from 'openid-client';
import { error } from '../logging';
import { IApi } from '../typer';

export const tokenSetSelfId = 'self';

export const getOnBehalfOfAccessToken = (authClient: Client, req: Request, api: IApi) => {
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
                    assertion: req.session.tokenSets[tokenSetSelfId].access_token,
                    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    requested_token_use: 'on_behalf_of',
                    scope: createOnBehalfOfScope(api),
                })
                .then((tokenSet: TokenSet) => {
                    if (!req.session) {
                        throw Error('Mangler session på request.');
                    }

                    req.session.tokenSets[api.clientId] = tokenSet;
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
    if (req && req.session) {
        return req.session.tokenSets;
    }

    return undefined;
};

export const hasValidAccessToken = (req: Request, key = tokenSetSelfId) => {
    const tokenSets = getTokenSetsFromSession(req);
    if (!tokenSets) {
        return false;
    }
    const tokenSet = tokenSets[key];
    if (!tokenSet) {
        return false;
    }
    return new TokenSet(tokenSet).expired() === false;
};
