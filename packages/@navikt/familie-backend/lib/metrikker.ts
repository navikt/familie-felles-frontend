import { Express, Request } from 'express';
import prom_client, { Counter } from 'prom-client';

export const konfigurerMetrikker = (
    app: Express,
    prometheusTellere?: { [key: string]: Counter },
) => {
    const collectDefaultMetrics = prom_client.collectDefaultMetrics;
    const Registry = prom_client.Registry;
    const register = new Registry();

    collectDefaultMetrics({ register });

    if (prometheusTellere) {
        Object.values(prometheusTellere).map(counter => {
            register.registerMetric(counter);
        });
    }

    app.get('/metrics', (req: Request, res) => {
        res.set('Content-Type', register.contentType);
        res.end(register.metrics());
    });

    return register;
};
