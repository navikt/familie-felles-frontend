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

const håndterGenerellFeil = (req: Request, err: Error) => {
    logRequest(req, `Noe gikk galt: ${err.message}.`, LOG_LEVEL.ERROR);

    throw new Error('Noe gikk galt ved pålogging i løsningen. Vennligst prøv på nytt.');
};
const håndterBrukerdataFeil = (req: Request, err: Error) => {
    logRequest(
        req,
        `Feilet mot ms graph: ${err.message}. Kan ikke fortsette uten brukerdata.`,
        LOG_LEVEL.ERROR,
    );
    if (req.session) {
        throw new Error('Noe gikk galt ved pålogging i løsningen. Vennligst prøv på nytt.');
    } else {
        throw new Error(
            'Kunne ikke hente dine brukeropplysninger. Vennligst logg ut og inn på nytt.',
        );
    }
};

const fetchFraMs = (accessToken: string) => {
    const query = 'onPremisesSamAccountName,displayName,mail,officeLocation,userPrincipalName,id';
    const graphUrl = `${envVar('GRAPH_API')}?$select=${query}`;

    return fetch(graphUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });
};
const hentBrukerData = (accessToken: string, req: Request) => {
    return fetchFraMs(accessToken).catch((e: Error) => {
        logRequest(req, `Kunne ikke hente brukerdata - prøver på nytt: ${e}`, LOG_LEVEL.WARNING);
        return fetchFraMs(accessToken).catch((err: Error) => håndterBrukerdataFeil(req, err));
    });
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

        getOnBehalfOfAccessToken(authClient, req, api)
            .then(accessToken => hentBrukerData(accessToken, req))
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
                return håndterGenerellFeil(req, err);
            });
    });
};
