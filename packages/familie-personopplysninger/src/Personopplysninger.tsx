import React, { useState } from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import { Input } from 'nav-frontend-skjema';

import SøkerBorIkkePåAdresse from './SøkerBorIkkePåAdresse';

import FeltGruppe from './components/gruppe/FeltGruppe';
import { JaNeiSpørsmål, ESvar } from '@navikt/familie-form-elements';
import KomponentGruppe from './components/gruppe/KomponentGruppe';
import SeksjonGruppe from './components/gruppe/SeksjonGruppe';
import { hentSivilstatus } from './utils';
import { IPersonopplysninger } from './types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

export interface PersonopplysningerProps {
    personopplysninger: IPersonopplysninger;
    lenkePDFSøknad: string;
    settTelefonnummerCallback: (telefonnr: string) => void;
}

const StyledInput = styled(Input)`
    label {
        font-size: 1.125rem;
    }
`;

export const Personopplysninger: React.FC<PersonopplysningerProps> = ({
    personopplysninger,
    settTelefonnummerCallback,
    lenkePDFSøknad,
}) => {
    const { kontakttelefon } = personopplysninger;
    const [feilTelefonnr, settFeilTelefonnr] = useState<boolean>(false);
    const [telefonnummer, settTelefonnummer] = useState<string>(
        kontakttelefon ? kontakttelefon : '',
    );
    const [søkerBorPåRegistrertAdresse, setSøkerBorPåRegistrertAdresse] = useState<
        boolean | undefined
    >();

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
        <SeksjonGruppe aria-live={'polite'}>
            <KomponentGruppe>
                <FeltGruppe>
                    <AlertStripe type={'info'} form={'inline'}>
                        <FormattedMessage id={'personopplysninger.alert.infohentet'} />
                    </AlertStripe>
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
                    <Normaltekst>{personopplysninger.statsborgerskap.join(', ')}</Normaltekst>
                </FeltGruppe>

                <FeltGruppe>
                    <Element>
                        <FormattedMessage id={'sivilstatus.tittel'} />
                    </Element>
                    <Normaltekst>{hentSivilstatus(personopplysninger.sivilstand)}</Normaltekst>
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
        </SeksjonGruppe>
    );
};
