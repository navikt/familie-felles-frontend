import HttpsProxyAgent from 'https-proxy-agent';
import { envVar } from '../../config';
import { info } from '../../logging';

const agent = () => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        info(`Proxying requests via ${proxyUri} for openid-cilent`);
        const agent = new HttpsProxyAgent(proxyUri);
        return {
            http: agent,
            https: agent,
        };
    } else {
        info(`Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`);
        return undefined;
    }
};

export default { agent: agent() };
