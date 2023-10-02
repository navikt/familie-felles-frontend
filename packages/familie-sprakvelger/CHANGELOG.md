# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@10.0.0...@navikt/familie-sprakvelger@10.0.1) (2023-10-02)

**Note:** Version bump only for package @navikt/familie-sprakvelger





# [10.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@9.0.1...@navikt/familie-sprakvelger@10.0.0) (2023-09-22)


* familie-sprakvelger: Bytter ut ds-icons og fjerner IntlProvider (#1173) ([36159aa](https://github.com/navikt/familie-felles-frontend/commit/36159aa4ebc1805e3649dbeaff34132b2b030b77)), closes [#1173](https://github.com/navikt/familie-felles-frontend/issues/1173)


### BREAKING CHANGES

* IntlProvider er fjernet og må implementeres i konsumenten. Krever aksel v5 og react
18.

* build(oppdatert yarn.lock etter pakkeendringer i familie-sprakvelger): oppdatert yarn.lock

Oppdatert yarn.lock etter pakkeendringer i familie-sprakvelger
* Må ha oppdatert yarn.lock for at nye sprakvelger skal funke

* Oppdaterer yarn.lock-filen





## [9.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@9.0.0...@navikt/familie-sprakvelger@9.0.1) (2023-09-13)

**Note:** Version bump only for package @navikt/familie-sprakvelger





# [9.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@8.1.3...@navikt/familie-sprakvelger@9.0.0) (2023-08-08)

-   støtt v4 av designsystemet (#1139) ([e100728](https://github.com/navikt/familie-felles-frontend/commit/e100728ed0d09a5bb6f5f4ca4966412af732fc67)), closes [#1139](https://github.com/navikt/familie-felles-frontend/issues/1139)

### BREAKING CHANGES

-   Krever versjon 4 av designsystemet og ikoner må hentes fra aksel-icons

-   feat(designsystem): tillater versjon 3 og 4 av designsystemet

affects: @navikt/familie-clipboard, @navikt/familie-datovelger, @navikt/familie-dokumentliste,
@navikt/familie-endringslogg, @navikt/familie-form-elements, @navikt/familie-sprakvelger,
@navikt/familie-tidslinje, @navikt/familie-visittkort

## [8.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@8.1.2...@navikt/familie-sprakvelger@8.1.3) (2023-08-02)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [8.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@8.1.1...@navikt/familie-sprakvelger@8.1.2) (2023-07-04)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [8.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@8.1.0...@navikt/familie-sprakvelger@8.1.1) (2023-03-14)

**Note:** Version bump only for package @navikt/familie-sprakvelger

# [8.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@8.0.0...@navikt/familie-sprakvelger@8.1.0) (2023-02-20)

### Features

-   tillat alle v2-minors av @navikt/ds-pakker ([#853](https://github.com/navikt/familie-felles-frontend/issues/853)) ([6d11715](https://github.com/navikt/familie-felles-frontend/commit/6d117151f282db3a5149fb9706c097884b72666e))

# [8.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@7.0.0...@navikt/familie-sprakvelger@8.0.0) (2023-02-20)

### chore

-   flytter @navikt/ds-... pakker til peerDependencies for å unngå… ([#822](https://github.com/navikt/familie-felles-frontend/issues/822)) ([e63254f](https://github.com/navikt/familie-felles-frontend/commit/e63254fa6ac58ca64fbdd118008656db05e58d6e))

### BREAKING CHANGES

-   @navikt/ds-... pakker må manuelt legges inn som en dependency i ef-sak-frontend/ba-sak-frontend osv.
    dersom de ikke allerede er det

-   Må ha med pakkene i devDeps for at bygging og utvikling lokalt skal fungere

# 7.0.0 (2023-01-05)

### Features

-   **FamilieDatoVelger:** erstatter bruk av valgtDato med value ([#767](https://github.com/navikt/familie-felles-frontend/issues/767)) ([dca20c4](https://github.com/navikt/familie-felles-frontend/commit/dca20c43c7566f489453a298b0428397e0f5c2e7))

### BREAKING CHANGES

-   **FamilieDatoVelger:** valgtDato fjernes og skal nå bruke value

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

## 4.0.20 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 4.0.19 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 4.0.18 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## 4.0.17 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 4.0.16 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 4.0.15 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## 4.0.14 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## 4.0.13 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 4.0.12 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## 4.0.11 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.9...@navikt/familie-sprakvelger@4.0.10) (2022-10-20)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.8...@navikt/familie-sprakvelger@4.0.9) (2022-10-12)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.7...@navikt/familie-sprakvelger@4.0.8) (2022-10-12)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.6...@navikt/familie-sprakvelger@4.0.7) (2022-09-30)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.5...@navikt/familie-sprakvelger@4.0.6) (2022-09-20)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.4...@navikt/familie-sprakvelger@4.0.5) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.3...@navikt/familie-sprakvelger@4.0.4) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.2...@navikt/familie-sprakvelger@4.0.3) (2022-09-06)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.1...@navikt/familie-sprakvelger@4.0.2) (2022-08-29)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [4.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@4.0.0...@navikt/familie-sprakvelger@4.0.1) (2022-08-29)

**Note:** Version bump only for package @navikt/familie-sprakvelger

# [4.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.5...@navikt/familie-sprakvelger@4.0.0) (2022-07-22)

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

## [3.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.4...@navikt/familie-sprakvelger@3.0.5) (2022-07-21)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [3.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.3...@navikt/familie-sprakvelger@3.0.4) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [3.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.2...@navikt/familie-sprakvelger@3.0.3) (2022-04-05)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.1...@navikt/familie-sprakvelger@3.0.2) (2022-03-10)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@3.0.0...@navikt/familie-sprakvelger@3.0.1) (2022-02-25)

**Note:** Version bump only for package @navikt/familie-sprakvelger

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.30...@navikt/familie-sprakvelger@3.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [2.0.30](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.29...@navikt/familie-sprakvelger@2.0.30) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.29](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.28...@navikt/familie-sprakvelger@2.0.29) (2021-10-05)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.28](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.27...@navikt/familie-sprakvelger@2.0.28) (2021-10-04)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.27](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.26...@navikt/familie-sprakvelger@2.0.27) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.26](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.25...@navikt/familie-sprakvelger@2.0.26) (2021-09-03)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.25](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.24...@navikt/familie-sprakvelger@2.0.25) (2021-09-02)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.24](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.23...@navikt/familie-sprakvelger@2.0.24) (2021-08-19)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.23](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.22...@navikt/familie-sprakvelger@2.0.23) (2021-06-24)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.22](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.21...@navikt/familie-sprakvelger@2.0.22) (2021-06-15)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.21](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.20...@navikt/familie-sprakvelger@2.0.21) (2021-06-14)

