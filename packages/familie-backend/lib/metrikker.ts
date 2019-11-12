import prom_client from 'prom-client';

export const konfigurerMetrikker = () => {
    const collectDefaultMetrics = prom_client.collectDefaultMetrics;
    const Registry = prom_client.Registry;
    const register = new Registry();

    collectDefaultMetrics({ register });
    return register;
};
