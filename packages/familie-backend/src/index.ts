import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '/var/run/secrets/nais.io/vault/.env' });
} else {
    dotenv.config();
}

import express, { Express, Request, Response, Router } from 'express';
import passport from 'passport';
import { IOIDCStrategyOptionWithRequest } from 'passport-azure-ad';
import { Counter, Registry } from 'prom-client';
import { ensureAuthenticated } from './auth/authenticate';
import konfigurerPassport from './auth/passport';
import konfigurerSession from './auth/session';
import { validerEllerOppdaterOnBehalfOfToken } from './auth/token';
import headers from './headers';
import { konfigurerMetrikker } from './metrikker';
import konfigurerRouter from './router';
import { ISessionKonfigurasjon, ITokenRequest } from './typer';

export * from './logging';

class Backend {
    private app: Express;
    private router: Router;
    private prometheusRegistry: Registry;

    constructor(
        passportConfig: IOIDCStrategyOptionWithRequest,
        sessionKonfigurasjon: ISessionKonfigurasjon,
        saksbehandlerTokenConfig: ITokenRequest,
        prometheusTellere?: { [key: string]: Counter },
    ) {
        konfigurerPassport(passport, passportConfig);

        this.app = express();
        headers.setup(this.app);

        this.app.get('/isAlive', (_req: Request, res: Response) => res.status(200).end());
        this.app.get('/isReady', (_req: Request, res: Response) => res.status(200).end());

        this.prometheusRegistry = konfigurerMetrikker(this.app, prometheusTellere);

        konfigurerSession(this.app, passport, sessionKonfigurasjon);

        this.router = konfigurerRouter(saksbehandlerTokenConfig, prometheusTellere);
    }

    // Express
    public getApp = () => {
        return this.app;
    };

    public getRouter = () => {
        return this.router;
    };

    // Metrics
    public getPrometheusRegistry = () => {
        return this.prometheusRegistry;
    };

    // Azure
    public ensureAuthenticated = (
        sendUnauthorized: boolean,
        saksbehandlerTokenConfig: ITokenRequest,
    ) => {
        return ensureAuthenticated(sendUnauthorized, saksbehandlerTokenConfig);
    };

    public validerEllerOppdaterOnBehalfOfToken = (
        req: Request,
        saksbehandlerTokenConfig: ITokenRequest,
        oboTokenConfig: ITokenRequest,
    ) => {
        return validerEllerOppdaterOnBehalfOfToken(req, saksbehandlerTokenConfig, oboTokenConfig);
    };
}

export default Backend;
