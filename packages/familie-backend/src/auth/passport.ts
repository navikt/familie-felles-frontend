import { Request } from 'express';
import {
    IOIDCStrategyOptionWithRequest,
    IProfile,
    OIDCStrategy,
    VerifyCallback,
} from 'passport-azure-ad';

export default (passport: any, passportConfig: IOIDCStrategyOptionWithRequest) => {
    passport.serializeUser((user: any, done: any) => {
        done(undefined, user.oid);
    });

    passport.deserializeUser((oid: string, done: any) => {
        done(undefined, oid);
    });

    // Azure AD strategi
    passport.use(
        'azuread-openidconnect',
        new OIDCStrategy(
            passportConfig,
            (
                req: Request,
                _iss: string,
                _sub: string,
                profile: IProfile,
                _access_token: string,
                refresh_token: string,
                done: VerifyCallback,
            ) => {
                if (!profile.oid) {
                    return done(new Error('No oid found'), undefined);
                }
                process.nextTick(() => {
                    if (!req.session) {
                        throw new Error('Mangler sesjon på kall');
                    }

                    req.session.oid = profile.oid;
                    req.session.upn = profile._json.preferred_username;
                    req.session.displayName = profile.displayName;
                    req.session.groups = profile._json.groups;
                    req.session.refreshToken = refresh_token;

                    return done(undefined, profile);
                });
            },
        ),
    );
};
