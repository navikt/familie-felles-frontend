import { Request, Response, NextFunction } from 'express';
import request from 'request-promise';
import { ITokenRequest } from '../typer';
import { hentOnBehalfOfToken } from './token';
import { logInfo, logError } from '../customLoglevel';

// Hent brukerprofil
export const hentBrukerprofil = () => {
    return async (req: Request, res: Response) => {
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        const user = {
            displayName: req.session.displayName,
            email: req.session.upn,
            groups: req.session.groups,
            identifier: req.session.upn,
            enhet: req.session.enhet,
        };
        res.status(200).send(user);
    };
};

// Hent brukerenhet
export const hentBrukerenhet = (saksbehandlerTokenConfig: ITokenRequest) => {

    const msGraphOBOTokenConfig: ITokenRequest = {
        clientId: saksbehandlerTokenConfig.clientId,
        clientSecret: saksbehandlerTokenConfig.clientSecret,
        redirectUrl: saksbehandlerTokenConfig.redirectUrl,
        scope: `https://graph.microsoft.com/.default`,
        tokenUri: saksbehandlerTokenConfig.tokenUri,
    };

    return async (req: Request, _: Response, next: NextFunction) => {
        const ukjentEnhet = "9999";

        const msGraphMeUrl = `https://graph.microsoft.com/v1.0/me`
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        if (req.session.enhet) {
            logInfo(req, "Gyldig enhet i session");
            return next();
        }

        logInfo(req, "Enhet ikke i session, henter fra " + msGraphMeUrl);

        const obotoken = await hentOnBehalfOfToken(req, saksbehandlerTokenConfig, msGraphOBOTokenConfig);

        request
            .get(
                {
                    url: msGraphMeUrl, headers: {
                        Authorization: 'Bearer ' + obotoken,
                    }
                },
                (_err, _httpResponse, body) => {
                    return body;
                },
            )
            .then(result => {
                var officeLocation = JSON.parse(result)?.officeLocation;
                if (!officeLocation || !(/^\d{4}\s+\S+.*$/.test(officeLocation))) {
                    logError(req, 'officeLocation ikke funnet fra Microsoft Graph, eller formatet er uventet: ' + officeLocation);
                    officeLocation = ukjentEnhet;
                }

                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.enhet = officeLocation.slice(0, 4);
                return next();
            })
            .catch(err => {
                logError(req, `Feilet ved hent enhet: ${err}`);
                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.enhet = ukjentEnhet;

                return next();
            });
    };
};