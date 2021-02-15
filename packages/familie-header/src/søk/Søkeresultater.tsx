import React from 'react';

import styled from 'styled-components';

import AlertStripe from 'nav-frontend-alertstriper';

import { Ressurs, RessursStatus } from '@navikt/familie-typer';

import { inputId } from '.';
import { ISøkeresultat } from '../types';
import Søkeresultat from './Søkeresultat';

interface Props {
    formaterResultat?: (
        søkeresultat: ISøkeresultat,
        erSøkeresultatValgt: boolean,
    ) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
}

export const StyledAlertStripe = styled(AlertStripe)`
    width: 20rem;
`;

const Søkeresultater: React.FC<Props> = ({
    formaterResultat,
    settValgtSøkeresultat,
    søkeresultatOnClick,
    søkeresultater,
    valgtSøkeresultat,
}) => {
    switch (søkeresultater.status) {
        case RessursStatus.SUKSESS:
            return (
                <Søkeresultat
                    søkeresultater={søkeresultater.data}
                    valgtSøkeresultat={valgtSøkeresultat}
                    settValgtSøkeresultat={settValgtSøkeresultat}
                    formaterResultat={formaterResultat}
                    søkeresultatOnClick={søkeresultatOnClick}
                />
            );
        case RessursStatus.FEILET:
        case RessursStatus.FUNKSJONELL_FEIL:
        case RessursStatus.IKKE_TILGANG:
            return (
                <StyledAlertStripe aria-labelledby={inputId} type="feil">
                    {søkeresultater.frontendFeilmelding}
                </StyledAlertStripe>
            );
        case RessursStatus.HENTER:
            return (
                <StyledAlertStripe aria-labelledby={inputId} type={'info'}>
                    Søker...
                </StyledAlertStripe>
            );
        default:
            return (
                <StyledAlertStripe aria-labelledby={inputId} type={'info'}>
                    Tast inn fødselsnummer eller d-nummer. Trykk 'enter' for å søke.
                </StyledAlertStripe>
            );
    }
};

export default Søkeresultater;
