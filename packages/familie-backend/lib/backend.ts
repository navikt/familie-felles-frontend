import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '/var/run/secrets/nais.io/vault/.env' });
} else {
    dotenv.config();
}

import passport from 'passport';
import { IOIDCStrategyOptionWithRequest } from 'passport-azure-ad';
import express, { Express, Request, Response, NextFunction } from 'express';
import konfigurerPassport from './auth/passport';
import konfigurerSession from './auth/session';
import { konfigurerMetrikker } from './metrikker';
import { ISessionKonfigurasjon, ITokenRequest, SessionRequest } from './typer';
import {
    ensureAuthenticated,
    authenticateAzure,
    authenticateAzureCallback,
    logout,
} from './auth/authenticate';
import { hentBrukerprofil } from './auth/bruker';
import { validerEllerOppdaterOnBehalfOfToken } from './auth/token';
import { Registry } from 'prom-client';
import { getLogTimestamp } from './customLoglevel';

class Backend {
    app: Express;
    prometheusRegistry: Registry;

    constructor(
        passportConfig: IOIDCStrategyOptionWithRequest,
        sessionKonfigurasjon: ISessionKonfigurasjon,
    ) {
        konfigurerPassport(passport, passportConfig);

        this.app = express();
        this.app.get('/isAlive', (req: Request, res: Response) => res.status(200).end());
        this.app.get('/isReady', (req: Request, res: Response) => res.status(200).end());

        const prometheusRegistry = konfigurerMetrikker();

        konfigurerSession(this.app, passport, sessionKonfigurasjon);
    }

    // Express
    getApp = () => {
        return this.app;
    };

    // Azure
    authenticateAzure = (req: SessionRequest, res: Response, next: NextFunction) => {
        authenticateAzure(req, res, next);
    };

    authenticateAzureCallback = () => {
        return authenticateAzureCallback();
    };

    ensureAuthenticated = (sendUnauthorized: boolean, saksbehandlerTokenConfig: ITokenRequest) => {
        return ensureAuthenticated(sendUnauthorized, saksbehandlerTokenConfig);
    };

    validerEllerOppdaterOnBehalfOfToken = (
        req: SessionRequest,
        saksbehandlerTokenConfig: ITokenRequest,
        oboTokenConfig: ITokenRequest,
    ) => {
        return validerEllerOppdaterOnBehalfOfToken(req, saksbehandlerTokenConfig, oboTokenConfig);
    };

    logout = (req: SessionRequest, res: Response, logoutUri: string) => {
        logout(req, res, logoutUri);
    };

    hentBrukerprofil = () => {
        return hentBrukerprofil();
    };

    // Utils
    getLogTimestamp = () => {
        return getLogTimestamp();
    };
}

export default Backend;