### Bug Fixes

-   **sprakvelger:** fjern 170px bredde på språkvelger ([#400](https://github.com/navikt/familie-felles-frontend/issues/400)) ([f700297](https://github.com/navikt/familie-felles-frontend/commit/f7002978c9d60bd2647653000c2cc4b628f8a444))

## [2.0.20](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.19...@navikt/familie-sprakvelger@2.0.20) (2021-06-04)

### Bug Fixes

-   **språkvelger:** gi svger aria-hidden og fjern focusable ([#393](https://github.com/navikt/familie-felles-frontend/issues/393)) ([0aed085](https://github.com/navikt/familie-felles-frontend/commit/0aed0855f775904dafcc408329ac0396c57e5008))

## [2.0.19](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.18...@navikt/familie-sprakvelger@2.0.19) (2021-05-26)

### Bug Fixes

-   **sprakvelger:** bruk intl peerDependency istedenfor egen ([#387](https://github.com/navikt/familie-felles-frontend/issues/387)) ([dddca92](https://github.com/navikt/familie-felles-frontend/commit/dddca927de5ceab9686e10b41ccef72dfa3eb883))

## [2.0.18](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.17...@navikt/familie-sprakvelger@2.0.18) (2021-05-26)

### Bug Fixes

-   **Chevron klikkbar:** gjør chevron klikkbar i språkvelgeren ([#386](https://github.com/navikt/familie-felles-frontend/issues/386)) ([3fc4d46](https://github.com/navikt/familie-felles-frontend/commit/3fc4d461a905433f88443a478e37a41a5ec9216e))

## [2.0.17](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.16...@navikt/familie-sprakvelger@2.0.17) (2021-05-20)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.16](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.15...@navikt/familie-sprakvelger@2.0.16) (2021-05-10)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.15](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.14...@navikt/familie-sprakvelger@2.0.15) (2021-05-07)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.14](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.13...@navikt/familie-sprakvelger@2.0.14) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.12...@navikt/familie-sprakvelger@2.0.13) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.11...@navikt/familie-sprakvelger@2.0.12) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.10...@navikt/familie-sprakvelger@2.0.11) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.9...@navikt/familie-sprakvelger@2.0.10) (2021-04-27)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.8...@navikt/familie-sprakvelger@2.0.9) (2021-04-14)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.7...@navikt/familie-sprakvelger@2.0.8) (2021-04-14)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.6...@navikt/familie-sprakvelger@2.0.7) (2021-04-13)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.5...@navikt/familie-sprakvelger@2.0.6) (2021-04-09)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.4...@navikt/familie-sprakvelger@2.0.5) (2021-03-22)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.3...@navikt/familie-sprakvelger@2.0.4) (2021-03-11)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.2...@navikt/familie-sprakvelger@2.0.3) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.1...@navikt/familie-sprakvelger@2.0.2) (2021-03-03)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [2.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@2.0.0...@navikt/familie-sprakvelger@2.0.1) (2021-02-25)

**Note:** Version bump only for package @navikt/familie-sprakvelger

# [2.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@1.0.4...@navikt/familie-sprakvelger@2.0.0) (2021-02-24)

-   Feature/uu språkvelger (#276) ([22f94a2](https://github.com/navikt/familie-felles-frontend/commit/22f94a2073333e044ec00cf09d5ea5f15774a07d)), closes [#276](https://github.com/navikt/familie-felles-frontend/issues/276)

### BREAKING CHANGES

-   Props har endret seg

## [1.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@1.0.3...@navikt/familie-sprakvelger@1.0.4) (2021-02-22)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [1.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@1.0.2...@navikt/familie-sprakvelger@1.0.3) (2021-02-18)

**Note:** Version bump only for package @navikt/familie-sprakvelger

## [1.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-sprakvelger@1.0.1...@navikt/familie-sprakvelger@1.0.2) (2021-02-18)

### Bug Fixes

-   **Tsconfig:** fiks dist struktur i tsconfig ([#270](https://github.com/navikt/familie-felles-frontend/issues/270)) ([2033d07](https://github.com/navikt/familie-felles-frontend/commit/2033d07fbef1c0c6cb33e9ed8943f414b6ac43e0))

## 1.0.1 (2021-02-18)

**Note:** Version bump only for package @navikt/familie-sprakvelger
