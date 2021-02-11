import React from 'react';

import styled from 'styled-components';

import AlertStripe from 'nav-frontend-alertstriper';
import navFarger from 'nav-frontend-core';
import { Normaltekst } from 'nav-frontend-typografi';

import { adressebeskyttelsestyper, Ressurs, RessursStatus } from '@navikt/familie-typer';

import { ISøkeresultat } from '../typer';

import { inputId } from '.';
import { formaterPersonIdent } from './formatter';

interface Props {
    formaterResultat?: (søkResultat: ISøkeresultat, erSøkeresultatValgt: boolean) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
}

const ResultatListe = styled.ul`
    width: 20rem;
    padding: 0;
    margin: 0;
`;

const StyledAlertStripe = styled(AlertStripe)`
    width: 20rem;
`;

const ResultatListeElement = styled.li<{ fokus: boolean }>`
    list-style-type: none;
    padding: 0.5rem;
    outline: ${({ fokus }) => (fokus ? `3px solid ${navFarger.fokusFarge}` : '')};

    &:hover {
        background-color: ${navFarger.navLysGra};
        cursor: pointer;
    }
`;

const ResultatListeElementKnapp = styled.div`
    display: flex;
    flex-direction: row;

    & svg {
        text-align: center;
        padding-right: 0.5rem;
    }
`;

const SøkResultater: React.FC<Props> = ({
    formaterResultat,
    settValgtSøkeresultat,
    søkeresultatOnClick,
    søkeresultater,
    valgtSøkeresultat,
}) => {
    switch (søkeresultater.status) {
        case RessursStatus.SUKSESS:
            return søkeresultater.data.length > 0 ? (
                <ResultatListe aria-labelledby={inputId}>
                    {søkeresultater.data.map((søkResultat: ISøkeresultat, index: number) => {
                        if (formaterResultat) {
                            return formaterResultat(søkResultat, index === valgtSøkeresultat);
                        } else {
                            return (
                                <ResultatListeElement
                                    key={index}
                                    fokus={index === valgtSøkeresultat}
                                >
                                    <ResultatListeElementKnapp
                                        aria-label={
                                            søkResultat.harTilgang
                                                ? søkResultat.navn
                                                : 'Person har diskresjonskode'
                                        }
                                        aria-selected={index === valgtSøkeresultat}
                                        role={'option'}
                                        onClick={() => {
                                            søkeresultatOnClick(søkResultat);
                                            settValgtSøkeresultat(index);
                                        }}
                                    >
                                        {søkResultat.ikon}
                                        <div>
                                            <Normaltekst>
                                                {søkResultat.harTilgang
                                                    ? `${søkResultat.navn} (${formaterPersonIdent(
                                                          søkResultat.ident,
                                                      )})`
                                                    : `Personen har diskresjonskode ${
                                                          søkResultat.adressebeskyttelseGradering
                                                              ? adressebeskyttelsestyper[
                                                                    søkResultat
                                                                        .adressebeskyttelseGradering
                                                                ]
                                                              : 'ukjent'
                                                      }`}
                                            </Normaltekst>

                                            {!søkResultat.fagsakId && søkResultat.harTilgang && (
                                                <Normaltekst>
                                                    {`Ingen fagsak. ${
                                                        !søkResultat.fagsakId
                                                            ? 'Trykk for å opprette >'
                                                            : ''
                                                    }`}
                                                </Normaltekst>
                                            )}
                                        </div>
                                    </ResultatListeElementKnapp>
                                </ResultatListeElement>
                            );
                        }
                    })}
                </ResultatListe>
            ) : (
                <StyledAlertStripe type={'info'}>Beklager, ingen treff</StyledAlertStripe>
            );
        case RessursStatus.FEILET:
        case RessursStatus.FUNKSJONELL_FEIL:
        case RessursStatus.IKKE_TILGANG:
            return (
                <StyledAlertStripe type="feil">
                    {søkeresultater.frontendFeilmelding}
                </StyledAlertStripe>
            );
        case RessursStatus.HENTER:
            return <StyledAlertStripe type={'info'}>Søker...</StyledAlertStripe>;
        default:
            return (
                <StyledAlertStripe type={'info'}>
                    Tast inn fødselsnummer eller d-nummer. Trykk 'enter' for å søke.
                </StyledAlertStripe>
            );
    }
};

export default SøkResultater;
