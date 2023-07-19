import { Express } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { PassportStatic } from 'passport';
import redis from 'redis';
import { appConfig } from '../config';
import { logError, logInfo, logSecure } from '@navikt/familie-logging';
import { ISessionKonfigurasjon } from '../typer';

import RedisStore from 'connect-redis';

const redisClientForAiven = (sessionKonfigurasjon: ISessionKonfigurasjon) => {
    const pingHvertFjerdeMinutt = 1000 * 60 * 4; // Connection blir ugyldig etter fem minutter, pinger derfor hvert fjerde minutt
    const redisClient = redis.createClient({
        database: 1,
        url: sessionKonfigurasjon.redisFullUrl,
        username: sessionKonfigurasjon.redisBrukernavn,
        password: sessionKonfigurasjon.redisPassord,
        pingInterval: pingHvertFjerdeMinutt,
    });
    return redisClient;
};

const redisClientForStandalone = (sessionKonfigurasjon: ISessionKonfigurasjon) => {
    const redisClient = redis.createClient({
        database: 1,
        socket: {
            host: sessionKonfigurasjon.redisUrl,
            port: 6379,
        },
        password: sessionKonfigurasjon.redisPassord,
    });
    return redisClient;
};

const lagRedisClient = (sessionKonfigurasjon: ISessionKonfigurasjon) => {
    if (sessionKonfigurasjon.redisFullUrl) {
        logInfo('Setter opp redis mot aiven for sesjoner');
        return redisClientForAiven(sessionKonfigurasjon);
    } else if (sessionKonfigurasjon.redisUrl) {
        logInfo('Setter opp redis for session');
        return redisClientForStandalone(sessionKonfigurasjon);
    } else {
        logSecure(
            `Mangler redisUrl eller redisFullUrl i sesjonskonfigurasjonen ${sessionKonfigurasjon}`,
        );
        throw Error('Kan ikke konfigurerer redis uten sesjonsconfigurasjon');
    }
};

export default (
    app: Express,
    passport: PassportStatic,
    sessionKonfigurasjon: ISessionKonfigurasjon,
) => {
    app.use(cookieParser(sessionKonfigurasjon.cookieSecret));
    app.set('trust proxy', 1);

    if (sessionKonfigurasjon.redisFullUrl || sessionKonfigurasjon.redisUrl) {
        const redisClient = lagRedisClient(sessionKonfigurasjon);

        /**
         * Logge hendelser i redisclient for å debugge merkelige sockettimeouts
         */
        redisClient.on('error', err => logError(`Redis Error: ${err}`));
        redisClient.on('connect', () => logInfo('Redis connected'));
        redisClient.on('reconnecting', () => logInfo('Redis reconnecting'));
        redisClient.on('ready', () => {
            logInfo('Redis ready!');
        });

        redisClient.connect().catch(logError);
        redisClient.unref();

        const store = new RedisStore({
            disableTouch: true,
            client: redisClient,
            ttl: sessionKonfigurasjon.sessionMaxAgeSekunder,
        });

        app.use(
            session({
                cookie: {
                    maxAge: sessionKonfigurasjon.sessionMaxAgeSekunder
                        ? sessionKonfigurasjon.sessionMaxAgeSekunder * 1000
                        : undefined,
                    sameSite: 'lax',
                    secure: sessionKonfigurasjon.secureCookie,
                },
                unset: 'destroy',
                name: sessionKonfigurasjon.navn,
                resave: false,
                saveUninitialized: false,
                secret: appConfig.sessionSecret,
                store,
            }),
        );
    } else {
        logInfo('Setter opp in-memory db for session');

        app.use(
            session({
                cookie: { sameSite: 'lax', secure: sessionKonfigurasjon.secureCookie },
                name: sessionKonfigurasjon.navn,
                resave: false,
                saveUninitialized: false,
                secret: appConfig.sessionSecret,
            }),
        );
    }

    app.use(passport.initialize());
    app.use(passport.session());
};
