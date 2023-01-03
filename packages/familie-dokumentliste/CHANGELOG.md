# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 6.0.0 (2023-01-03)

-   Oppgrader familie felles frontend backend (#771) ([7c7199d](https://github.com/navikt/familie-felles-frontend/commit/7c7199d65e3843864a630ce180bf9fa37670d97d)), closes [#771](https://github.com/navikt/familie-felles-frontend/issues/771)

### BREAKING CHANGES

-   familie-backend

-   chore(familie-backend): skal pakke ut responsen på riktig måte fra node-fetch

affects: @navikt/familie-backend

-   familie-backend

-   chore(bygg-og-deploy-branch): skal hente ut hele historikken ved bygg av brancher for å kunne sette

-   chore(familie-backend): oppgradere snyk

affects: @navikt/familie-backend

-   chore(familie-backend): må commite yarn.lock

affects: @navikt/familie-backend

-   chore(familie-backend): fjern unødvendige kommentarer

affects: @navikt/familie-backend

# 5.0.0 (2023-01-02)

### chore

-   **root:** skal ta i bruk v2 av designsystemet ([#751](https://github.com/navikt/familie-felles-frontend/issues/751)) ([37dc86c](https://github.com/navikt/familie-felles-frontend/commit/37dc86c804a0237d79ce9986642f6a15ff40168b))

### BREAKING CHANGES

-   **root:** Oppgradering medfører at vi må bytte fra --navds prefix til --a der vi importerer styling/tokens

-   Fix. Skal ha riktig verjsonsnummer

-   Midlertidig fiks. Skal ha med props pga. typefeil i material-ui

-   Må te med props for at bygg ikke skal feile

## 4.0.11 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 4.0.10 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 4.0.9 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## 4.0.8 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 4.0.7 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 4.0.6 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## 4.0.5 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## 4.0.4 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 4.0.3 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## 4.0.2 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [4.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@4.0.0...@navikt/familie-dokumentliste@4.0.1) (2022-09-20)

**Note:** Version bump only for package @navikt/familie-dokumentliste

# [4.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@3.0.2...@navikt/familie-dokumentliste@4.0.0) (2022-09-19)

### chore

-   **dokumentliste:** oppgraderer til versjon 1 av designsytemet ([#591](https://github.com/navikt/familie-felles-frontend/issues/591)) ([a51fd92](https://github.com/navikt/familie-felles-frontend/commit/a51fd9249bb5500216f8f40bbc71fbdd7f6a8fc5))

### BREAKING CHANGES

-   **dokumentliste:** Oppgradering av designsystem

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@3.0.1...@navikt/familie-dokumentliste@3.0.2) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@3.0.0...@navikt/familie-dokumentliste@3.0.1) (2022-08-17)

### Bug Fixes

-   **dokumentliste:** Venstrejusterer tekst i dokumentlisten ([#541](https://github.com/navikt/familie-felles-frontend/issues/541)) ([ce99c86](https://github.com/navikt/familie-felles-frontend/commit/ce99c86febed3da70df8a138217d97062dc7b7f0))

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@2.1.2...@navikt/familie-dokumentliste@3.0.0) (2022-07-21)

-   Nytt designbibliotek - clipboard, header og dokumentliste (#525) ([84197be](https://github.com/navikt/familie-felles-frontend/commit/84197bee616f261053d8379a2551c7aad8ebb19f)), closes [#525](https://github.com/navikt/familie-felles-frontend/issues/525)

### BREAKING CHANGES

-   familie-clipboard

-   feat(familie-dokumentliste): byttet til NAVs nye designsystem for familie-dokumentliste

affects: @navikt/familie-dokumentliste

-   familie-dokumentliste

-   feat(familie-header): bytte til NAVs nye designbibliotek for familie-header

affects: @navikt/familie-form-elements, @navikt/familie-header

-   familie-header

-   fix(familie-header): isExternal-lenker skal åpnes i ny fane. Samlet kode som er lik til egen kompone

affects: @navikt/familie-header

-   Fjern utkommentert kode

## [2.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@2.1.1...@navikt/familie-dokumentliste@2.1.2) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [2.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@2.1.0...@navikt/familie-dokumentliste@2.1.1) (2022-04-05)

**Note:** Version bump only for package @navikt/familie-dokumentliste

# [2.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@2.0.1...@navikt/familie-dokumentliste@2.1.0) (2022-03-03)

### Features

-   **Dokumentliste:** skal vise logiske vedlegg i dokumentliste ([#449](https://github.com/navikt/familie-felles-frontend/issues/449)) ([8b84135](https://github.com/navikt/familie-felles-frontend/commit/8b841354ecefad5a32277256ff6e500422297b73))

## [2.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@2.0.0...@navikt/familie-dokumentliste@2.0.1) (2022-02-25)

**Note:** Version bump only for package @navikt/familie-dokumentliste

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.15...@navikt/familie-dokumentliste@2.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [1.0.15](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.14...@navikt/familie-dokumentliste@1.0.15) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.14](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.13...@navikt/familie-dokumentliste@1.0.14) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.12...@navikt/familie-dokumentliste@1.0.13) (2021-05-26)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.11...@navikt/familie-dokumentliste@1.0.12) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.10...@navikt/familie-dokumentliste@1.0.11) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.9...@navikt/familie-dokumentliste@1.0.10) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.8...@navikt/familie-dokumentliste@1.0.9) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.7...@navikt/familie-dokumentliste@1.0.8) (2021-02-11)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.6...@navikt/familie-dokumentliste@1.0.7) (2021-02-08)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.5...@navikt/familie-dokumentliste@1.0.6) (2020-12-10)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.4...@navikt/familie-dokumentliste@1.0.5) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.3...@navikt/familie-dokumentliste@1.0.4) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.2...@navikt/familie-dokumentliste@1.0.3) (2020-11-26)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## [1.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-dokumentliste@1.0.1...@navikt/familie-dokumentliste@1.0.2) (2020-11-24)

**Note:** Version bump only for package @navikt/familie-dokumentliste

## 1.0.1 (2020-11-19)

**Note:** Version bump only for package @navikt/familie-dokumentliste

# Change Log

# 1.0.0 (2020-11-19)

-   Feature/dokumentliste (#1) ([48ce0b1](https://github.com/navikt/familie-felles-frontend/commit/48ce0b1)))

### Features

-   \*\*Legge til mulighet for å liste opp dokumenter tilhørende en sak i saksbehandlingsløsningen)
