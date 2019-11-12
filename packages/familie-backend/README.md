# `@familie-felles/backend`

Node.js backend med express for familie frontend apper.
Setter opp en express app med azure autentisering og logging.
Kan konfigureres til å bruke redis gjennom egen konfigurasjon.

## Brukes slik

```
const passportConfig: IOIDCStrategyOptionWithRequest = se interface i oidc-strategy.d.ts
const sessionConfig: ISessionKonfigurasjon = {
    cookieSecret: string,
    navn: string,
    redisPassord?: string;
    redisUrl?: string; // Settes denne prøver modulen å koble seg til redis
    sessionMaxAgeSekunder?: number;
    sessionSecret: string,
};

const familieBackend: IFamilieBackend = konfigurerBackend(passportConfig, sessionConfig);
```
