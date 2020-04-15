# Familie backend

Node.js backend med express for familie frontend apper.
Setter opp en express app med azure autentisering og logging.
Kan konfigureres til å bruke redis gjennom egen konfigurasjon.

> 💡 Ser du etter [dokumentasjon](https://navikt.github.io/familie-felles-frontend/?path=/story/backend-server--page)?

## Installasjon

```sh
npm install @navikt/familie-backend
# eller hvis du bruker yarn:
yarn add @navikt/familie-backend
```

## Miljøvariabler

Pakken krever noen miljøvariabler:

```sh
SESSION_SECRET='<any string of length 32>'

CLIENT_ID='<application_id from aad app>'
CLIENT_SECRET='<KEY from aad app>'

COOKIE_KEY1='<any string of length 32>'
COOKIE_KEY2='<any string of length 32>'

AAD_DISCOVERY_URL='<Azure discovery URL>'
AAD_LOGOUT_REDIRECT_URL='<Azure logout URL>'
AAD_REDIRECT_URL='<Azure redirect URL>'

LOG_LEVEL='info' | 'debug' - ikke påkrevd
```