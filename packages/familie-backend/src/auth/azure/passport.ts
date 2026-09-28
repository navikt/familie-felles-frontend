import { logInfo } from '@navikt/familie-logging';
import type { Configuration } from 'openid-client';
import azure from './azure';

// biome-ignore lint/suspicious/noExplicitAny: passport-instansen er ikke typet i passport-biblioteket
export default async (passport: any): Promise<Configuration> => {
    logInfo('Konfigurerer passport');
    const azureAuthConfig: Configuration = await azure.hentConfig();
    const azureOidcStrategy = azure.strategy(azureAuthConfig);

    passport.serializeUser(
        // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
        (user: Express.User, done: (err: any, user?: Express.User) => void) => done(undefined, user),
    );
    passport.deserializeUser(
        // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
        (user: Express.User, done: (err: any, user?: Express.User) => void) => done(undefined, user),
    );
    passport.use('azureOidc', azureOidcStrategy);

    return azureAuthConfig;
};
