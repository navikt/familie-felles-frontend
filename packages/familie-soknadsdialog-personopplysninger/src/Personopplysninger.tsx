import React, { useEffect, useState } from 'react';
import { FormattedMessage, IntlShape, RawIntlProvider } from 'react-intl';
import styled from 'styled-components';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Input } from 'nav-frontend-skjema';
import { JaNeiSpørsmål, ESvar } from '@navikt/familie-form-elements';
import { LocaleType } from '@navikt/familie-sprakvelger';

import { SøkerBorIkkePåAdresse } from './SøkerBorIkkePåAdresse';
import { StyledAlertStripe, FeltGruppe, KomponentGruppe } from './layoutKomponenter';
import { hentSivilstatus, landkodeTilSpråk } from './utils';
import { IPersonopplysninger } from './typer';
import { registerLocale } from 'i18n-iso-countries';

export interface PersonopplysningerProps {
    personopplysninger: IPersonopplysninger;
    lenkePDFSøknad: string;
    settTelefonnummerCallback: (telefonnr: string) => void;
    støttaSpråk: LocaleType[];
    intl: IntlShape;
}

const StyledInput = styled(Input)`
    label {
        font-size: 1.125rem;
    }
`;

const PersonopplysningerSection = styled.section`
    p {
        font-size: 1.125rem;
    }
`;

export const Personopplysninger: React.FC<PersonopplysningerProps> = ({
    personopplysninger,
    settTelefonnummerCallback,
    lenkePDFSøknad,
    støttaSpråk,
    intl,
}) => {
    const { kontakttelefon } = personopplysninger;
    const [feilTelefonnr, settFeilTelefonnr] = useState<boolean>(false);
    const [telefonnummer, settTelefonnummer] = useState<string>(
        kontakttelefon ? kontakttelefon : '',
    );
    const [søkerBorPåRegistrertAdresse, setSøkerBorPåRegistrertAdresse] = useState<
        boolean | undefined
    >();
    const [språkFerdigImportert, settSpråkFerdigImportert] = useState<boolean>(false);

    useEffect(() => {
        støttaSpråk.forEach(async (locale, index) => {
            const landnavnFraSpråkFil = await import(`i18n-iso-countries/langs/${locale}.json`);
            registerLocale(landnavnFraSpråkFil);
            if (index === støttaSpråk.length - 1) {
                settSpråkFerdigImportert(true);
            }
        });
    });

    const oppdaterTelefonnr = (e: React.FormEvent<HTMLInputElement>) => {
        const telefonnr = e.currentTarget.value;
        settTelefonnummer(telefonnr);
        settTelefonnummerCallback(telefonnr);
    };

    const oppdaterFeilmelding = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.value.length >= 8 && /^[+\d\s]+$/.test(e.currentTarget.value)
            ? settFeilTelefonnr(false)
            : settFeilTelefonnr(true);
    };

    const borDuPåRegistrertAdresseOnChange = (verdi: ESvar) => {
        setSøkerBorPåRegistrertAdresse(verdi === ESvar.JA);
    };

    return (
        <RawIntlProvider value={intl}>
            <PersonopplysningerSection aria-live={'polite'}>
                <KomponentGruppe>
                    <FeltGruppe>
                        <StyledAlertStripe type={'info'} form={'inline'}>
                            <p>
                                <FormattedMessage id={'personopplysninger.alert.infohentet'} />
                            </p>
                        </StyledAlertStripe>
                    </FeltGruppe>

                    <FeltGruppe>
                        <Element>
                            <FormattedMessage id={'person.ident.visning'} />
                        </Element>
                        <Normaltekst>{personopplysninger.fnr}</Normaltekst>
                    </FeltGruppe>

                    <FeltGruppe>
                        <Element>
                            <FormattedMessage id={'person.statsborgerskap'} />
                        </Element>
                        <Normaltekst>
                            {språkFerdigImportert &&
                                personopplysninger.statsborgerskap
                                    .map((landkode: string) =>
                                        landkodeTilSpråk(landkode, intl.locale),
                                    )
                                    .join(', ')}
                        </Normaltekst>
                    </FeltGruppe>

                    <FeltGruppe>
                        <Element>
                            <FormattedMessage id={'sivilstatus.tittel'} />
                        </Element>
                        <Normaltekst>
                            <FormattedMessage id={hentSivilstatus(personopplysninger.sivilstand)} />
                        </Normaltekst>
                    </FeltGruppe>

                    <FeltGruppe>
                        <Element>
                            <FormattedMessage id={'person.adresse'} />
                        </Element>
                        <Normaltekst>{personopplysninger.adresse.adresse}</Normaltekst>
                        <Normaltekst>
                            {personopplysninger.adresse.postnummer}{' '}
                            {personopplysninger.adresse.poststed}
                        </Normaltekst>
                    </FeltGruppe>
                </KomponentGruppe>

                <KomponentGruppe aria-live="polite">
                    <JaNeiSpørsmål
                        legend={
                            <>
                                <Element>
                                    <FormattedMessage id={'personopplysninger.spm.riktigAdresse'} />
                                </Element>
                                <Normaltekst>
                                    <FormattedMessage
                                        id={'personopplysninger.lesmer-innhold.riktigAdresse'}
                                    />
                                </Normaltekst>
                            </>
                        }
                        onChange={borDuPåRegistrertAdresseOnChange}
                        name={'RegistrertAdresseStemmer'}
                        labelTekstForJaNei={{
                            ja: <FormattedMessage id={'ja'} />,
                            nei: <FormattedMessage id={'nei'} />,
                        }}
                    />

                    {søkerBorPåRegistrertAdresse === false && (
                        <SøkerBorIkkePåAdresse lenkePDFSøknad={lenkePDFSøknad} />
                    )}
                </KomponentGruppe>

                {søkerBorPåRegistrertAdresse && (
                    <StyledInput
                        name={'Telefonnummer'}
                        label={<FormattedMessage id={'person.telefonnr'} />}
                        bredde={'M'}
                        type="tel"
                        onChange={e => oppdaterTelefonnr(e)}
                        onBlur={e => oppdaterFeilmelding(e)}
                        feil={
                            feilTelefonnr ? (
                                <FormattedMessage id={'personopplysninger.feilmelding.telefonnr'} />
                            ) : undefined
                        }
                        value={telefonnummer}
                    />
                )}
            </PersonopplysningerSection>
        </RawIntlProvider>
    );
};
