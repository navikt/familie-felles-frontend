import createHttpsProxyAgent from 'https-proxy-agent';
import { envVar } from '../../utils';
import { logInfo } from '@navikt/familie-logging';

const agent = () => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        logInfo(`Proxying requests via ${proxyUri} for openid-cilent`);

        /**
         * Stygg cast for å fikse kompileringsfeil: https://github.com/TooTallNate/node-https-proxy-agent/issues/108
         */
        return createHttpsProxyAgent(proxyUri);
    } else {
        logInfo(
            `Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`,
        );
        return undefined;
    }
};

export default { agent: agent() };
