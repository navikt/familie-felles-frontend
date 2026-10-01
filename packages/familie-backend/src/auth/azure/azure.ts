import { logDebug, logInfo } from '@navikt/familie-logging';
import {
    ClientSecretPost,
    type Configuration,
    customFetch,
    type DiscoveryRequestOptions,
    discovery,
} from 'openid-client';
import { Strategy, type StrategyOptions, type VerifyFunction } from 'openid-client/passport';
import { appConfig } from '../../config';
import httpProxy from '../proxy/http-proxy';
import { appendDefaultScope, tilLagretTokenSet, tokenSetSelfId } from '../tokenUtils';

const hentConfig = async (): Promise<Configuration> => {
    const discoveryUrl = new URL(appConfig.discoveryUrl);
    const options: DiscoveryRequestOptions = {};

    if (httpProxy.fetch) {
        options[customFetch] = httpProxy.fetch;
    }

    const config = await discovery(
        discoveryUrl,
        appConfig.clientId,
        undefined,
        ClientSecretPost(appConfig.clientSecret),
        options,
    );
    logInfo(`Discovered issuer ${config.serverMetadata().issuer}`);
    return config;
};

const strategy = (config: Configuration) => {
    const verify: VerifyFunction = (tokens, done) => {
        const expired = tokens.expiresIn() === 0;
        logDebug(`verify. expired=${expired}`);
        if (expired) {
            return done(undefined, undefined);
        }

        done(undefined, {
            claims: tokens.claims(),
            tokenSets: {
                [tokenSetSelfId]: tilLagretTokenSet(tokens),
            },
        });
    };

    const options: StrategyOptions = {
        config,
        callbackURL: appConfig.redirectUri,
        scope: `openid offline_access ${appendDefaultScope(appConfig.clientId)}`,
        passReqToCallback: false,
    };
    return new Strategy(options, verify);
};

export default { hentConfig, strategy };
