import http from 'http';
import {
    Client,
    ClientMetadata,
    custom,
    Issuer,
    Strategy,
    StrategyOptions,
    TokenSet,
    UserinfoResponse,
} from 'openid-client';
import { appConfig } from '../../config';
import { info } from '../../logging';
import httpProxy from '../proxy/http-proxy';
import { appendDefaultScope } from '../utils';

const metadata: ClientMetadata = {
    client_id: appConfig.clientId,
    client_secret: appConfig.clientSecret,
    redirect_uris: [appConfig.redirectUri],
    token_endpoint_auth_method: 'client_secret_post',
};

const hentClient = (): Promise<Client> => {
    if (httpProxy.agent) {
        custom.setHttpOptionsDefaults({
            agent: httpProxy.agent,
        });
    }
    return Issuer.discover(appConfig.discoveryUrl).then((issuer: Issuer<Client>) => {
        info(`Discovered issuer ${issuer.issuer}`);
        return new issuer.Client(metadata);
    });
};

const strategy = (client: Client) => {
    const verify = (
        req: http.IncomingMessage,
        tokenset: TokenSet,
        userinfo: UserinfoResponse,
        done: (err: any, user?: UserinfoResponse) => void,
    ) => {
        /*if (!req.session) {
            throw Error('Mangler session på request.');
        }

        req.session.oid = userinfo.oid;
        req.session.upn = userinfo.preferred_username;
        req.session.displayName = userinfo.displayName;
        req.session.groups = userinfo.groups;
        req.session.tokenSets[tokenSetSelfId] = tokenset;*/

        info(`Request: ${req}\nTokenset: ${tokenset}`);
        return done(undefined, userinfo);
    };

    const options: StrategyOptions<Client> = {
        client,
        params: {
            response_mode: 'query',
            response_types: ['code'],
            scope: `openid profile offline_access ${appendDefaultScope(appConfig.clientId)}`,
        },
        passReqToCallback: false,
        usePKCE: 'S256',
    };
    return new Strategy(options, verify);
};

export default { hentClient, strategy };
