import createHttpsProxyAgent from 'https-proxy-agent';
import { envVar } from '../../config';
import { info } from '../../logging';

const agent = () => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        info(`Proxying requests via ${proxyUri} for openid-cilent`);

        /**
         * Stygg cast for å fikse kompileringsfeil: https://github.com/TooTallNate/node-https-proxy-agent/issues/108
         */
        return createHttpsProxyAgent(proxyUri) as any;
    } else {
        info(`Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`);
        return undefined;
    }
};

export default { agent: agent() };
