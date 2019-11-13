# familie-felles-frontend

Fellesrepo for frontend biblioteker for team familie

Ved lokal utvikling:

1. lerna bootstrap
2. lerna run compile
3. npm link i pakken man ønsker å teste lokalt

Pakkene publiseres automatisk til npm ved push til master og man skal lage PR før publisering.
Hver commit skal genereres ved å kjøre `npm run-script ct` som vil gi oss god historikk.
