import { Client, UserinfoResponse } from 'openid-client';
import { info } from '../../logging';
import azure from './azure';

export default async (passport: any): Promise<Client> => {
    info('Konfigurerer passport');
    const azureAuthClient: Client = await azure.hentClient();
    const azureOidcStrategy = azure.strategy(azureAuthClient);

    passport.serializeUser(
        (user: UserinfoResponse, done: (err: any, user?: UserinfoResponse) => void) =>
            done(undefined, user),
    );
    passport.deserializeUser(
        (user: UserinfoResponse, done: (err: any, user?: UserinfoResponse) => void) =>
            done(undefined, user),
    );
    passport.use('azureOidc', azureOidcStrategy);

    return azureAuthClient;
};
