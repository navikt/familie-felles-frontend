import express, { NextFunction, Request, Response } from 'express';
import { Client } from 'openid-client';
import { Counter } from 'prom-client';
import {
    authenticateAzure,
    authenticateAzureCallback,
    ensureAuthenticated,
    logout,
} from './auth/authenticate';
import { hentBrukerenhet, hentBrukerprofil } from './auth/bruker';
import { IApi } from './typer';

const router = express.Router();

export default (
    authClient: Client,
    saksbehandlerConfig: IApi,
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
    router.get('/auth/logout', (req: Request, res: Response) => logout(req, res));

    // Bruker
    router.get(
        '/user/profile',
        ensureAuthenticated(authClient, true, saksbehandlerConfig),
        hentBrukerenhet(authClient, saksbehandlerConfig),
        hentBrukerprofil(),
    );

    return router;
};
