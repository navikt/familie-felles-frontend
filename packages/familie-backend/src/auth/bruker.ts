import { NextFunction, Request, Response } from 'express';
import request from 'request-promise';
import { LOG_LEVEL, logRequest } from '../logging';
import { Client } from 'openid-client';
import { getOnBehalfOfAccessToken } from './utils';
import { IApi } from '../typer';

// Hent brukerprofil
export const hentBrukerprofil = () => {
    return async (req: Request, res: Response) => {
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        const user = {
            displayName: req.session.displayName,
            email: req.session.upn,
            enhet: req.session.enhet,
            groups: req.session.groups,
            identifier: req.session.upn,
        };
        res.status(200).send(user);
    };
};

// Hent brukerenhet
export const hentBrukerenhet = (authClient: Client, saksbehandlerConfig: IApi) => {
    return async (req: Request, _: Response, next: NextFunction) => {
        const ukjentEnhet = '9999';

        const msGraphMeUrl = `https://graph.microsoft.com/v1.0/me`;
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        if (req.session.enhet) {
            logRequest(req, 'Gyldig enhet i session', LOG_LEVEL.INFO);
            return next();
        }

        logRequest(req, 'Enhet ikke i session, henter fra ' + msGraphMeUrl, LOG_LEVEL.INFO);

        const obotoken = await getOnBehalfOfAccessToken(authClient, req, {
            clientId: saksbehandlerConfig.clientId,
            scopes: [`https://graph.microsoft.com/.default`],
        });

        request
            .get(
                {
                    headers: {
                        Authorization: 'Bearer ' + obotoken,
                    },
                    url: msGraphMeUrl,
                },
                (_err, _httpResponse, body) => {
                    return body;
                },
            )
            .then(result => {
                let officeLocation = JSON.parse(result)?.officeLocation;
                if (!officeLocation || !/^\d{4}\s+\S+.*$/.test(officeLocation)) {
                    logRequest(
                        req,
                        'officeLocation ikke funnet fra Microsoft Graph, eller formatet er uventet: ' +
                            officeLocation,
                        LOG_LEVEL.ERROR,
                    );
                    officeLocation = ukjentEnhet;
                }

                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.enhet = officeLocation.slice(0, 4);
                return next();
            })
            .catch(err => {
                logRequest(req, `Feilet ved hent enhet: ${err}`, LOG_LEVEL.ERROR);
                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.enhet = ukjentEnhet;

                return next();
            });
    };
};
