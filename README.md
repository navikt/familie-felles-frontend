Fellesrepo for frontend biblioteker for team familie.\
[Storybook med dokumentasjon 📖](https://navikt.github.io/familie-felles-frontend)
 

## Lokal testing
Man kan ikke bruke `yarn link` på pakker som ikke er publisert. For å teste lokalt pusher man opp en branch som bygges automatisk. For å få tak i pakkenavnet går man til Actions-fanen, velger rett branch, klikker "Bygg og push" og deretter "Push". Nederst står pakkenavnet under "Successfully published".

## Lokal utvilking
For å utvilke lokalt kan man kjøre
`yarn && yarn build && yarn bootstrap`
For å sette opp repoet og
`yarn storybook`
For å kjøre det.

Besøk [docs](https://navikt.github.io/familie-felles-frontend) for dokumentasjon.
