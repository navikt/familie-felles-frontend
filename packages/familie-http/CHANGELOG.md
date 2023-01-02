# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2023-01-02)

### chore

-   **root:** skal ta i bruk v2 av designsystemet ([#751](https://github.com/navikt/familie-felles-frontend/issues/751)) ([37dc86c](https://github.com/navikt/familie-felles-frontend/commit/37dc86c804a0237d79ce9986642f6a15ff40168b))

### BREAKING CHANGES

-   **root:** Oppgradering medfører at vi må bytte fra --navds prefix til --a der vi importerer styling/tokens

-   Fix. Skal ha riktig verjsonsnummer

-   Midlertidig fiks. Skal ha med props pga. typefeil i material-ui

-   Må te med props for at bygg ikke skal feile

## 3.0.11 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 3.0.10 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 3.0.9 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-http

## 3.0.8 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 3.0.7 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 3.0.6 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-http

## 3.0.5 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-http

## 3.0.4 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 3.0.3 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-http

## 3.0.2 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-http

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@3.0.0...@navikt/familie-http@3.0.1) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-http

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@2.0.0...@navikt/familie-http@3.0.0) (2022-02-25)

### Bug Fixes

-   **Endre modul fra commonjs til es6:** endre typen på modul fra commonjs til es6 ([#448](https://github.com/navikt/familie-felles-frontend/issues/448)) ([ba5e03d](https://github.com/navikt/familie-felles-frontend/commit/ba5e03d3cd9fd500e7a2648a8a42eec0fc45eed1))

### BREAKING CHANGES

-   **Endre modul fra commonjs til es6:** Endrer modultypen

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.1.1...@navikt/familie-http@2.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [1.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.1.0...@navikt/familie-http@1.1.1) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-http

# [1.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.6...@navikt/familie-http@1.1.0) (2021-09-10)

### Features

-   **familie-http:** eksponerer nytt felt for å la konsument bestemme om feil på 200 OK ressurs skal ([9b00579](https://github.com/navikt/familie-felles-frontend/commit/9b00579d3b2df9313775a75e74f51c96b63722bd))

## [1.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.5...@navikt/familie-http@1.0.6) (2021-09-08)

**Note:** Version bump only for package @navikt/familie-http

## [1.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.4...@navikt/familie-http@1.0.5) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-http

## [1.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.3...@navikt/familie-http@1.0.4) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-http

## [1.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.2...@navikt/familie-http@1.0.3) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-http

## [1.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-http@1.0.1...@navikt/familie-http@1.0.2) (2021-02-11)

**Note:** Version bump only for package @navikt/familie-http

## 1.0.1 (2021-01-05)

**Note:** Version bump only for package @navikt/familie-http
