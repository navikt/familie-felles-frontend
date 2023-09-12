# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [11.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@10.0.0...@navikt/familie-visittkort@11.0.0) (2023-09-12)

-   Gjør familie-clipboard deprecated (#1144) ([bbbcbe8](https://github.com/navikt/familie-felles-frontend/commit/bbbcbe8870da8eda69bf22f19903d6609ea914e5)), closes [#1144](https://github.com/navikt/familie-felles-frontend/issues/1144)

### BREAKING CHANGES

-   Fungerer kun med aksel v4

-   feat(familie-visittkort): legg til ds-tokens@v4 i yarn.lock

affects: @navikt/familie-visittkort

-   docs(familie-clipboard): oppdaterer readme for familie-clipboard med at den nå er deprecated

affects: @navikt/familie-clipboard

# [10.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@9.0.0...@navikt/familie-visittkort@10.0.0) (2023-08-08)

-   støtt v4 av designsystemet (#1139) ([e100728](https://github.com/navikt/familie-felles-frontend/commit/e100728ed0d09a5bb6f5f4ca4966412af732fc67)), closes [#1139](https://github.com/navikt/familie-felles-frontend/issues/1139)

### BREAKING CHANGES

-   Krever versjon 4 av designsystemet og ikoner må hentes fra aksel-icons

-   feat(designsystem): tillater versjon 3 og 4 av designsystemet

affects: @navikt/familie-clipboard, @navikt/familie-datovelger, @navikt/familie-dokumentliste,
@navikt/familie-endringslogg, @navikt/familie-form-elements, @navikt/familie-sprakvelger,
@navikt/familie-tidslinje, @navikt/familie-visittkort

# [9.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@8.1.1...@navikt/familie-visittkort@9.0.0) (2023-03-17)

### Features

-   **Lagt inn alder på visittkort:** lagt inn alder på visittkort etter navn ([#889](https://github.com/navikt/familie-felles-frontend/issues/889)) ([b25dd06](https://github.com/navikt/familie-felles-frontend/commit/b25dd0653d2c6ae443dad022a8adbd1e58e9ab3e))

### BREAKING CHANGES

-   **Lagt inn alder på visittkort:** familie-visittkort

## [8.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@8.1.0...@navikt/familie-visittkort@8.1.1) (2023-03-14)

**Note:** Version bump only for package @navikt/familie-visittkort

# [8.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@8.0.0...@navikt/familie-visittkort@8.1.0) (2023-02-20)

### Features

-   tillat alle v2-minors av @navikt/ds-pakker ([#853](https://github.com/navikt/familie-felles-frontend/issues/853)) ([6d11715](https://github.com/navikt/familie-felles-frontend/commit/6d117151f282db3a5149fb9706c097884b72666e))

# [8.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@7.0.0...@navikt/familie-visittkort@8.0.0) (2023-02-20)

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

## 4.0.15 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 4.0.14 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 4.0.13 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-visittkort

## 4.0.12 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 4.0.11 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 4.0.10 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-visittkort

## 4.0.9 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-visittkort

## 4.0.8 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 4.0.7 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-visittkort

## 4.0.6 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-visittkort

## [4.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@4.0.4...@navikt/familie-visittkort@4.0.5) (2022-09-20)

**Note:** Version bump only for package @navikt/familie-visittkort

## [4.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@4.0.3...@navikt/familie-visittkort@4.0.4) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-visittkort

## [4.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@4.0.2...@navikt/familie-visittkort@4.0.3) (2022-09-19)

**Note:** Version bump only for package @navikt/familie-visittkort

## [4.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@4.0.1...@navikt/familie-visittkort@4.0.2) (2022-09-01)

### Bug Fixes

-   **tidslinje, skjema:** fikset import av ds-css i familie-tidslinje o… ([#575](https://github.com/navikt/familie-felles-frontend/issues/575)) ([fe821a2](https://github.com/navikt/familie-felles-frontend/commit/fe821a2083a47f68a517f94dd519f98dfae5d3b0))

## [4.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@4.0.0...@navikt/familie-visittkort@4.0.1) (2022-08-04)

### Bug Fixes

-   **visittkort:** sender med klassenavn så style kan overskrives ([#529](https://github.com/navikt/familie-felles-frontend/issues/529)) ([43b9ad4](https://github.com/navikt/familie-felles-frontend/commit/43b9ad42508611c5a2977549acf204f5bdb1dc4e))

# [4.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.5...@navikt/familie-visittkort@4.0.0) (2022-07-22)

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

## [3.0.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.4...@navikt/familie-visittkort@3.0.5) (2022-07-21)

**Note:** Version bump only for package @navikt/familie-visittkort

## [3.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.3...@navikt/familie-visittkort@3.0.4) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-visittkort

## [3.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.2...@navikt/familie-visittkort@3.0.3) (2022-06-16)

**Note:** Version bump only for package @navikt/familie-visittkort

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.1...@navikt/familie-visittkort@3.0.2) (2022-04-05)

**Note:** Version bump only for package @navikt/familie-visittkort

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@3.0.0...@navikt/familie-visittkort@3.0.1) (2022-02-25)

**Note:** Version bump only for package @navikt/familie-visittkort

# [3.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.28...@navikt/familie-visittkort@3.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [2.1.28](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.27...@navikt/familie-visittkort@2.1.28) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.27](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.26...@navikt/familie-visittkort@2.1.27) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.26](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.25...@navikt/familie-visittkort@2.1.26) (2021-08-17)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.25](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.24...@navikt/familie-visittkort@2.1.25) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.24](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.23...@navikt/familie-visittkort@2.1.24) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.23](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.22...@navikt/familie-visittkort@2.1.23) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.22](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.21...@navikt/familie-visittkort@2.1.22) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.21](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.20...@navikt/familie-visittkort@2.1.21) (2021-02-11)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.20](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.19...@navikt/familie-visittkort@2.1.20) (2021-02-08)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.19](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.18...@navikt/familie-visittkort@2.1.19) (2021-02-08)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.18](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.17...@navikt/familie-visittkort@2.1.18) (2020-12-14)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.17](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.16...@navikt/familie-visittkort@2.1.17) (2020-12-10)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.16](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.15...@navikt/familie-visittkort@2.1.16) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.15](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.14...@navikt/familie-visittkort@2.1.15) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.14](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.13...@navikt/familie-visittkort@2.1.14) (2020-11-26)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.12...@navikt/familie-visittkort@2.1.13) (2020-11-19)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.11...@navikt/familie-visittkort@2.1.12) (2020-11-18)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.10...@navikt/familie-visittkort@2.1.11) (2020-11-11)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.9...@navikt/familie-visittkort@2.1.10) (2020-10-30)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.8...@navikt/familie-visittkort@2.1.9) (2020-10-15)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.7...@navikt/familie-visittkort@2.1.8) (2020-10-14)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.6...@navikt/familie-visittkort@2.1.7) (2020-09-30)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.5...@navikt/familie-visittkort@2.1.6) (2020-07-01)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.4...@navikt/familie-visittkort@2.1.5) (2020-06-30)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.3...@navikt/familie-visittkort@2.1.4) (2020-03-31)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.2...@navikt/familie-visittkort@2.1.3) (2020-03-20)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.1...@navikt/familie-visittkort@2.1.2) (2020-03-06)

**Note:** Version bump only for package @navikt/familie-visittkort

## [2.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.1.0...@navikt/familie-visittkort@2.1.1) (2020-02-11)

**Note:** Version bump only for package @navikt/familie-visittkort

# [2.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-visittkort@2.0.0...@navikt/familie-visittkort@2.1.0) (2020-02-04)

### Features

-   **familie-backend, familie-visittkort:** lager backend serveren til en modul. Retter byggfeil i fa ([fdf6d71](https://github.com/navikt/familie-felles-frontend/commit/fdf6d712fd917c927122f9c2c679833ce741537e))

# 2.0.0 (2020-02-04)

-   Feature/visittkort (#15) ([8b11d71](https://github.com/navikt/familie-felles-frontend/commit/8b11d71e2fe84342e5c2310a817c6631e379f1bc)), closes [#15](https://github.com/navikt/familie-felles-frontend/issues/15)

### BREAKING CHANGES

-   Nye pakker: Clipboard, ikoner, typer og visittkort

-   docs(Introduksjon): justert på dokumentasjonen for introduksjon. Sletter noen .d.ts filer som ikke t

affects: @navikt/visittkort

-   docs(All): legger til kort readme for alle pakker. Denne blir tilgjengelig på npm."

affects: @navikt/familie-backend, @navikt/familie-clipboard, @navikt/familie-ikoner,
@navikt/familie-typer, @navikt/visittkort

# 1.0.0 (2020-02-04)

-   Feature/visittkort (#15) ([8b11d71](https://github.com/navikt/familie-felles-frontend/commit/8b11d71e2fe84342e5c2310a817c6631e379f1bc)), closes [#15](https://github.com/navikt/familie-felles-frontend/issues/15)

### BREAKING CHANGES

-   Nye pakker: Clipboard, ikoner, typer og visittkort

-   docs(Introduksjon): justert på dokumentasjonen for introduksjon. Sletter noen .d.ts filer som ikke t

affects: @navikt/visittkort

-   docs(All): legger til kort readme for alle pakker. Denne blir tilgjengelig på npm."

affects: @navikt/familie-backend, @navikt/familie-clipboard, @navikt/familie-ikoner,
@navikt/familie-typer, @navikt/visittkort

# 1.0.0 (2020-02-04)

-   Feature/visittkort (#15) ([8b11d71](https://github.com/navikt/familie-felles-frontend/commit/8b11d71e2fe84342e5c2310a817c6631e379f1bc)), closes [#15](https://github.com/navikt/familie-felles-frontend/issues/15)

### BREAKING CHANGES

-   Nye pakker: Clipboard, ikoner, typer og visittkort

-   docs(Introduksjon): justert på dokumentasjonen for introduksjon. Sletter noen .d.ts filer som ikke t

affects: @navikt/visittkort

-   docs(All): legger til kort readme for alle pakker. Denne blir tilgjengelig på npm."

affects: @navikt/familie-backend, @navikt/familie-clipboard, @navikt/familie-ikoner,
@navikt/familie-typer, @navikt/visittkort
