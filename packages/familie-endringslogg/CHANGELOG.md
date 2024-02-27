# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [12.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@11.0.0...@navikt/familie-endringslogg@12.0.0) (2024-02-27)


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





# [11.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@10.0.0...@navikt/familie-endringslogg@11.0.0) (2024-01-05)


### chore

* **alle komponenter:** oppdatert avhengigheter til alle komponenter ([#1352](https://github.com/navikt/familie-felles-frontend/issues/1352)) ([571a7af](https://github.com/navikt/familie-felles-frontend/commit/571a7af3a2da19d3365869a276a43339a1e34581))


### BREAKING CHANGES

* **alle komponenter:** Fjernet støtte for react 17 og nav ds <=4

* familie-tidslinje må ha devDependency til dayjs - foreløpig går dette bra fordi familie-datovelger har denne dependencien, men det er ikke en bra løsning på sikt





# [10.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@9.0.3...@navikt/familie-endringslogg@10.0.0) (2023-10-02)


* Tillater Aksel v5 i flere pakker (#1188) ([352bfa1](https://github.com/navikt/familie-felles-frontend/commit/352bfa15c80c4d109f87550fea8655660cd07448)), closes [#1188](https://github.com/navikt/familie-felles-frontend/issues/1188)


### BREAKING CHANGES

* Funker ikke lenger med aksel v2 og v3

* feat(familie-datovelger, familie-endringslogg, familie-header, familie-visittkort): tillater akselV5

Og fjerner aksel v2 og v3
* Funker ikke lenger med aksel v2 og v3





## [9.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@9.0.2...@navikt/familie-endringslogg@9.0.3) (2023-09-19)

**Note:** Version bump only for package @navikt/familie-endringslogg





## [9.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@9.0.1...@navikt/familie-endringslogg@9.0.2) (2023-09-18)

**Note:** Version bump only for package @navikt/familie-endringslogg





## [9.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@9.0.0...@navikt/familie-endringslogg@9.0.1) (2023-09-11)

**Note:** Version bump only for package @navikt/familie-endringslogg

# [9.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@8.1.1...@navikt/familie-endringslogg@9.0.0) (2023-08-08)

-   støtt v4 av designsystemet (#1139) ([e100728](https://github.com/navikt/familie-felles-frontend/commit/e100728ed0d09a5bb6f5f4ca4966412af732fc67)), closes [#1139](https://github.com/navikt/familie-felles-frontend/issues/1139)

### BREAKING CHANGES

-   Krever versjon 4 av designsystemet og ikoner må hentes fra aksel-icons

-   feat(designsystem): tillater versjon 3 og 4 av designsystemet

affects: @navikt/familie-clipboard, @navikt/familie-datovelger, @navikt/familie-dokumentliste,
@navikt/familie-endringslogg, @navikt/familie-form-elements, @navikt/familie-sprakvelger,
@navikt/familie-tidslinje, @navikt/familie-visittkort

## [8.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@8.1.0...@navikt/familie-endringslogg@8.1.1) (2023-03-14)

**Note:** Version bump only for package @navikt/familie-endringslogg

# [8.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@8.0.0...@navikt/familie-endringslogg@8.1.0) (2023-02-20)

### Features

-   tillat alle v2-minors av @navikt/ds-pakker ([#853](https://github.com/navikt/familie-felles-frontend/issues/853)) ([6d11715](https://github.com/navikt/familie-felles-frontend/commit/6d117151f282db3a5149fb9706c097884b72666e))

# [8.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@7.0.0...@navikt/familie-endringslogg@8.0.0) (2023-02-20)

### chore

-   **endringslogg:** flytt @navikt/ds-pakker til devdeps ([#852](https://github.com/navikt/familie-felles-frontend/issues/852)) ([8df5649](https://github.com/navikt/familie-felles-frontend/commit/8df5649ca96d7966b36eef51315d679c33b453d6))

### BREAKING CHANGES

-   **endringslogg:** @navikt/ds-pakker må installeres i konsumenten

# [7.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@6.0.0...@navikt/familie-endringslogg@7.0.0) (2023-02-20)

### chore

-   flytter @navikt/ds-... pakker til peerDependencies for å unngå… ([#822](https://github.com/navikt/familie-felles-frontend/issues/822)) ([e63254f](https://github.com/navikt/familie-felles-frontend/commit/e63254fa6ac58ca64fbdd118008656db05e58d6e))

### BREAKING CHANGES

-   @navikt/ds-... pakker må manuelt legges inn som en dependency i ef-sak-frontend/ba-sak-frontend osv.
    dersom de ikke allerede er det

-   Må ha med pakkene i devDeps for at bygging og utvikling lokalt skal fungere

# 6.0.0 (2023-01-05)

### Features

-   **FamilieDatoVelger:** erstatter bruk av valgtDato med value ([#767](https://github.com/navikt/familie-felles-frontend/issues/767)) ([dca20c4](https://github.com/navikt/familie-felles-frontend/commit/dca20c43c7566f489453a298b0428397e0f5c2e7))

### BREAKING CHANGES

-   **FamilieDatoVelger:** valgtDato fjernes og skal nå bruke value

# 5.0.0 (2023-01-03)

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

# 4.0.0 (2023-01-02)

### chore

-   **root:** skal ta i bruk v2 av designsystemet ([#751](https://github.com/navikt/familie-felles-frontend/issues/751)) ([37dc86c](https://github.com/navikt/familie-felles-frontend/commit/37dc86c804a0237d79ce9986642f6a15ff40168b))

### BREAKING CHANGES

-   **root:** Oppgradering medfører at vi må bytte fra --navds prefix til --a der vi importerer styling/tokens

-   Fix. Skal ha riktig verjsonsnummer

-   Midlertidig fiks. Skal ha med props pga. typefeil i material-ui

-   Må te med props for at bygg ikke skal feile

## 3.0.12 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 3.0.11 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 3.0.10 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-endringslogg

## 3.0.9 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 3.0.8 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 3.0.7 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-endringslogg

## 3.0.6 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-endringslogg

## 3.0.5 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 3.0.4 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-endringslogg

## 3.0.3 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-endringslogg

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@3.0.1...@navikt/familie-endringslogg@3.0.2) (2022-10-24)

**Note:** Version bump only for package @navikt/familie-endringslogg

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@3.0.0...@navikt/familie-endringslogg@3.0.1) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-endringslogg

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@2.0.3...@navikt/familie-endringslogg@3.0.0) (2022-07-15)

### Features

-   **endringslogg:** viser antall uleste endringsmeldinger. Endrer farge. ([#521](https://github.com/navikt/familie-felles-frontend/issues/521)) ([c56d693](https://github.com/navikt/familie-felles-frontend/commit/c56d69329068bbaed0ed0ad391ee70b71d0e042f))

### BREAKING CHANGES

-   **endringslogg:** Endrer utseende

## [2.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@2.0.2...@navikt/familie-endringslogg@2.0.3) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-endringslogg

## [2.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@2.0.1...@navikt/familie-endringslogg@2.0.2) (2022-05-05)

### Bug Fixes

-   **familie-endringslogg:** skal kopiere med css-filer til dist-mappen i familie-endringslogg ([#463](https://github.com/navikt/familie-felles-frontend/issues/463)) ([e4b95f5](https://github.com/navikt/familie-felles-frontend/commit/e4b95f568688e729651d4d3b0974b1c6a1703e9c))

## [2.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@2.0.0...@navikt/familie-endringslogg@2.0.1) (2022-05-05)

### Bug Fixes

-   **familie-endringslogg:** vil trigge bygg av patch ([6e55618](https://github.com/navikt/familie-felles-frontend/commit/6e55618350a6df130522cf08e52a0c5966989cad))

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@1.2.2...@navikt/familie-endringslogg@2.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [1.2.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@1.2.1...@navikt/familie-endringslogg@1.2.2) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-endringslogg

## [1.2.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@1.2.0...@navikt/familie-endringslogg@1.2.1) (2022-01-11)

**Note:** Version bump only for package @navikt/familie-endringslogg

# [1.2.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-endringslogg@1.1.0...@navikt/familie-endringslogg@1.2.0) (2022-01-07)

### Features

-   **Endringslogg:** lagt inn støtte for intervallbasert datauthenting ([#437](https://github.com/navikt/familie-felles-frontend/issues/437)) ([32fa82a](https://github.com/navikt/familie-felles-frontend/commit/32fa82ab7be3195f3932906729fe6ce9eb23855a))

# 1.1.0 (2022-01-04)

### Features

-   **endringslogg:** ny pakke - endringslogg for å vise endringer i lø… ([#436](https://github.com/navikt/familie-felles-frontend/issues/436)) ([709a85a](https://github.com/navikt/familie-felles-frontend/commit/709a85a00bad24ee181ba42940ef325f13534358))
