import { Express } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { PassportStatic } from 'passport';
import redis from 'redis';
import { appConfig } from '../config';
import { logInfo } from '@navikt/familie-logging';
import { ISessionKonfigurasjon } from '../typer';

import RedisStore from 'connect-redis';
const redisStore = RedisStore(session);

export default (
    app: Express,
    passport: PassportStatic,
    sessionKonfigurasjon: ISessionKonfigurasjon,
) => {
    app.use(cookieParser(sessionKonfigurasjon.cookieSecret));
    app.set('trust proxy', 1);

    if (sessionKonfigurasjon.redisUrl) {
        logInfo('Setter opp redis for session');

        const client = redis.createClient({
            db: 1,
            host: sessionKonfigurasjon.redisUrl,
            password: sessionKonfigurasjon.redisPassord,
            port: 6379,
        });
        client.unref();

        const store = new redisStore({
            client,
            disableTouch: true,
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
