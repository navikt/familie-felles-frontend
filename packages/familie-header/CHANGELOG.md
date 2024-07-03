# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [14.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@14.0.3...@navikt/familie-header@14.0.4) (2024-07-03)

**Note:** Version bump only for package @navikt/familie-header





## [14.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@14.0.2...@navikt/familie-header@14.0.3) (2024-06-21)

**Note:** Version bump only for package @navikt/familie-header





## [14.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@14.0.1...@navikt/familie-header@14.0.2) (2024-06-20)

**Note:** Version bump only for package @navikt/familie-header





## [14.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@14.0.0...@navikt/familie-header@14.0.1) (2024-04-16)

**Note:** Version bump only for package @navikt/familie-header





# [14.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@13.1.0...@navikt/familie-header@14.0.0) (2024-02-27)


### chore

* **deps-dev:** bump the aksel group with 4 updates ([#1400](https://github.com/navikt/familie-felles-frontend/issues/1400)) ([0133662](https://github.com/navikt/familie-felles-frontend/commit/01336628654de61e7ba6ca7031633007a38feda9))


### BREAKING CHANGES

* **deps-dev:** Krever Aksel v6

* chore(deps-dev): bump the aksel group with 4 updates

Bumps the aksel group with 4 updates: [@navikt/ds-css](https://github.com/navikt/aksel), [@navikt/ds-react](https://github.com/navikt/aksel), [@navikt/aksel-icons](https://github.com/navikt/aksel/tree/HEAD/@navikt/aksel-icons) and [@navikt/ds-tokens](https://github.com/navikt/aksel/tree/HEAD/@navikt/core/tokens).


Updates `@navikt/ds-css` from 5.18.0 to 6.1.0
- [Release notes](https://github.com/navikt/aksel/releases)
- [Changelog](https://github.com/navikt/aksel/blob/main/CHANGELOG.md)
- [Commits](https://github.com/navikt/aksel/compare/@navikt/ds-css@5.18.0...@navikt/ds-css@6.1.0)

Updates `@navikt/ds-react` from 5.18.0 to 6.1.0
- [Release notes](https://github.com/navikt/aksel/releases)
- [Changelog](https://github.com/navikt/aksel/blob/main/CHANGELOG.md)
- [Commits](https://github.com/navikt/aksel/compare/@navikt/ds-react@5.18.0...@navikt/ds-react@6.1.0)

Updates `@navikt/aksel-icons` from 5.18.0 to 6.1.0
- [Release notes](https://github.com/navikt/aksel/releases)
- [Changelog](https://github.com/navikt/aksel/blob/main/@navikt/aksel-icons/CHANGELOG.md)
- [Commits](https://github.com/navikt/aksel/commits/@navikt/aksel-icons@6.1.0/@navikt/aksel-icons)

Updates `@navikt/ds-tokens` from 5.18.0 to 6.1.0
- [Release notes](https://github.com/navikt/aksel/releases)
- [Changelog](https://github.com/navikt/aksel/blob/main/@navikt/core/tokens/CHANGELOG.md)
- [Commits](https://github.com/navikt/aksel/commits/@navikt/ds-tokens@6.1.0/@navikt/core/tokens)





# [13.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@13.0.2...@navikt/familie-header@13.1.0) (2024-02-08)


### Bug Fixes

* **familie-header:** fikser opp styled-components error fra konsollen ([c9c6140](https://github.com/navikt/familie-felles-frontend/commit/c9c61408d762ac1c77de920e1b7f7d4bd74ebea7))


### Features

* **familie-header:** bytter ut bruk av familie-validering med navikt/fnrvalidator ([5922550](https://github.com/navikt/familie-felles-frontend/commit/5922550d38dc8f1aacf580b455060f74ed29fcae))





## [13.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@13.0.1...@navikt/familie-header@13.0.2) (2024-01-30)

**Note:** Version bump only for package @navikt/familie-header





## [13.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@13.0.0...@navikt/familie-header@13.0.1) (2024-01-16)

**Note:** Version bump only for package @navikt/familie-header





# [13.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@12.0.0...@navikt/familie-header@13.0.0) (2024-01-05)


### chore

* **alle komponenter:** oppdatert avhengigheter til alle komponenter ([#1352](https://github.com/navikt/familie-felles-frontend/issues/1352)) ([571a7af](https://github.com/navikt/familie-felles-frontend/commit/571a7af3a2da19d3365869a276a43339a1e34581))


### BREAKING CHANGES

* **alle komponenter:** Fjernet støtte for react 17 og nav ds <=4

* familie-tidslinje må ha devDependency til dayjs - foreløpig går dette bra fordi familie-datovelger har denne dependencien, men det er ikke en bra løsning på sikt





# [12.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@11.0.1...@navikt/familie-header@12.0.0) (2023-10-02)


* Tillater Aksel v5 i flere pakker (#1188) ([352bfa1](https://github.com/navikt/familie-felles-frontend/commit/352bfa15c80c4d109f87550fea8655660cd07448)), closes [#1188](https://github.com/navikt/familie-felles-frontend/issues/1188)


### BREAKING CHANGES

* Funker ikke lenger med aksel v2 og v3

* feat(familie-datovelger, familie-endringslogg, familie-header, familie-visittkort): tillater akselV5

Og fjerner aksel v2 og v3
* Funker ikke lenger med aksel v2 og v3





## [11.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@11.0.0...@navikt/familie-header@11.0.1) (2023-09-13)

**Note:** Version bump only for package @navikt/familie-header





# [11.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.1.4...@navikt/familie-header@11.0.0) (2023-08-08)

-   støtt v4 av designsystemet (#1139) ([e100728](https://github.com/navikt/familie-felles-frontend/commit/e100728ed0d09a5bb6f5f4ca4966412af732fc67)), closes [#1139](https://github.com/navikt/familie-felles-frontend/issues/1139)

### BREAKING CHANGES

-   Krever versjon 4 av designsystemet og ikoner må hentes fra aksel-icons

-   feat(designsystem): tillater versjon 3 og 4 av designsystemet

affects: @navikt/familie-clipboard, @navikt/familie-datovelger, @navikt/familie-dokumentliste,
@navikt/familie-endringslogg, @navikt/familie-form-elements, @navikt/familie-sprakvelger,
@navikt/familie-tidslinje, @navikt/familie-visittkort

## [10.1.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.1.3...@navikt/familie-header@10.1.4) (2023-05-02)

**Note:** Version bump only for package @navikt/familie-header

## [10.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.1.2...@navikt/familie-header@10.1.3) (2023-03-02)

**Note:** Version bump only for package @navikt/familie-header

## [10.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.1.1...@navikt/familie-header@10.1.2) (2023-02-21)

**Note:** Version bump only for package @navikt/familie-header

## [10.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.1.0...@navikt/familie-header@10.1.1) (2023-02-21)

### Bug Fixes

-   **header-søk:** bruk dark mode-variant av søk i headeren ([#855](https://github.com/navikt/familie-felles-frontend/issues/855)) ([29777b3](https://github.com/navikt/familie-felles-frontend/commit/29777b384986efa1d15713054bd530db83b3accb))

# [10.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@10.0.0...@navikt/familie-header@10.1.0) (2023-02-20)

### Features

-   tillat alle v2-minors av @navikt/ds-pakker ([#853](https://github.com/navikt/familie-felles-frontend/issues/853)) ([6d11715](https://github.com/navikt/familie-felles-frontend/commit/6d117151f282db3a5149fb9706c097884b72666e))

# [10.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@9.0.1...@navikt/familie-header@10.0.0) (2023-02-20)

### chore

-   flytter @navikt/ds-... pakker til peerDependencies for å unngå… ([#822](https://github.com/navikt/familie-felles-frontend/issues/822)) ([e63254f](https://github.com/navikt/familie-felles-frontend/commit/e63254fa6ac58ca64fbdd118008656db05e58d6e))

### BREAKING CHANGES

-   @navikt/ds-... pakker må manuelt legges inn som en dependency i ef-sak-frontend/ba-sak-frontend osv.
    dersom de ikke allerede er det

-   Må ha med pakkene i devDeps for at bygging og utvikling lokalt skal fungere

## [9.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@9.0.0...@navikt/familie-header@9.0.1) (2023-01-06)

### Bug Fixes

-   **Fikset ds2 override av css class:** endrer tilbake til navds for css-classname ([#782](https://github.com/navikt/familie-felles-frontend/issues/782)) ([b2e23bd](https://github.com/navikt/familie-felles-frontend/commit/b2e23bd192234b72dff825e9b154156f8b2d2aea))

# 9.0.0 (2023-01-05)

### Features

-   **FamilieDatoVelger:** erstatter bruk av valgtDato med value ([#767](https://github.com/navikt/familie-felles-frontend/issues/767)) ([dca20c4](https://github.com/navikt/familie-felles-frontend/commit/dca20c43c7566f489453a298b0428397e0f5c2e7))

### BREAKING CHANGES

-   **FamilieDatoVelger:** valgtDato fjernes og skal nå bruke value

# 8.0.0 (2023-01-03)

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

# 7.0.0 (2023-01-02)

### chore

-   **root:** skal ta i bruk v2 av designsystemet ([#751](https://github.com/navikt/familie-felles-frontend/issues/751)) ([37dc86c](https://github.com/navikt/familie-felles-frontend/commit/37dc86c804a0237d79ce9986642f6a15ff40168b))

### BREAKING CHANGES

-   **root:** Oppgradering medfører at vi må bytte fra --navds prefix til --a der vi importerer styling/tokens

-   Fix. Skal ha riktig verjsonsnummer

-   Midlertidig fiks. Skal ha med props pga. typefeil i material-ui

-   Må te med props for at bygg ikke skal feile

## 6.0.10 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 6.0.9 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 6.0.8 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-header

## 6.0.7 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 6.0.6 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 6.0.5 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-header

## 6.0.4 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-header

## 6.0.3 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 6.0.2 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-header

## 6.0.1 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-header

# [6.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@5.0.1...@navikt/familie-header@6.0.0) (2022-09-20)

### chore

-   **header:** tar i bruk versjon 1 av designsystemet ([#612](https://github.com/navikt/familie-felles-frontend/issues/612)) ([7fa3e1b](https://github.com/navikt/familie-felles-frontend/commit/7fa3e1b43a2007f0c9589ddf9bfc3458088ec77a))

### BREAKING CHANGES

-   **header:** Ny versjon av designsystem. Vil dra inn ny styling som også treffer andre pakker

## [5.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@5.0.0...@navikt/familie-header@5.0.1) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-header

# [5.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.5...@navikt/familie-header@5.0.0) (2022-07-21)

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

## [4.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.4...@navikt/familie-header@4.0.5) (2022-07-12)

### Reverts

-   Revert "chore(familie-header): tar i bruk dropdown fra designsystemet. Vil unngå å bruke deprecated pakke "@" (#460) ([c6981f3](https://github.com/navikt/familie-felles-frontend/commit/c6981f30bc07179a65dcc2804e02b7bd3a718dfb)), closes [#460](https://github.com/navikt/familie-felles-frontend/issues/460)

## [4.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.3...@navikt/familie-header@4.0.4) (2022-04-26)

**Note:** Version bump only for package @navikt/familie-header

## [4.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.2...@navikt/familie-header@4.0.3) (2022-04-05)

**Note:** Version bump only for package @navikt/familie-header

## [4.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.1...@navikt/familie-header@4.0.2) (2022-03-10)

**Note:** Version bump only for package @navikt/familie-header

## [4.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@4.0.0...@navikt/familie-header@4.0.1) (2022-02-25)

**Note:** Version bump only for package @navikt/familie-header

# [4.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.2.2...@navikt/familie-header@4.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [3.2.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.2.1...@navikt/familie-header@3.2.2) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-header

## [3.2.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.2.0...@navikt/familie-header@3.2.1) (2021-12-08)

**Note:** Version bump only for package @navikt/familie-header

# [3.2.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.1.0...@navikt/familie-header@3.2.0) (2021-10-20)

### Features

-   **header:** dersom man inkluderer tittelOnClick i props benyttes ik… ([#434](https://github.com/navikt/familie-felles-frontend/issues/434)) ([5d97a63](https://github.com/navikt/familie-felles-frontend/commit/5d97a639352956293d47b253cb158a803afb2d51))

# [3.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.25...@navikt/familie-header@3.1.0) (2021-10-18)

### Features

-   **familie-header:** lagt til onClick event handling på headeren ([#433](https://github.com/navikt/familie-felles-frontend/issues/433)) ([77ee30b](https://github.com/navikt/familie-felles-frontend/commit/77ee30be4b3bfc252e278dcd030c42261dd6c0f9))

## [3.0.25](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.24...@navikt/familie-header@3.0.25) (2021-10-18)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.24](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.23...@navikt/familie-header@3.0.24) (2021-10-05)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.23](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.22...@navikt/familie-header@3.0.23) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.22](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.21...@navikt/familie-header@3.0.22) (2021-09-03)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.21](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.20...@navikt/familie-header@3.0.21) (2021-09-02)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.20](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.19...@navikt/familie-header@3.0.20) (2021-08-19)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.19](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.18...@navikt/familie-header@3.0.19) (2021-06-24)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.18](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.17...@navikt/familie-header@3.0.18) (2021-06-15)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.17](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.16...@navikt/familie-header@3.0.17) (2021-05-20)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.16](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.15...@navikt/familie-header@3.0.16) (2021-05-10)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.15](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.14...@navikt/familie-header@3.0.15) (2021-05-07)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.14](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.13...@navikt/familie-header@3.0.14) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.12...@navikt/familie-header@3.0.13) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.11...@navikt/familie-header@3.0.12) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.10...@navikt/familie-header@3.0.11) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.9...@navikt/familie-header@3.0.10) (2021-04-27)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.8...@navikt/familie-header@3.0.9) (2021-04-14)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.7...@navikt/familie-header@3.0.8) (2021-04-14)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.6...@navikt/familie-header@3.0.7) (2021-04-13)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.5...@navikt/familie-header@3.0.6) (2021-04-09)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.4...@navikt/familie-header@3.0.5) (2021-03-22)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.3...@navikt/familie-header@3.0.4) (2021-03-11)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.2...@navikt/familie-header@3.0.3) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.1...@navikt/familie-header@3.0.2) (2021-03-03)

**Note:** Version bump only for package @navikt/familie-header

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@3.0.0...@navikt/familie-header@3.0.1) (2021-02-25)

**Note:** Version bump only for package @navikt/familie-header

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.28...@navikt/familie-header@3.0.0) (2021-02-24)

-   Feature/uu språkvelger (#276) ([22f94a2](https://github.com/navikt/familie-felles-frontend/commit/22f94a2073333e044ec00cf09d5ea5f15774a07d)), closes [#276](https://github.com/navikt/familie-felles-frontend/issues/276)

### BREAKING CHANGES

-   Props har endret seg

## [2.0.28](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.27...@navikt/familie-header@2.0.28) (2021-02-21)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.27](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.26...@navikt/familie-header@2.0.27) (2021-02-16)

### Bug Fixes

-   **familie-header:** fikser bug hvor søk på nytt gyldig fnr ikke trigget søk. Setter riktigere css p ([772d373](https://github.com/navikt/familie-felles-frontend/commit/772d3736a1b6920243fd1a194b62587c5faf2ca0))
-   **familie-header:** retter UU bug hvor knapp ikke hadde beskrivende tekst. ([f0f7d2d](https://github.com/navikt/familie-felles-frontend/commit/f0f7d2d7e5a71bf73ff1175d221309aa14509e12))

## [2.0.26](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.25...@navikt/familie-header@2.0.26) (2021-02-16)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.25](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.24...@navikt/familie-header@2.0.25) (2021-02-15)

### Bug Fixes

-   **familie-header:** fikser bug hvor handleGlobalClick ikke klarte å få tak i elementer i dom'en via ([86d11a0](https://github.com/navikt/familie-felles-frontend/commit/86d11a0611a3165f76a36f799862b41a09942063))

## [2.0.24](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.23...@navikt/familie-header@2.0.24) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.23](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.22...@navikt/familie-header@2.0.23) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.22](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.21...@navikt/familie-header@2.0.22) (2021-02-11)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.21](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.20...@navikt/familie-header@2.0.21) (2021-01-21)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.20](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.19...@navikt/familie-header@2.0.20) (2020-12-10)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.19](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.18...@navikt/familie-header@2.0.19) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.18](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.17...@navikt/familie-header@2.0.18) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.17](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.16...@navikt/familie-header@2.0.17) (2020-11-26)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.16](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.15...@navikt/familie-header@2.0.16) (2020-11-24)

### Bug Fixes

-   upgrade nav-frontend-alertstriper-style from 2.0.17 to 2.0.23 ([#141](https://github.com/navikt/familie-felles-frontend/issues/141)) ([05f0b1c](https://github.com/navikt/familie-felles-frontend/commit/05f0b1cd15942823918aa1bcfbc8c88dfab9d5b2))
-   upgrade nav-frontend-ikoner-assets from 2.0.3 to 2.0.8 ([#142](https://github.com/navikt/familie-felles-frontend/issues/142)) ([6bed4e0](https://github.com/navikt/familie-felles-frontend/commit/6bed4e0ca619df70df9c02883e242fde469f2482))
-   upgrade nav-frontend-js-utils from 1.0.13 to 1.0.15 ([#144](https://github.com/navikt/familie-felles-frontend/issues/144)) ([2bfbacb](https://github.com/navikt/familie-felles-frontend/commit/2bfbacbc70297d538f77953ab93a5fd8a7aa6978))
-   upgrade nav-frontend-paneler-style from 0.3.21 to 0.3.25 ([#143](https://github.com/navikt/familie-felles-frontend/issues/143)) ([973efd6](https://github.com/navikt/familie-felles-frontend/commit/973efd6114669b497e14044aa5e1db6ccf48b8d1))
-   upgrade nav-frontend-popover-style from 0.0.5 to 0.0.8 ([#145](https://github.com/navikt/familie-felles-frontend/issues/145)) ([6621896](https://github.com/navikt/familie-felles-frontend/commit/6621896620f23799998ed7d435611b2717ebca29))

## [2.0.15](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.14...@navikt/familie-header@2.0.15) (2020-11-19)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.14](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.13...@navikt/familie-header@2.0.14) (2020-11-18)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.12...@navikt/familie-header@2.0.13) (2020-11-11)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.11...@navikt/familie-header@2.0.12) (2020-10-30)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.10...@navikt/familie-header@2.0.11) (2020-10-15)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.9...@navikt/familie-header@2.0.10) (2020-10-14)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.8...@navikt/familie-header@2.0.9) (2020-10-05)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.7...@navikt/familie-header@2.0.8) (2020-09-30)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.6...@navikt/familie-header@2.0.7) (2020-08-19)

### Bug Fixes

-   upgrade nav-frontend-alertstriper-style from 2.0.15 to 2.0.17 ([#71](https://github.com/navikt/familie-felles-frontend/issues/71)) ([d9570f0](https://github.com/navikt/familie-felles-frontend/commit/d9570f077935eb324564d9e0df083681f96463f4))
-   upgrade nav-frontend-js-utils from 1.0.8 to 1.0.9 ([#73](https://github.com/navikt/familie-felles-frontend/issues/73)) ([de13df4](https://github.com/navikt/familie-felles-frontend/commit/de13df49c4cbb9683413f5189cf81c46dfd5a1a2))
-   upgrade nav-frontend-paneler-style from 0.3.20 to 0.3.21 ([#74](https://github.com/navikt/familie-felles-frontend/issues/74)) ([caa7d9f](https://github.com/navikt/familie-felles-frontend/commit/caa7d9fe6a87548b02fb08e059f8b5f5f72b430c))
-   upgrade nav-frontend-popover from 0.0.24 to 0.0.28 ([#70](https://github.com/navikt/familie-felles-frontend/issues/70)) ([1741de3](https://github.com/navikt/familie-felles-frontend/commit/1741de34f6dd05772adbbb1580b37c9ff6a2e402))
-   upgrade nav-frontend-popover-style from 0.0.4 to 0.0.5 ([#72](https://github.com/navikt/familie-felles-frontend/issues/72)) ([8ef2021](https://github.com/navikt/familie-felles-frontend/commit/8ef2021940c588c66666f864fd35617ef5e7a551))

## [2.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.5...@navikt/familie-header@2.0.6) (2020-08-10)

### Performance Improvements

-   småfiks på søk ([#69](https://github.com/navikt/familie-felles-frontend/issues/69)) ([11aa91c](https://github.com/navikt/familie-felles-frontend/commit/11aa91c054683a0c13354eed54811700b99ab402))

## [2.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.4...@navikt/familie-header@2.0.5) (2020-08-10)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.3...@navikt/familie-header@2.0.4) (2020-07-01)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.2...@navikt/familie-header@2.0.3) (2020-06-15)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.1...@navikt/familie-header@2.0.2) (2020-06-08)

**Note:** Version bump only for package @navikt/familie-header

## [2.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@2.0.0...@navikt/familie-header@2.0.1) (2020-06-05)

### Bug Fixes

-   upgrade nav-frontend-alertstriper-style from 2.0.11 to 2.0.13 ([#38](https://github.com/navikt/familie-felles-frontend/issues/38)) ([a3b8330](https://github.com/navikt/familie-felles-frontend/commit/a3b83302d4a2a5e39729e730c9e745727969cf84))
-   upgrade nav-frontend-paneler-style from 0.3.18 to 0.3.19 ([#39](https://github.com/navikt/familie-felles-frontend/issues/39)) ([7caa3f5](https://github.com/navikt/familie-felles-frontend/commit/7caa3f52470795875078daaa347e01ecfca32089))

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.7...@navikt/familie-header@2.0.0) (2020-05-25)

-   refactor!: Endre "enhet" i header til å kun vises dersom den sendes inn (#37) ([2e8603a](https://github.com/navikt/familie-felles-frontend/commit/2e8603a985f82fabd97cdce37b3e16ee8fbb759c)), closes [#37](https://github.com/navikt/familie-felles-frontend/issues/37)

### BREAKING CHANGES

-   Endret type på BrukerProps som sendes inn til headeren ettersom enhet ikke lenger er interessant.

-   BA ønsker enhet inntil videre - vanskelig å ta bort noe man har - så lar den vises hvis enhet sendes med og ellers fjernes den.

## [1.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.6...@navikt/familie-header@1.0.7) (2020-05-25)

**Note:** Version bump only for package @navikt/familie-header

## [1.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.5...@navikt/familie-header@1.0.6) (2020-05-23)

**Note:** Version bump only for package @navikt/familie-header

## [1.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.3...@navikt/familie-header@1.0.5) (2020-05-23)

**Note:** Version bump only for package @navikt/familie-header

## [1.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.2...@navikt/familie-header@1.0.3) (2020-04-07)

**Note:** Version bump only for package @navikt/familie-header

## [1.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-header@1.0.1...@navikt/familie-header@1.0.2) (2020-03-26)

**Note:** Version bump only for package @navikt/familie-header

## 1.0.1 (2020-03-20)

**Note:** Version bump only for package @navikt/familie-header
