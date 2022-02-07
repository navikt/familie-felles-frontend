import { Express } from 'express';

const styleSource = 'https://fonts.googleapis.com';
const fontSource = 'https://fonts.gstatic.com';
const amplitude = 'https://amplitude.nav.no';
const sentry = 'https://sentry.gc.nav.no';

const cspString = `default-src 'self' data: ${amplitude} ${sentry}; style-src 'self' ${styleSource} data: 'unsafe-inline'; font-src 'self' ${fontSource}; object-src 'self'; frame-src 'self' blob:;`;

const setup = (app: Express) => {
    app.disable('x-powered-by');
    app.use((_req, res, next) => {
        res.header('X-Frame-Options', 'DENY');
        res.header('X-Xss-Protection', '1; mode=block');
        res.header('X-Content-Type-Options', 'nosniff');
        res.header('Referrer-Policy', 'no-referrer');

        if (process.env.NODE_ENV !== 'development') {
            res.header('Content-Security-Policy', cspString);
            res.header('X-WebKit-CSP', cspString);
            res.header('X-Content-Security-Policy', cspString);
        }

        res.header('Feature-Policy', "geolocation 'none'; microphone 'none'; camera 'none'");
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, GET, POST, DELETE');
        next();
    });
};

export default { setup };
