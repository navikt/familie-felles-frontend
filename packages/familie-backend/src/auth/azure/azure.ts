import {
    Client,
    ClientMetadata,
    custom,
    Issuer,
    Strategy,
    StrategyOptions,
    TokenSet,
} from 'openid-client';
import { appConfig } from '../../config';
import { info, debug } from '@navikt/familie-logging';
import httpProxy from '../proxy/http-proxy';
import { appendDefaultScope, tokenSetSelfId } from '../tokenUtils';

const metadata: ClientMetadata = {
    client_id: appConfig.clientId,
    client_secret: appConfig.clientSecret,
    redirect_uris: [appConfig.redirectUri],
    token_endpoint_auth_method: 'client_secret_post',
};

const hentClient = (): Promise<Client> => {
    if (httpProxy.agent) {
        custom.setHttpOptionsDefaults({
            agent: {
                http: httpProxy.agent,
                https: httpProxy.agent,
            },
        });
    }
    return Issuer.discover(appConfig.discoveryUrl).then((issuer: Issuer<Client>) => {
        info(`Discovered issuer ${issuer.issuer}`);
        return new issuer.Client(metadata);
    });
};

const strategy = (client: Client) => {
    const verify = (tokenSet: TokenSet, done: (err: any, _: any) => void) => {
        debug(`verify. expired=${tokenSet.expired()}`);
        if (tokenSet.expired()) {
            return done(undefined, undefined);
        }

        done(undefined, {
            claims: tokenSet.claims,
            tokenSets: {
                [tokenSetSelfId]: tokenSet,
            },
        });
    };

    const options: StrategyOptions<Client> = {
        client,
        params: {
            response_mode: 'query',
            response_types: ['code'],
            scope: `openid offline_access ${appendDefaultScope(appConfig.clientId)}`,
        },
        passReqToCallback: false,
        usePKCE: 'S256',
    };
    return new Strategy(options, verify);
};

export default { hentClient, strategy };
