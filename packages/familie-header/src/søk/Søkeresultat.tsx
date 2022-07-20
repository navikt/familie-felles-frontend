import React from 'react';

import styled from 'styled-components';
import { adressebeskyttelsestyper } from '@navikt/familie-typer';

import { inputId } from '.';
import { ISøkeresultat } from '..';
import { formaterPersonIdent } from './formatter';
import { StyledAlertStripe } from './Søkeresultater';
import { BodyShort } from '@navikt/ds-react';

interface Props {
    formaterResultat?: (
        søkeresultat: ISøkeresultat,
        erSøkeresultatValgt: boolean,
    ) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: ISøkeresultat[];
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
}

const ResultatListe = styled.ul`
    width: 20rem;
    padding: 0;
    margin: 0;
`;

const ResultatListeElement = styled.li<{ fokus: boolean }>`
    list-style-type: none;
    padding: 0.5rem;
    outline: ${({ fokus }) => (fokus ? `3px solid var(--navds-global-color-orange-300)` : '')};

    &:hover {
        background-color: var(--navds-global-color-gray-100);
        cursor: pointer;
    }
`;

const ResultatIkonOgRolle = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    align-items: center;
    min-width: 3.5rem;
    font-size: var(--navds-font-size-small);

    svg {
        text-align: center;
    }
`;

const ResultatListeElementKnapp = styled.div`
    display: flex;
    flex-direction: row;
`;

const Søkeresultat: React.FC<Props> = ({
    formaterResultat,
    settValgtSøkeresultat,
    søkeresultatOnClick,
    søkeresultater,
    valgtSøkeresultat,
}) => {
    return søkeresultater.length > 0 ? (
        <ResultatListe aria-labelledby={inputId}>
            {søkeresultater.map((søkeresultat: ISøkeresultat, index: number) => {
                if (formaterResultat) {
                    return formaterResultat(søkeresultat, index === valgtSøkeresultat);
                } else {
                    return (
                        <ResultatListeElement key={index} fokus={index === valgtSøkeresultat}>
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
                                <ResultatIkonOgRolle>
                                    {søkeresultat.ikon}
                                    {søkeresultat.rolle ? søkeresultat.rolle : ''}
                                </ResultatIkonOgRolle>
                                <div>
                                    <BodyShort size={'small'}>
                                        {søkeresultat.harTilgang
                                            ? `${søkeresultat.navn} (${formaterPersonIdent(
                                                  søkeresultat.ident,
                                              )})`
                                            : `Personen har diskresjonskode ${
                                                  søkeresultat.adressebeskyttelseGradering
                                                      ? adressebeskyttelsestyper[
                                                            søkeresultat.adressebeskyttelseGradering
                                                        ]
                                                      : 'ukjent'
                                              }`}
                                    </BodyShort>

                                    {!søkeresultat.fagsakId && søkeresultat.harTilgang && (
                                        <BodyShort size={'small'}>
                                            {`Ingen fagsak. ${
                                                !søkeresultat.fagsakId
                                                    ? 'Trykk for å opprette >'
                                                    : ''
                                            }`}
                                        </BodyShort>
                                    )}
                                </div>
                            </ResultatListeElementKnapp>
                        </ResultatListeElement>
                    );
                }
            })}
        </ResultatListe>
    ) : (
        <StyledAlertStripe variant={'info'}>Beklager, ingen treff</StyledAlertStripe>
    );
};

export default Søkeresultat;
