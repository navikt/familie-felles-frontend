import { NextFunction, Request, Response } from 'express';
import { Client } from 'openid-client';
import passport from 'passport';
import { appConfig } from '../config';
import { LOG_LEVEL, logRequest } from '../logging';
import { getOnBehalfOfAccessToken, hasValidAccessToken } from './utils';
import { IApi } from '../typer';

export const authenticateAzure = (req: Request, res: Response, next: NextFunction) => {
    const regex: RegExpExecArray | null = /redirectUrl=(.*)/.exec(req.url);
    const redirectUrl = regex ? regex[1] : 'invalid';

    const successRedirect = regex ? redirectUrl : '/';

    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

    req.session.redirectUrl = successRedirect;
    try {
        passport.authenticate('azureOidc', {
            failureRedirect: '/error',
            successRedirect,
        })(req, res, next);
    } catch (err) {
        throw new Error(`Error during authentication: ${err}`);
    }
};

export const authenticateAzureCallback = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.session) {
                throw new Error('Mangler sesjon på kall');
            }

            console.log('authenticateAzureCallback');

            passport.authenticate('azureOidc', {
                failureRedirect: '/error',
                successRedirect: req.session.redirectUrl || '/',
            })(req, res, next);
        } catch (err) {
            throw new Error(`Error during authentication: ${err}`);
        }
    };
};

export const ensureAuthenticated = (
    authClient: Client,
    sendUnauthorized: boolean,
    saksbehandlerConfig: IApi,
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.isAuthenticated(), hasValidAccessToken(req));
        if (req.isAuthenticated() && hasValidAccessToken(req)) {
            await getOnBehalfOfAccessToken(authClient, req, saksbehandlerConfig).catch(
                (error: Error) => {
                    logRequest(
                        req,
                        `Feil ved henting av accessToken: ${error.message}`,
                        LOG_LEVEL.ERROR,
                    );
                    res.status(500).send(`Feil ved autentisering`);
                },
            );
            return next();
        }

        const pathname = req.originalUrl;
        if (sendUnauthorized) {
            res.status(401).send('Unauthorized');
        } else {
            res.redirect(`/login?redirectUrl=${pathname}`);
        }
    };
};

export const logout = (req: Request, res: Response) => {
    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

    res.redirect(appConfig.logoutRedirectUri);
    req.session.destroy((error: Error) => {
        if (error) {
            logRequest(req, `error during logout: ${error}`, LOG_LEVEL.ERROR);
        }
    });
};
