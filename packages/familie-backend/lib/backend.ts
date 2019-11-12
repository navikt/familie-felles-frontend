import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '/var/run/secrets/nais.io/vault/.env' });
} else {
    dotenv.config();
}

import morgan from 'morgan';
import passport from 'passport';
import { IOIDCStrategyOptionWithRequest } from 'passport-azure-ad';
import express, { Request, Response } from 'express';
import konfigurerPassport from './auth/passport';
import konfigurerSession from './auth/session';
import { konfigurerMetrikker } from './metrikker';
import { IFamilieBackend, ISessionKonfigurasjon } from './typer';
import {
    ensureAuthenticated,
    authenticateAzure,
    authenticateAzureCallback,
    logout,
} from './auth/authenticate';
import { hentBrukerprofil } from './auth/bruker';
import { validerEllerOppdaterOnBehalfOfToken } from './auth/token';

const konfigurerBackend = (
    passportConfig: IOIDCStrategyOptionWithRequest,
    sessionKonfigurasjon: ISessionKonfigurasjon,
): IFamilieBackend => {
    konfigurerPassport(passport, passportConfig);

    const app = express();
    app.use(morgan('combined'));
    app.get('/isAlive', (req: Request, res: Response) => res.status(200).end());
    app.get('/isReady', (req: Request, res: Response) => res.status(200).end());

    const prometheusRegistry = konfigurerMetrikker();

    konfigurerSession(app, passport, sessionKonfigurasjon);

    return { app, prometheusRegistry };
};

export {
    IOIDCStrategyOptionWithRequest,
    authenticateAzure,
    authenticateAzureCallback,
    ensureAuthenticated,
    hentBrukerprofil,
    konfigurerBackend,
    logout,
    validerEllerOppdaterOnBehalfOfToken,
};
