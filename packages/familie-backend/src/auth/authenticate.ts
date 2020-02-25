import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { logError } from '../customLoglevel';
import { ITokenRequest } from '../typer';
import { validerEllerOppdaterAccessToken, validerEllerOppdaterOnBehalfOfToken } from './token';

export const authenticateAzure = (req: Request, res: Response, next: NextFunction) => {
    const regex: RegExpExecArray | null = /redirectUrl=(.*)/.exec(req.url);
    const redirectUrl = regex ? regex[1] : 'invalid';

    const successRedirect = regex ? redirectUrl : '/';

    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

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
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.session) {
                throw new Error('Mangler sesjon på kall');
            }

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
    return async (req: Request, res: Response, next: NextFunction) => {
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

export const ensureOBOAccessTokenValid=(
    saksbehandlerTokenConfig: ITokenRequest,
    oboTokenConfig?: ITokenRequest,
)=>{
    return async(req: Request, res: Response, next: NextFunction) =>{
        if(!oboTokenConfig){
            logError(req, `Feil ved henting av OBO access token: mangler obo token kongigurasjon`);
            res.status(401).send(`Feil ved autentisering`);
            return;
        }

        await validerEllerOppdaterOnBehalfOfToken(req, saksbehandlerTokenConfig, oboTokenConfig!).catch((error: Error)=>{
            logError(req, `Feil ved henting av OBO access token: ${error.message}`);
            res.status(500).send(`Feil ved autentisering`);
        })
        return next();
    }
}

export const logout = (req: Request, res: Response, logoutUri: string) => {
    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

    res.redirect(logoutUri);
    req.session.destroy((error: Error) => {
        if (error) {
            logError(req, `error during logout: ${error}`);
        }
    });
};
