import { logError } from '@navikt/familie-logging';
import express, { type Express, type Request, type Response, type Router } from 'express';
import type { Client } from 'openid-client';
import passport from 'passport';
import type { Counter, Registry } from 'prom-client';
import konfigurerPassport from './auth/azure/passport';
import konfigurerSession from './auth/session';
import { settAppConfig } from './config';
import headers from './headers';
import { konfigurerMetrikker } from './metrikker';
import konfigurerRouter from './router';
import type { IAppConfig, ISessionKonfigurasjon } from './typer';
import { hentErforbindelsenTilRedisTilgjengelig } from './utils';

export * from 'openid-client';
export { Counter } from 'prom-client';
export * from './auth/authenticate';
export * from './auth/tokenUtils';
export * from './config';
export * from './typer';
export * from './utils';

export interface IApp {
    app: Express;
    azureAuthClient: Client;
    router: Router;
    prometheusRegistry: Registry;
}

export default async (
    sessionKonfigurasjon: ISessionKonfigurasjon,
    prometheusTellere?: { [key: string]: Counter<string> },
    appConfig?: IAppConfig,
): Promise<IApp> => {
    settAppConfig(appConfig);

    const app = express();
    let azureAuthClient!: Client;
    let router: Router;

    headers.setup(app);

    app.get('/isAlive', (_req: Request, res: Response) => {
        if (hentErforbindelsenTilRedisTilgjengelig()) {
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });
    app.get('/isReady', (_req: Request, res: Response) => {
        res.status(200).end();
    });
    const prometheusRegistry: Registry = konfigurerMetrikker(app, prometheusTellere);

    konfigurerSession(app, passport, sessionKonfigurasjon);

    return konfigurerPassport(passport)
        .then((authClient: Client) => {
            azureAuthClient = authClient;
            router = konfigurerRouter(azureAuthClient, prometheusTellere);

            return {
                app,
                azureAuthClient,
                router,
                prometheusRegistry,
            };
        })
        .catch((err: Error) => {
            logError('Feil ved konfigurasjon av azure', err);
            process.exit(1);
        });
};
