import dotenv from 'dotenv';
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '/var/run/secrets/nais.io/vault/.env' });
} else {
    dotenv.config();
}

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
import { getLogTimestamp, logInfo, logError } from './customLoglevel';

const konfigurerBackend = (
    passportConfig: IOIDCStrategyOptionWithRequest,
    sessionKonfigurasjon: ISessionKonfigurasjon,
): IFamilieBackend => {
    konfigurerPassport(passport, passportConfig);

    const app = express();
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
    getLogTimestamp,
    logInfo,
    logError,
    konfigurerBackend,
    logout,
    validerEllerOppdaterOnBehalfOfToken,
};
