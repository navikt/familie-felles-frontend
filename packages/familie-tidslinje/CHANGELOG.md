# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2023-01-03)

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

# 3.0.0 (2023-01-02)

### chore

-   **root:** skal ta i bruk v2 av designsystemet ([#751](https://github.com/navikt/familie-felles-frontend/issues/751)) ([37dc86c](https://github.com/navikt/familie-felles-frontend/commit/37dc86c804a0237d79ce9986642f6a15ff40168b))

### BREAKING CHANGES

-   **root:** Oppgradering medfører at vi må bytte fra --navds prefix til --a der vi importerer styling/tokens

-   Fix. Skal ha riktig verjsonsnummer

-   Midlertidig fiks. Skal ha med props pga. typefeil i material-ui

-   Må te med props for at bygg ikke skal feile

## 2.0.12 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 2.0.11 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 2.0.10 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-tidslinje

## 2.0.9 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 2.0.8 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 2.0.7 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-tidslinje

## 2.0.6 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-tidslinje

## 2.0.5 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 2.0.4 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-tidslinje

## 2.0.3 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-tidslinje

## [2.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@2.0.1...@navikt/familie-tidslinje@2.0.2) (2022-09-21)

**Note:** Version bump only for package @navikt/familie-tidslinje

## [2.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@2.0.0...@navikt/familie-tidslinje@2.0.1) (2022-09-01)

### Bug Fixes

-   **tidslinje, skjema:** fikset import av ds-css i familie-tidslinje o… ([#575](https://github.com/navikt/familie-felles-frontend/issues/575)) ([fe821a2](https://github.com/navikt/familie-felles-frontend/commit/fe821a2083a47f68a517f94dd519f98dfae5d3b0))

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@1.1.3...@navikt/familie-tidslinje@2.0.0) (2022-07-22)

-   Nytt designbibliotek form-elements mm. (#526) ([38f2cfc](https://github.com/navikt/familie-felles-frontend/commit/38f2cfcb05744c7fb8b509186c4b7e95dc9172e1)), closes [#526](https://github.com/navikt/familie-felles-frontend/issues/526)

### BREAKING CHANGES

-   familie-clipboard

-   feat(familie-dokumentliste): byttet til NAVs nye designsystem for familie-dokumentliste

affects: @navikt/familie-dokumentliste

-   familie-dokumentliste

-   feat(familie-header): bytte til NAVs nye designbibliotek for familie-header

affects: @navikt/familie-form-elements, @navikt/familie-header

-   familie-header

-   feat(familie-visittkort): byttet til NAVs nye designbibliotek for familie-visittkort

affects: @navikt/familie-visittkort

-   style(failie-tidslinje): fjern bruk av gammelt designbibliotek i familie-tidslinje

affects: @navikt/familie-tidslinje

-   style(familie-sprakvelger): byttet til å bruke NAVs nye designbibliotek i familie-sprakvelger

affects: @navikt/familie-sprakvelger

-   feat(familie-skjema): bruke NAVs nye designsystem i familie-skjema

affects: @navikt/familie-skjema

-   refactor(familie-tidslinje): fjern avhengighet til gammelt designsystem i devdependencies for famili

affects: @navikt/familie-skjema, @navikt/familie-tidslinje

-   feat(familie-form-elements): oppdatert lesefelt, knapp, datovelger og react-select til nyeste design

affects: @navikt/familie-form-elements

-   familie-form-elements

-   Fjern unødig space

## [1.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@1.1.2...@navikt/familie-tidslinje@1.1.3) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-tidslinje

## [1.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@1.1.1...@navikt/familie-tidslinje@1.1.2) (2022-04-27)

**Note:** Version bump only for package @navikt/familie-tidslinje

## [1.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-tidslinje@1.1.0...@navikt/familie-tidslinje@1.1.1) (2022-04-08)

### Bug Fixes

-   **tidslinje:** kopierte aktivtUtsnitt-funkjsjonalitet fra helse-frontend-tidslinje ([#453](https://github.com/navikt/familie-felles-frontend/issues/453)) ([a0dc1c7](https://github.com/navikt/familie-felles-frontend/commit/a0dc1c7f594e453aa3a62754cc828d9c49f5efe1))

# 1.1.0 (2022-03-23)

### Features

-   **tidslinje:** opprettet familie-tidslinje kopiert fra helse-frontend-tidslinje ([#452](https://github.com/navikt/familie-felles-frontend/issues/452)) ([ffe5e3c](https://github.com/navikt/familie-felles-frontend/commit/ffe5e3c830d95887fe8b935f0f7ff374c6995f82))
