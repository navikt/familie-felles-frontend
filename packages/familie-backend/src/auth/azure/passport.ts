import { Client } from 'openid-client';
import { info } from '../../logging';
import azure from './azure';

export default async (passport: any): Promise<Client> => {
    info('Konfigurerer passport');
    const azureAuthClient: Client = await azure.hentClient();
    const azureOidcStrategy = azure.strategy(azureAuthClient);

    console.log(azureOidcStrategy);
    passport.serializeUser((user: any, done: any) => {
        done(undefined, user.oid);
    });
    passport.deserializeUser((oid: string, done: any) => {
        done(undefined, oid);
    });
    passport.use('azureOidc', azureOidcStrategy);

    return azureAuthClient;
};
