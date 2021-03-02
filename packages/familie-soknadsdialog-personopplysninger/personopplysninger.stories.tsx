import React, { useState } from 'react';
import { Personopplysninger } from './src';
import { IPersonopplysninger } from './src/types';
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
};

export const FamiliePersonopplysningerStory: React.FC = () => {
    const [personopplysninger, setPersonopplysninger] = useState<IPersonopplysninger>({
        fnr: '12345678910',
        adresse: {
            adresse: 'Hunstadveien 1',
            postnummer: '8009',
            poststed: 'Bodø',
        },
        sivilstand: 'Ugift',
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
