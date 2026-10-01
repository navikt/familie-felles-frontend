import { logInfo } from '@navikt/familie-logging';
import type { Configuration } from 'openid-client';
import type { PassportStatic } from 'passport';
import azure from './azure';

export default async (passport: PassportStatic): Promise<Configuration> => {
    logInfo('Konfigurerer passport');
    const azureAuthConfig = await azure.hentConfig();
    const azureOidcStrategy = azure.strategy(azureAuthConfig);

    // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
    passport.serializeUser((user: Express.User, done: (err: any, user?: Express.User) => void) =>
        done(undefined, user),
    );
    // biome-ignore lint/suspicious/noExplicitAny: done-callback-signaturen kommer fra passport sitt API
    passport.deserializeUser((user: Express.User, done: (err: any, user?: Express.User) => void) =>
        done(undefined, user),
    );
    passport.use('azureOidc', azureOidcStrategy);

    return azureAuthConfig;
};
