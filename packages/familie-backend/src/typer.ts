export interface IApi {
    clientId: string;
    scopes: string[];
}

export interface ISessionKonfigurasjon {
    redisUrl?: string;
    redisFullUrl?: string;
    redisBrukernavn?: string;
    redisPassord?: string;
    navn: string;
    secureCookie: boolean;
    sessionMaxAgeSekunder?: number;
    cookieSecret: string | string[];
}

export interface IAppConfig {
    discoveryUrl: string;
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    logoutRedirectUri: string;
    sessionSecret: string;
}

export interface User {
    displayName: string;
    email: string;
    enhet: string;
    identifier: string;
    navIdent: string;
    // biome-ignore lint/suspicious/noExplicitAny: gruppeclaimen fra Azure AD har ikke en fast form
    groups: any;
}

declare module 'express-session' {
    interface Session {
        user: User;
        // biome-ignore lint/suspicious/noExplicitAny: passport-objektet på sesjonen er ikke typet i passport-biblioteket
        passport: any;
        redirectUrl: string;
    }
}
