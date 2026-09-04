# familie-felles-frontend

Fellesrepo for frontend biblioteker for team familie.\
[Storybook med dokumentasjon 📖](https://navikt.github.io/familie-felles-frontend)

## Lokal testing
Kjør `pnpm build` så skal den bruke den siste versjonen lokalt

## Lokal utvikling
* Kjør `nvm use` (Node-versjonen ligger i `.nvmrc`)
* Aktiver riktig pnpm-versjon med `corepack enable` (henter versjonen fra `packageManager` i package.json)
* Installer avhengigheter med `pnpm install`
* Bygg pakkene med `pnpm build`
* Start Storybook med `pnpm storybook`

## Endringer
For å commite oprettes det en branch som vanlig `git checkout -b navnet-på-branchen`, deretter anbefales det å bruke `pnpm ct` for god historikk.

Les mer [her](packages/introduksjon.mdx)


# Dokumentasjon
Besøk [docs](https://navikt.github.io/familie-felles-frontend) for Storybook-dokumentasjon.

## Trøbbel?
Har du en gammel `node_modules` fra før pnpm-migreringen, slett den og kjør `pnpm install` på nytt.

## Kode generert av GitHub Copilot
Dette repoet bruker GitHub Copilot til å generere kode.
