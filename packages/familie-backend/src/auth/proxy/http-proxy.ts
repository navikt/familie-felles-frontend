import { logInfo } from '@navikt/familie-logging';
import type { CustomFetch } from 'openid-client';
import { ProxyAgent, type RequestInit as UndiciRequestInit, fetch as undiciFetch } from 'undici';
import { envVar } from '../../utils';

const proxyFetch = (): CustomFetch | undefined => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        logInfo(`Proxying requests via ${proxyUri} for openid-client`);

        const dispatcher = new ProxyAgent(proxyUri);
        return async (url, options) => {
            const response = await undiciFetch(url, {
                ...options,
                dispatcher,
            } as UndiciRequestInit);

            return response as Response;
        };
    } else {
        logInfo(`Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`);
        return undefined;
    }
};

export default { fetch: proxyFetch() };
