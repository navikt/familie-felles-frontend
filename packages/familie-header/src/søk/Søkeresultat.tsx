import { Alert, BodyShort, Box, HStack, VStack } from '@navikt/ds-react';
import { adressebeskyttelsestyper } from '@navikt/familie-typer';
import classNames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import type { ISøkeresultat } from '..';
import { inputId } from '.';
import { formaterPersonIdent } from './formatter';
import Styles from './Søkeresultat.module.less';

interface Props {
    formaterResultat?: (søkeresultat: ISøkeresultat, erSøkeresultatValgt: boolean) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: ISøkeresultat[];
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
    ingenFagsakKomponent?: ReactNode;
}

const lagManglerTilgangBegrunnelse = (søkeresultat: ISøkeresultat): string => {
    if (søkeresultat.manglerTilgangBegrunnelse) {
        return søkeresultat.manglerTilgangBegrunnelse;
    }
    const adressebeskyttelse = søkeresultat.adressebeskyttelseGradering
        ? adressebeskyttelsestyper[søkeresultat.adressebeskyttelseGradering]
        : 'ukjent';
    return `Personen har diskresjonskode ${adressebeskyttelse}`;
};

const Søkeresultat: React.FC<Props> = ({
    formaterResultat,
    settValgtSøkeresultat,
    søkeresultatOnClick,
    søkeresultater,
    valgtSøkeresultat,
    ingenFagsakKomponent,
}) => {
    return søkeresultater.length > 0 ? (
        <Box asChild padding={'space-0'} margin={'space-0'} width={'20rem'}>
            <ul aria-labelledby={inputId}>
                {søkeresultater.map((søkeresultat: ISøkeresultat, index: number) => {
                    if (formaterResultat) {
                        return formaterResultat(søkeresultat, index === valgtSøkeresultat);
                    } else {
                        return (
                            <Box key={søkeresultat.ident} asChild padding={'space-8'} borderRadius={'8'}>
                                <li
                                    className={classNames(Styles.resultItem, {
                                        [Styles.focusItem]: index === valgtSøkeresultat,
                                    })}
                                >
                                    <HStack
                                        wrap={false}
                                        aria-label={
                                            søkeresultat.harTilgang
                                                ? søkeresultat.navn
                                                : lagManglerTilgangBegrunnelse(søkeresultat)
                                        }
                                        aria-selected={index === valgtSøkeresultat}
                                        role={'option'}
                                        onClick={() => {
                                            søkeresultatOnClick(søkeresultat);
                                            settValgtSøkeresultat(index);
                                        }}
                                    >
                                        <VStack
                                            paddingInline={'space-0 space-16'}
                                            align={'center'}
                                            minWidth={'3.5rem'}
                                            className={Styles.resultIcon}
                                        >
                                            {søkeresultat.ikon}
                                            {søkeresultat.rolle ? søkeresultat.rolle : ''}
                                        </VStack>
                                        <div>
                                            <BodyShort size={'small'}>
                                                {søkeresultat.harTilgang
                                                    ? `${søkeresultat.navn} (${formaterPersonIdent(søkeresultat.ident)})`
                                                    : lagManglerTilgangBegrunnelse(søkeresultat)}
                                            </BodyShort>

                                            {!søkeresultat.fagsakId && søkeresultat.harTilgang && (
                                                <ResultatVisningUtenFagsak
                                                    ingenFagsakKomponent={ingenFagsakKomponent}
                                                />
                                            )}
                                        </div>
                                    </HStack>
                                </li>
                            </Box>
                        );
                    }
                })}
            </ul>
        </Box>
    ) : (
        <Box asChild width={'20rem'}>
            <Alert variant={'info'}>Beklager, ingen treff</Alert>
        </Box>
    );
};

const ResultatVisningUtenFagsak: React.FC<{ ingenFagsakKomponent?: ReactNode }> = ({ ingenFagsakKomponent }) => {
    if (ingenFagsakKomponent) {
        return <>ingenFagsakKomponent</>;
    }

    return <BodyShort size={'small'}>{`Ingen fagsak. Trykk for å opprette.`}</BodyShort>;
};

export default Søkeresultat;
