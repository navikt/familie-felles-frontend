import express, { NextFunction, Request, Response } from 'express';
import { Counter } from 'prom-client';
import {
    authenticateAzure,
    authenticateAzureCallback,
    ensureAuthenticated,
    logout,
} from './auth/authenticate';
import { hentBrukerprofil } from './auth/bruker';
import { ITokenRequest } from './typer';

const router = express.Router();

export default (
    saksbehandlerTokenConfig: ITokenRequest,
    prometheusTellere?: { [key: string]: Counter },
) => {
    // Authentication
    router.get('/login', (req: Request, res: Response, next: NextFunction) => {
        if (prometheusTellere && prometheusTellere.login_route) {
            prometheusTellere.login_route.inc();
        }

        authenticateAzure(req, res, next);
    });
    router.get('/auth/openid/callback', authenticateAzureCallback());
    router.get('/auth/logout', (req: Request, res: Response) =>
        logout(req, res, saksbehandlerTokenConfig.redirectUrl),
    );

    // Bruker
    router.get(
        '/user/profile',
        ensureAuthenticated(true, saksbehandlerTokenConfig),
        hentBrukerprofil(),
    );

    return router;
};
