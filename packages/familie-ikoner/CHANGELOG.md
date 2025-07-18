# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.1.2...@navikt/familie-ikoner@9.1.3) (2025-07-04)

**Note:** Version bump only for package @navikt/familie-ikoner





## [9.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.1.1...@navikt/familie-ikoner@9.1.2) (2025-06-19)

**Note:** Version bump only for package @navikt/familie-ikoner





## [9.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.1.0...@navikt/familie-ikoner@9.1.1) (2025-02-26)

**Note:** Version bump only for package @navikt/familie-ikoner





# [9.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.0.3...@navikt/familie-ikoner@9.1.0) (2025-02-14)


### Features

* **header:** mulighet for visning av label og ikon på header ([#1605](https://github.com/navikt/familie-felles-frontend/issues/1605)) ([27cfe9d](https://github.com/navikt/familie-felles-frontend/commit/27cfe9ddcd611019d7000ae7272d39aaea9fff83))





## [9.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.0.2...@navikt/familie-ikoner@9.0.3) (2025-01-06)

**Note:** Version bump only for package @navikt/familie-ikoner





## [9.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.0.1...@navikt/familie-ikoner@9.0.2) (2024-08-08)

**Note:** Version bump only for package @navikt/familie-ikoner





## [9.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@9.0.0...@navikt/familie-ikoner@9.0.1) (2024-01-30)

**Note:** Version bump only for package @navikt/familie-ikoner





# [9.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@8.0.0...@navikt/familie-ikoner@9.0.0) (2024-01-16)


### Features

* **familie-visittkort:** skriv om til å bruke Aksel-primitiver for komponentlayout ([#1367](https://github.com/navikt/familie-felles-frontend/issues/1367)) ([0eea319](https://github.com/navikt/familie-felles-frontend/commit/0eea319576c76dcf8b5d0ffbbeb1d650c3b2c916))


### BREAKING CHANGES

* **familie-visittkort:** Layout av children-elementer styres nå av konsumentene og API for prop med valgfritt ikon er endret


ValgfrittIkon var tidligere en prop med en komponent som visittkortet gav props til og rendret. For
å forenkle typingen gjør vi dette ikonet til konsumentens ansvar.  Ser ut til å kun være i bruk i
ba-sak

* tilby dempet kantlinje som mulighet for FamilieVisittkort
* gjør ikonet til konsumentens ansvar for å forenkle typing
* docs: endre det ene ikoneksempelet til å vise ukjent kjønn
* docs: legg til utvidet eksempel på visittkort i storybook





# [8.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@7.0.1...@navikt/familie-ikoner@8.0.0) (2024-01-05)


### chore

* **alle komponenter:** oppdatert avhengigheter til alle komponenter ([#1352](https://github.com/navikt/familie-felles-frontend/issues/1352)) ([571a7af](https://github.com/navikt/familie-felles-frontend/commit/571a7af3a2da19d3365869a276a43339a1e34581))


### BREAKING CHANGES

* **alle komponenter:** Fjernet støtte for react 17 og nav ds <=4

* familie-tidslinje må ha devDependency til dayjs - foreløpig går dette bra fordi familie-datovelger har denne dependencien, men det er ikke en bra løsning på sikt





## [7.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@7.0.0...@navikt/familie-ikoner@7.0.1) (2023-09-13)

**Note:** Version bump only for package @navikt/familie-ikoner





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

## 4.0.13 (2022-12-22)

### Bug Fixes

-   **datovelger value prop:** endret tilbake til å ikke bruke value for å unngå uventede sideeffekter ([#763](https://github.com/navikt/familie-felles-frontend/issues/763)) ([51a51fb](https://github.com/navikt/familie-felles-frontend/commit/51a51fb6b3c253fec92ffe05d2481647498615cf))

## 4.0.12 (2022-12-12)

### Bug Fixes

-   **Eslint:** eslint fungerer ikke som forventet, har justert pakker og avhengigheter slik at det nå ([#752](https://github.com/navikt/familie-felles-frontend/issues/752)) ([2e68170](https://github.com/navikt/familie-felles-frontend/commit/2e68170e423dd1f34e3d3b40c2b379c851b911b2))

## 4.0.11 (2022-12-06)

**Note:** Version bump only for package @navikt/familie-ikoner

## 4.0.10 (2022-11-23)

### Bug Fixes

-   **endringslogg:** skal kunne se større bilder i endringsloggen. Øker maksbredden i modalen slik at ([#723](https://github.com/navikt/familie-felles-frontend/issues/723)) ([ba20f31](https://github.com/navikt/familie-felles-frontend/commit/ba20f31e711c9c5612a9a77348ebf35fff245022))

## 4.0.9 (2022-11-16)

### Bug Fixes

-   **familie-form-elements:** familieDatovelger eksponerer value men som ikke blir brukt ([#709](https://github.com/navikt/familie-felles-frontend/issues/709)) ([4797dc7](https://github.com/navikt/familie-felles-frontend/commit/4797dc7ad939d2492a3330916dca0f42d0a3177d))

## 4.0.8 (2022-11-16)

**Note:** Version bump only for package @navikt/familie-ikoner

## 4.0.7 (2022-11-15)

**Note:** Version bump only for package @navikt/familie-ikoner

## 4.0.6 (2022-11-11)

### Bug Fixes

-   **dokumentliste:** skal legge key direkte på li-elementet for logiske vedlegg. Ønsker å unngå feil ([#697](https://github.com/navikt/familie-felles-frontend/issues/697)) ([aae3526](https://github.com/navikt/familie-felles-frontend/commit/aae3526aa59256c6290ef2d97c52c3383407bf0e))

## 4.0.5 (2022-11-09)

**Note:** Version bump only for package @navikt/familie-ikoner

## 4.0.4 (2022-10-27)

**Note:** Version bump only for package @navikt/familie-ikoner

## [4.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@4.0.2...@navikt/familie-ikoner@4.0.3) (2022-09-19)

### Bug Fixes

-   **ikoner:** fjerner bruk av StatelessComponent så typescript ikke skal klage ([#600](https://github.com/navikt/familie-felles-frontend/issues/600)) ([f6a7b35](https://github.com/navikt/familie-felles-frontend/commit/f6a7b35d978ded8dbf51c0afae20496e6e910479))

## [4.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@4.0.1...@navikt/familie-ikoner@4.0.2) (2022-07-12)

**Note:** Version bump only for package @navikt/familie-ikoner

## [4.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@4.0.0...@navikt/familie-ikoner@4.0.1) (2022-02-25)

**Note:** Version bump only for package @navikt/familie-ikoner

# [4.0.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.13...@navikt/familie-ikoner@4.0.0) (2022-02-02)

### Features

-   **root:** publiser pakker til github package repository ([098043d](https://github.com/navikt/familie-felles-frontend/commit/098043dd584336c8746c391bf3bc3523dd6590fb))

### BREAKING CHANGES

-   **root:** Publiserer ikke til npmjs

Co-authored-by: Henning Håkonsen <henning.hakonsen@nav.no>

## [3.1.13](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.12...@navikt/familie-ikoner@3.1.13) (2022-01-26)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.12](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.11...@navikt/familie-ikoner@3.1.12) (2021-09-13)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.11](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.10...@navikt/familie-ikoner@3.1.11) (2021-04-28)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.10](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.9...@navikt/familie-ikoner@3.1.10) (2021-03-05)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.9](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.8...@navikt/familie-ikoner@3.1.9) (2021-02-15)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.8](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.7...@navikt/familie-ikoner@3.1.8) (2021-02-11)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.7](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.6...@navikt/familie-ikoner@3.1.7) (2020-12-10)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.6](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.5...@navikt/familie-ikoner@3.1.6) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.5](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.4...@navikt/familie-ikoner@3.1.5) (2020-11-27)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.3...@navikt/familie-ikoner@3.1.4) (2020-11-26)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.2...@navikt/familie-ikoner@3.1.3) (2020-11-19)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.1...@navikt/familie-ikoner@3.1.2) (2020-10-15)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.1.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.1.0...@navikt/familie-ikoner@3.1.1) (2020-10-14)

**Note:** Version bump only for package @navikt/familie-ikoner

# [3.1.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.0.4...@navikt/familie-ikoner@3.1.0) (2020-09-30)

### Features

-   **Legge til mulighet for å sende med bredde og høyde på familie-ikoner:** legger til optional widt ([#82](https://github.com/navikt/familie-felles-frontend/issues/82)) ([7016ffb](https://github.com/navikt/familie-felles-frontend/commit/7016ffb32e72be5f4e819518522376f6162f6f15))

## [3.0.4](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.0.3...@navikt/familie-ikoner@3.0.4) (2020-07-01)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.0.3](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.0.2...@navikt/familie-ikoner@3.0.3) (2020-03-20)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.0.2](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.0.1...@navikt/familie-ikoner@3.0.2) (2020-03-06)

**Note:** Version bump only for package @navikt/familie-ikoner

## [3.0.1](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-ikoner@3.0.0...@navikt/familie-ikoner@3.0.1) (2020-02-11)

**Note:** Version bump only for package @navikt/familie-ikoner

# 3.0.0 (2020-02-04)

-   Feature/visittkort (#15) ([8b11d71](https://github.com/navikt/familie-felles-frontend/commit/8b11d71e2fe84342e5c2310a817c6631e379f1bc)), closes [#15](https://github.com/navikt/familie-felles-frontend/issues/15)

### BREAKING CHANGES

-   Nye pakker: Clipboard, ikoner, typer og visittkort

-   docs(Introduksjon): justert på dokumentasjonen for introduksjon. Sletter noen .d.ts filer som ikke t

affects: @navikt/visittkort

-   docs(All): legger til kort readme for alle pakker. Denne blir tilgjengelig på npm."

affects: @navikt/familie-backend, @navikt/familie-clipboard, @navikt/familie-ikoner,
@navikt/familie-typer, @navikt/visittkort

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
