import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

import { StyledAlertStripe, FeltGruppe, KomponentGruppe } from './layoutKomponenter';

interface Props {
    lenkePDFSøknad: string;
}

export const SøkerBorIkkePåAdresse: FC<Props> = ({ lenkePDFSøknad }) => {
    return (
        <>
            <KomponentGruppe>
                <StyledAlertStripe type={'advarsel'} form={'inline'} className={'avstand-øverst'}>
                    <FormattedMessage id={'personopplysninger.alert.riktigAdresse'} />
                </StyledAlertStripe>
            </KomponentGruppe>
            <KomponentGruppe>
                <FeltGruppe>
                    <Element>
                        <FormattedMessage id={'personopplysninger.info.endreAdresse'} />
                    </Element>
                </FeltGruppe>
                <FeltGruppe>
                    <Normaltekst>
                        <Lenke href={lenkePDFSøknad}>
                            <FormattedMessage id={'personopplysninger.lenke.pdfskjema'} />
                        </Lenke>
                    </Normaltekst>
                </FeltGruppe>
                <Normaltekst>
                    <FormattedMessage id={'personopplysninger.info.pdfskjema'} />
                </Normaltekst>
            </KomponentGruppe>
        </>
    );
};
