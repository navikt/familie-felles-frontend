import cookieParser from 'cookie-parser';
import session from 'express-session';
import { PassportStatic } from 'passport';
import redis from 'redis';
import { ISessionKonfigurasjon } from '../typer';

/* tslint:disable */
const RedisStore = require('connect-redis')(session);
/* tslint:enable */

export default (
    app: any,
    passport: PassportStatic,
    sessionKonfigurasjon: ISessionKonfigurasjon,
) => {
    app.use(cookieParser(sessionKonfigurasjon.cookieSecret));
    app.set('trust proxy', 1);

    if (process.env.NODE_ENV === 'production' && sessionKonfigurasjon.redisUrl) {
        const client = redis.createClient({
            db: 1,
            host: sessionKonfigurasjon.redisUrl,
            password: sessionKonfigurasjon.redisPassord,
            port: 6379,
        });
        client.unref();

        const store = new RedisStore({
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
                name: sessionKonfigurasjon.navn,
                resave: false,
                saveUninitialized: true,
                secret: sessionKonfigurasjon.sessionSecret,
                store,
            }),
        );
    } else {
        app.use(
            session({
                cookie: { sameSite: 'lax', secure: sessionKonfigurasjon.secureCookie },
                name: sessionKonfigurasjon.navn,
                resave: false,
                saveUninitialized: true,
                secret: sessionKonfigurasjon.sessionSecret,
            }),
        );
    }

    app.use(passport.initialize());
    app.use(passport.session());
};
