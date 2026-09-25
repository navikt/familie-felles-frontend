import { logInfo } from '@navikt/familie-logging';
import type { Client, UserinfoResponse } from 'openid-client';
import azure from './azure';

// biome-ignore lint/suspicious/noExplicitAny: passport-instansen er ikke typet i passport-biblioteket
export default async (passport: any): Promise<Client> => {
    logInfo('Konfigurerer passport');
    const azureAuthClient: Client = await azure.hentClient();
    const azureOidcStrategy = azure.strategy(azureAuthClient);

    passport.serializeUser(
        // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
        (user: UserinfoResponse, done: (err: any, user?: UserinfoResponse) => void) => done(undefined, user),
    );
    passport.deserializeUser(
        // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
        (user: UserinfoResponse, done: (err: any, user?: UserinfoResponse) => void) => done(undefined, user),
    );
    passport.use('azureOidc', azureOidcStrategy);

    return azureAuthClient;
};
