import { NextFunction, Request, Response } from 'express';
import { Client, TokenSet } from 'openid-client';
import fetch from 'node-fetch';
import { envVar, logRequest } from '../utils';
import { LOG_LEVEL } from '@navikt/familie-logging';
import { getOnBehalfOfAccessToken, getTokenSetsFromSession, tokenSetSelfId } from './tokenUtils';

// Hent brukerprofil fra sesjon
export const hentBrukerprofil = () => {
    return async (req: Request, res: Response) => {
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        res.status(200).send(req.session.user);
    };
};

const håndterFeil = (req: Request, err: Error, next: NextFunction) => {
    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

    req.session.user = {
        ...req.session.user,
        enhet: '9999',
    };

    logRequest(
        req,
        `Feilet mot ms graph: ${err.message}. Fortsetter uten data fra bruker.`,
        LOG_LEVEL.ERROR,
    );
    return next();
};

/**
 * Funksjon som henter brukerprofil fra graph.
 */
export const setBrukerprofilPåSesjon = (authClient: Client, req: Request, next: NextFunction) => {
    return new Promise((_, _reject) => {
        const api = {
            clientId: 'https://graph.microsoft.com',
            scopes: ['https://graph.microsoft.com/.default'],
        };

        if (req.session && req.session.user) {
            return next();
        }

        const query =
            'onPremisesSamAccountName,displayName,mail,officeLocation,userPrincipalName,id';
        const graphUrl = `${envVar('GRAPH_API')}?$select=${query}`;
        getOnBehalfOfAccessToken(authClient, req, api)
            .then(accessToken =>
                fetch(graphUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }),
            )
            .then(res => res.json())
            .then((data: any) => {
                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                const tokenSet: TokenSet | undefined = getTokenSetsFromSession(req)[tokenSetSelfId];

                req.session.user = {
                    displayName: data.displayName,
                    email: data.userPrincipalName,
                    enhet: data.officeLocation.slice(0, 4),
                    identifier: data.userPrincipalName,
                    navIdent: data.onPremisesSamAccountName,
                    groups: tokenSet ? new TokenSet(tokenSet).claims().groups : [],
                };

                req.session.save((error: Error) => {
                    if (error) {
                        logRequest(
                            req,
                            `Feilet ved lagring av bruker på session: ${error}`,
                            LOG_LEVEL.ERROR,
                        );
                    } else {
                        return next();
                    }
                });
            })
            .catch((err: Error) => {
                return håndterFeil(req, err, next);
            });
    });
};
