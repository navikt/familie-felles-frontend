import tunnel from 'tunnel';
import { envVar } from '../../config';
import { info } from '../../logging';

const agent = () => {
    const proxyUri = envVar('HTTP_PROXY', false);
    if (proxyUri) {
        info(`Proxying requests via ${proxyUri} for openid-cilent`);
        const hostPort = proxyUri
            .replace('https://', '')
            .replace('http://', '')
            .split(':', 2);
        return tunnel.httpsOverHttp({
            proxy: {
                host: hostPort[0],
                port: parseInt(hostPort[1], 10),
            },
        });
    } else {
        info(`Environment variable HTTP_PROXY is not set, not proxying requests for openid-client`);
        return undefined;
    }
};

export default { agent: agent() };
