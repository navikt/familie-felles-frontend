import express, { NextFunction, Response } from 'express';
import {
    authenticateAzure,
    authenticateAzureCallback,
    ensureAuthenticated,
    logout,
} from './auth/authenticate';
import { hentBrukerprofil } from './auth/bruker';
import { ITokenRequest, SessionRequest } from './typer';

const router = express.Router();

export default (saksbehandlerTokenConfig: ITokenRequest) => {
    // Authentication
    router.get('/login', (req: SessionRequest, res: Response, next: NextFunction) => {
        authenticateAzure(req, res, next);
    });
    router.post('/auth/openid/callback', authenticateAzureCallback());
    router.get('/auth/logout', (req: SessionRequest, res: Response) =>
        logout(req, res, saksbehandlerTokenConfig.redirectUrl),
    );

    // User
    router.get(
        '/user/profile',
        ensureAuthenticated(true, saksbehandlerTokenConfig),
        hentBrukerprofil(),
    );

    return router;
};
