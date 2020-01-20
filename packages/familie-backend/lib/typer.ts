import { Express, Request } from 'express';
import { IOIDCStrategyOptionWithRequest } from 'passport-azure-ad';
import { Registry } from 'prom-client';

export interface IFamilieBackend {
    app: Express;
    prometheusRegistry: Registry;
}

export type SessionRequest = Request & {
    session: Express.Session;
    sessionID: string;
};

export interface ISessionKonfigurasjon {
    redisUrl?: string;
    redisPassord?: string;
    navn: string;
    secure: boolean;
    sessionMaxAgeSekunder?: number;
    sessionSecret: string | string[];
    cookieSecret: string | string[];
}

export interface ITokenRequest {
    clientId: string;
    clientSecret: string;
    redirectUrl: string;
    scope: string;
    tokenUri: string;
}

export { IOIDCStrategyOptionWithRequest };
