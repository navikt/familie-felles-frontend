export interface IApi {
    clientId: string;
    scopes: string[];
}

export interface ISessionKonfigurasjon {
    redisUrl?: string;
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
