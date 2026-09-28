import { logInfo } from '@navikt/familie-logging';
import type { CustomFetch } from 'openid-client';
import { ProxyAgent, fetch as undiciFetch } from 'undici';
import { envVar } from '../../utils';

const proxyFetch = (): CustomFetch | undefined => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        logInfo(`Proxying requests via ${proxyUri} for openid-client`);

        const dispatcher = new ProxyAgent(proxyUri);
        return (url, options) =>
            undiciFetch(url, { ...options, dispatcher } as Parameters<
                typeof undiciFetch
            >[1]) as unknown as Promise<Response>;
    } else {
        logInfo(`Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`);
        return undefined;
    }
};

export default { fetch: proxyFetch() };
