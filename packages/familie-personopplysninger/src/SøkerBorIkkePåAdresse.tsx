import React, { FC } from 'react';
import KomponentGruppe from './components/gruppe/KomponentGruppe';
import AlertStripe from 'nav-frontend-alertstriper';
import FeltGruppe from './components/gruppe/FeltGruppe';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

interface Props {
    lenkePDFSøknad: string;
}

const SøkerBorIkkePåAdresse: FC<Props> = ({ lenkePDFSøknad }) => {
    return (
        <>
            <KomponentGruppe>
                <AlertStripe type={'advarsel'} form={'inline'} className={'avstand-øverst'}>
                    'personopplysninger.alert.riktigAdresse'
                </AlertStripe>
            </KomponentGruppe>
            <KomponentGruppe>
                <FeltGruppe>
                    <Element>'personopplysninger.info.endreAdresse'</Element>
                </FeltGruppe>
                <FeltGruppe>
                    <Normaltekst>
                        <Lenke href={lenkePDFSøknad}>'personopplysninger.lenke.pdfskjema'</Lenke>
                    </Normaltekst>
                </FeltGruppe>
                <Normaltekst>'personopplysninger.info.pdfskjema'</Normaltekst>
            </KomponentGruppe>
        </>
    );
};

export default SøkerBorIkkePåAdresse;
