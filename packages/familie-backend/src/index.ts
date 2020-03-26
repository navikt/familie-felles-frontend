import express, { Express, Request, Response, Router } from 'express';
import passport from 'passport';
import { Counter, Registry } from 'prom-client';
import konfigurerPassport from './auth/azure/passport';
import konfigurerSession from './auth/session';
import headers from './headers';
import { konfigurerMetrikker } from './metrikker';
import konfigurerRouter from './router';
import { ISessionKonfigurasjon } from './typer';
import { Client } from 'openid-client';
import { error } from './logging';

export * from './auth/authenticate';
export * from './auth/utils';
export * from './config';
export * from './logging';
export * from './typer';
export * from 'openid-client';
export * from 'prom-client';

export interface IApp {
    app: Express;
    azureAuthClient: Client;
    router: Router;
    prometheusRegistry: Registry;
}

export default async (
    sessionKonfigurasjon: ISessionKonfigurasjon,
    prometheusTellere?: { [key: string]: Counter },
): Promise<IApp> => {
    const app = express();
    let azureAuthClient!: Client;
    let router: Router;
    let prometheusRegistry: Registry;

    headers.setup(app);

    app.get('/isAlive', (_req: Request, res: Response) => res.status(200).end());
    app.get('/isReady', (_req: Request, res: Response) => res.status(200).end());

    konfigurerSession(app, passport, sessionKonfigurasjon);

    return konfigurerPassport(passport)
        .then((authClient: Client) => {
            azureAuthClient = authClient;

            prometheusRegistry = konfigurerMetrikker(app, prometheusTellere);
            router = konfigurerRouter(azureAuthClient, prometheusTellere);

            return {
                app,
                azureAuthClient,
                router,
                prometheusRegistry,
            };
        })
        .catch((err: Error) => {
            error('Feil ved konfigurasjon av azure', err);
            process.exit(1);
        });
};
