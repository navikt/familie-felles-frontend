import express, { NextFunction, Response } from 'express';
import { Counter } from 'prom-client';
import {
    authenticateAzure,
    authenticateAzureCallback,
    ensureAuthenticated,
    logout,
} from './auth/authenticate';
import { hentBrukerprofil } from './auth/bruker';
import { ITokenRequest, SessionRequest } from './typer';

const router = express.Router();

export default (
    saksbehandlerTokenConfig: ITokenRequest,
    prometheusTellere?: { [key: string]: Counter },
) => {
    // Authentication
    router.get('/login', (req: SessionRequest, res: Response, next: NextFunction) => {
        if (prometheusTellere && prometheusTellere.login_route) {
            prometheusTellere.login_route.inc();
        }

        authenticateAzure(req, res, next);
    });
    router.post('/auth/openid/callback', authenticateAzureCallback());
    router.get('/auth/logout', (req: SessionRequest, res: Response) =>
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
