# familie-felles-frontend

Fellesrepo for frontend biblioteker for team familie.\
[Storybook med dokumentasjon 📖](https://navikt.github.io/familie-felles-frontend)

## Lokal testing
Kjør `yarn build` så skal den bruke den siste versjonen lokalt

## Lokal utvilking
For å utvilke lokalt kan man kjøre
`yarn && yarn build`
For å sette opp repoet og
`yarn storybook`
For å kjøre det.

## Endringer
For å commite oprettes det en branch som vanlig `git checkout -b navnet-på-branchen`, deretter anbefales det å bruke `yarn ct` for god historikk.

Les mer [her](packages/introduksjon.mdx)


# Dokumentasjon
Besøk [docs](https://navikt.github.io/familie-felles-frontend) for Storybook-dokumentasjon.

## Trøbbel?
Det kan være nødvendig å slette `node_modules` lokalt for å få satt opp workspaces riktig.
Dette fordi vi nå bruker `yarn`, og ikke `lerna`, sine workspaces.

## Kode generert av GitHub Copilot
Dette repoet bruker GitHub Copilot til å generere kode.
