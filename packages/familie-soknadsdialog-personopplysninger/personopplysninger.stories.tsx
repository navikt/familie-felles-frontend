import React, { useState } from 'react';
import { Personopplysninger } from './src';
import { IPersonopplysninger, ESivilstand } from './src/typer';
import { IntlProvider } from 'react-intl';
import { LocaleType } from '@navikt/familie-sprakvelger';

export default {
    component: Personopplysninger,
    parameters: {
        componentSubtitle: 'Display info om person',
    },
    title: 'Komponenter/Personopplysninger',
};

const tekster: Record<string, string> = {
    'personopplysninger.alert.infohentet':
        'Hvis opplysningene vi har om deg ikke stemmer, må du endre disse hos Folkeregisteret.',
    'person.ident.visning': 'Fødselsnummer eller d-nummer',
    'person.statsborgerskap': 'Statsborgerskap',
    'sivilstatus.tittel': 'Sivilstatus',
    'person.adresse': 'Adresse',
    'personopplysninger.spm.riktigAdresse': 'Bor du på denne adressen?',
    'personopplysninger.lesmer-innhold.riktigAdresse':
        'Hvis du har strengt fortrolig adresse, vises ikke adressen din her. Du kan svare Ja på dette spørsmålet og fortsette med den digitale søknaden.',
    'personopplysninger.alert.riktigAdresse':
        'Du må oppgi riktig adresse til Folkeregisteret for å bruke denne søknaden',
    'personopplysninger.info.endreAdresse': 'Skal du ikke endre adresse i Folkeregisteret?',
    'personopplysninger.lenke.pdfskjema': 'Bruk PDF-skjema',
    'personopplysninger.info.pdfskjema': 'Skjemaet kan sendes inn elektronisk eller på papir',
    'person.telefonnr': 'Telefonnummer du kan kontaktes på',
    'personopplysninger.feilmelding.telefonnr': 'Telefonnummeret må ha minst 8 siffer',
    ja: 'ja',
    nei: 'nei',
    'sivilstatus.kode.REPA': 'Registrert partner',
    'sivilstatus.kode.GIFT': 'Gift',
    'sivilstatus.kode.UGIF': 'Ugift',
    'sivilstatus.kode.SAMB': 'Samboer',
    'sivilstatus.kode.SEPR': 'Separert',
    'sivilstatus.kode.SEPA': 'Separert',
    'sivilstatus.kode.SKIL': 'Skilt',
    'sivilstatus.kode.GJPA': 'Gjenlevende partner',
    'sivilstatus.kode.ENKE': 'Enke/Enkemann',
    'sivilstatus.kode.UOPPGITT': 'Ikke oppgitt',
    'sivilstatus.kode.UGIFT': 'Ugift',
    'sivilstatus.kode.ENKE_ELLER_ENKEMANN': 'Enke/Enkemann',
    'sivilstatus.kode.SKILT': 'Skilt',
    'sivilstatus.kode.SEPARERT': 'Separert',
    'sivilstatus.kode.PARTNER': 'Partner',
    'sivilstatus.kode.SEPARERT_PARTNER': 'Separert',
    'sivilstatus.kode.SKILT_PARTNER': 'Skilt',
    'sivilstatus.kode.GJENLEVENDE_PARTNER': 'Gjenlevende partner',
    'sivilstatus.kode.ANNET': 'Annen sivilstatus enn GIFT, UGIF, SAMB, SEPA, SKIL, SEPR',
};

export const FamiliePersonopplysningerStory: React.FC = () => {
    const [personopplysninger, setPersonopplysninger] = useState<IPersonopplysninger>({
        fnr: '12345678910',
        adresse: {
            adresse: 'Hunstadveien 1',
            postnummer: '8009',
            poststed: 'Bodø',
        },
        sivilstand: ESivilstand.ENKE_ELLER_ENKEMANN,
        statsborgerskap: ['NOR', 'NLD'],
        kontakttelefon: '12345678',
    });

    const oppdaterTelefonnummer = (telefonnr: string) => {
        if (telefonnr.length >= 8 && /^[+\d\s]+$/.test(telefonnr)) {
            setPersonopplysninger({
                ...personopplysninger,
                kontakttelefon: telefonnr,
            });
        } else {
            setPersonopplysninger({
                ...personopplysninger,
                kontakttelefon: '',
            });
        }
    };

    return (
        <IntlProvider locale={LocaleType.nb} messages={tekster}>
            <Personopplysninger
                personopplysninger={personopplysninger}
                settTelefonnummerCallback={oppdaterTelefonnummer}
                lenkePDFSøknad={'https://example.com/'}
                støttaSpråk={[LocaleType.nb, LocaleType.en]}
            />
        </IntlProvider>
    );
};
