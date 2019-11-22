# `@familie-felles/backend`

Node.js backend med express for familie frontend apper.
Setter opp en express app med azure autentisering og logging.
Kan konfigureres til å bruke redis gjennom egen konfigurasjon.

## Brukes slik

```
const passportConfig: IOIDCStrategyOptionWithRequest = se interface i oidc-strategy.d.ts
const sessionConfig: ISessionKonfigurasjon = {
    cookieSecret: string | string[]  ,
    navn: string,
    redisPassord?: string;
    redisUrl?: string; // Settes denne prøver modulen å koble seg til redis
    sessionMaxAgeSekunder?: number;
    sessionSecret: string | string[],
};

export const saksbehandlerTokenConfig: ITokenRequest = {
    clientId: '<applikasjon_id fra aad app>',
    clientSecret: '<SECRET fra aad app>',
    redirectUrl: redirectUrl,
    scope: `${'<applikasjon_id fra aad app>'}/.default`,
    tokenUri: tokenURI,
};

export const oboTokenConfig: ITokenRequest = {
    clientId: '<applikasjon_id fra aad app>',
    clientSecret: '<SECRET fra aad app>',
    redirectUrl: redirectUrl,
    scope: 'scope mot backend tjenesten',
    tokenUri: tokenURI,
};

const backend = new Backend(passportConfig, sessionConfig, saksbehandlerTokenConfig);

// Brukes videre f.eks. slik til å sette opp proxy mot backend
backend
    .getApp()
    .use(
        'proxyUrl',
        backend.ensureAuthenticated(true, saksbehandlerTokenConfig),
        attachToken(backend),
        doProxy()
    );
```
