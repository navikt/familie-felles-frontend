# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.3.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-datovelger@0.2.0...@navikt/familie-datovelger@0.3.0) (2023-10-02)


* Tillater Aksel v5 i flere pakker (#1188) ([352bfa1](https://github.com/navikt/familie-felles-frontend/commit/352bfa15c80c4d109f87550fea8655660cd07448)), closes [#1188](https://github.com/navikt/familie-felles-frontend/issues/1188)


### BREAKING CHANGES

* Funker ikke lenger med aksel v2 og v3

* feat(familie-datovelger, familie-endringslogg, familie-header, familie-visittkort): tillater akselV5

Og fjerner aksel v2 og v3
* Funker ikke lenger med aksel v2 og v3





# [0.2.0](https://github.com/navikt/familie-felles-frontend/compare/@navikt/familie-datovelger@0.1.0...@navikt/familie-datovelger@0.2.0) (2023-08-08)

-   støtt v4 av designsystemet (#1139) ([e100728](https://github.com/navikt/familie-felles-frontend/commit/e100728ed0d09a5bb6f5f4ca4966412af732fc67)), closes [#1139](https://github.com/navikt/familie-felles-frontend/issues/1139)

### BREAKING CHANGES

-   Krever versjon 4 av designsystemet og ikoner må hentes fra aksel-icons

-   feat(designsystem): tillater versjon 3 og 4 av designsystemet

affects: @navikt/familie-clipboard, @navikt/familie-datovelger, @navikt/familie-dokumentliste,
@navikt/familie-endringslogg, @navikt/familie-form-elements, @navikt/familie-sprakvelger,
@navikt/familie-tidslinje, @navikt/familie-visittkort

# 0.1.0 (2023-08-02)

-   Refactor/datovelger i egen pakke (#1138) ([a264253](https://github.com/navikt/familie-felles-frontend/commit/a264253271c2dc0bad97b42a2f8fe715f23698ce)), closes [#1138](https://github.com/navikt/familie-felles-frontend/issues/1138)

### BREAKING CHANGES

-   Datovelger må nå hentes ut fra familie-datovelger, flyttes vekk fra familie-form-elements

-   export nav-datovelger sammen med FamilieDatovelger
