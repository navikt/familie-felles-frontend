import { NextFunction, Response } from 'express';
import passport from 'passport';
import { logError } from '../customLoglevel';
import { ITokenRequest, SessionRequest } from '../typer';
import { validerEllerOppdaterAccessToken } from './token';

export const authenticateAzure = (req: SessionRequest, res: Response, next: NextFunction) => {
    const regex: RegExpExecArray | null = /redirectUrl=(.*)/.exec(req.url);
    const redirectUrl = regex ? regex[1] : 'invalid';

    const successRedirect = regex ? redirectUrl : '/';

    req.session.redirectUrl = successRedirect;
    try {
        passport.authenticate('azuread-openidconnect', {
            failureRedirect: '/error',
            successRedirect,
        })(req, res, next);
    } catch (err) {
        throw new Error(`Error during authentication: ${err}`);
    }
};

export const authenticateAzureCallback = () => {
    return (req: SessionRequest, res: Response, next: NextFunction) => {
        try {
            passport.authenticate('azuread-openidconnect', {
                failureRedirect: '/error',
                successRedirect: req.session.redirectUrl || '/',
            })(req, res, next);
        } catch (err) {
            throw new Error(`Error during authentication: ${err}`);
        }
    };
};

export const ensureAuthenticated = (
    sendUnauthorized: boolean,
    saksbehandlerTokenConfig: ITokenRequest,
) => {
    return async (req: SessionRequest, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            validerEllerOppdaterAccessToken(req, saksbehandlerTokenConfig).catch((error: Error) => {
                logError(req, `Feil ved henting av accessToken: ${error.message}`);
                res.status(500).send(`Feil ved autentisering`);
            });
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

export const logout = (req: SessionRequest, res: Response, logoutUri: string) => {
    res.redirect(logoutUri);
    req.session.destroy((error: Error) => {
        if (error) {
            logError(req, `error during logout: ${error}`);
        }
    });
};
