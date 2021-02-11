import React from 'react';

import styled from 'styled-components';

import AlertStripe from 'nav-frontend-alertstriper';
import navFarger from 'nav-frontend-core';
import { Normaltekst } from 'nav-frontend-typografi';

import { adressebeskyttelsestyper, Ressurs, RessursStatus } from '@navikt/familie-typer';

import { inputId, ISøkeresultat } from '.';
import { formaterPersonIdent } from './formatter';

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

const Søkeresultater: React.FC<Props> = ({
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
                    {søkeresultater.data.map((søkeresultat: ISøkeresultat, index: number) => {
                        if (formaterResultat) {
                            return formaterResultat(søkeresultat, index === valgtSøkeresultat);
                        } else {
                            return (
                                <ResultatListeElement
                                    key={index}
                                    fokus={index === valgtSøkeresultat}
                                >
                                    <ResultatListeElementKnapp
                                        aria-label={
                                            søkeresultat.harTilgang
                                                ? søkeresultat.navn
                                                : 'Person har diskresjonskode'
                                        }
                                        aria-selected={index === valgtSøkeresultat}
                                        role={'option'}
                                        onClick={() => {
                                            søkeresultatOnClick(søkeresultat);
                                            settValgtSøkeresultat(index);
                                        }}
                                    >
                                        {søkeresultat.ikon}
                                        <div>
                                            <Normaltekst>
                                                {søkeresultat.harTilgang
                                                    ? `${søkeresultat.navn} (${formaterPersonIdent(
                                                          søkeresultat.ident,
                                                      )})`
                                                    : `Personen har diskresjonskode ${
                                                          søkeresultat.adressebeskyttelseGradering
                                                              ? adressebeskyttelsestyper[
                                                                    søkeresultat
                                                                        .adressebeskyttelseGradering
                                                                ]
                                                              : 'ukjent'
                                                      }`}
                                            </Normaltekst>

                                            {!søkeresultat.fagsakId && søkeresultat.harTilgang && (
                                                <Normaltekst>
                                                    {`Ingen fagsak. ${
                                                        !søkeresultat.fagsakId
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

export default Søkeresultater;
