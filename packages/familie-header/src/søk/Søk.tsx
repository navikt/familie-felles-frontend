import React from 'react';

import styled from 'styled-components';

import navFarger from 'nav-frontend-core';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import { FnrInput, InputProps } from 'nav-frontend-skjema';
import { Flatknapp } from 'nav-frontend-knapper';

import { Ressurs, RessursStatus } from '@navikt/familie-typer';

import SkjultLabel from './SkjultLabel';
import Søkeresultater from './Søkeresultater';
import { ISøkeresultat } from '../types';
import { oransjBoxShadow } from '../common';
import { Close, Search } from '@navikt/ds-icons';
import useSøk from './useSøk';

export interface SøkProps extends InputProps {
    formaterResultat?: (
        søkeresultat: ISøkeresultat,
        erSøkeresultatValgt: boolean,
    ) => React.ReactNode;
    label: React.ReactNode;
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
}

const SøkContainer = styled.div`
    width: 20rem;
    position: relative;
    margin: 0 1rem;

    .skjemaelement__input-fodselsnr {
        :focus {
            border-color: ${navFarger.navBla};
            box-shadow: ${oransjBoxShadow};
        }
    }

    .knapp__spinner {
        width: 1rem;
        height: 1rem;
        margin: 0;
    }
`;

const StyledTømknapp = styled(Flatknapp)`
    position: absolute;
    right: 3rem;
    top: 0;
    padding: 0;
    width: 3rem;
    border-radius: 0;
    background: none;

    svg > path {
        fill: ${navFarger.navBla};
    }

    :hover {
        background-color: ${navFarger.navBla} !important;
        border-color: ${navFarger.navBla} !important;

        svg > path {
            fill: ${navFarger.white};
        }
    }

    :focus:hover {
        background-color: ${navFarger.white} !important;
    }

    :focus {
        z-index: 1000;
        border-color: ${navFarger.navBla};
        box-shadow: ${oransjBoxShadow};

        svg > path {
            fill: ${navFarger.navBla};
        }
    }
`;

const StyledSøkKnapp = styled(StyledTømknapp)`
    border-radius: 0 4px 4px 0;
    right: 0;
`;

export const inputId = 'sok-input';
export const søkKnappId = 'søk-knapp';
export const tømKnappId = 'tøm-knapp';

export const Søk = ({
    formaterResultat,
    label,
    nullstillSøkeresultater,
    søk,
    søkeresultatOnClick,
    søkeresultater,
    ...props
}: SøkProps) => {
    const {
        anker,
        ident,
        nullstillInput,
        onInputChange,
        onInputKeyDown,
        settErGyldig,
        settValgtSøkeresultat,
        utløserSøk,
        valgtSøkeresultat,
    } = useSøk({
        nullstillSøkeresultater,
        søk,
        søkeresultatOnClick,
        søkeresultater,
    });

    return (
        <>
            <SøkContainer alt-text={'søk'}>
                {typeof label === 'string' ? (
                    <SkjultLabel htmlFor={inputId}>{label}</SkjultLabel>
                ) : (
                    label
                )}
                <FnrInput
                    autoComplete={'off'}
                    aria-label={props.placeholder}
                    id={inputId}
                    onChange={onInputChange}
                    onKeyDown={onInputKeyDown}
                    onValidate={(isValid: boolean) => settErGyldig(isValid)}
                    value={ident}
                    {...props}
                />
                {ident !== '' && (
                    <StyledTømknapp
                        title={'tøm'}
                        id={tømKnappId}
                        onClick={() => {
                            document.getElementById(inputId)?.focus();
                            nullstillInput(true);
                        }}
                    >
                        <Close color={navFarger.navBla} width={32} height={32} />
                    </StyledTømknapp>
                )}
                <StyledSøkKnapp
                    id={søkKnappId}
                    onClick={() => {
                        utløserSøk();
                    }}
                    spinner={søkeresultater.status === RessursStatus.HENTER}
                >
                    {søkeresultater.status !== RessursStatus.HENTER && (
                        <Search color={navFarger.navBla} width={32} height={32} />
                    )}
                </StyledSøkKnapp>
            </SøkContainer>

            <Popover
                id={'søkeresultat'}
                ankerEl={anker}
                orientering={PopoverOrientering.UnderVenstre}
                autoFokus={false}
                onRequestClose={() => {
                    return;
                }}
                tabIndex={-1}
                utenPil={true}
            >
                <Søkeresultater
                    formaterResultat={formaterResultat}
                    settValgtSøkeresultat={søkeresultatIndex =>
                        settValgtSøkeresultat(søkeresultatIndex)
                    }
                    søkeresultatOnClick={søkeresultatOnClick}
                    søkeresultater={søkeresultater}
                    valgtSøkeresultat={valgtSøkeresultat}
                />
            </Popover>
        </>
    );
};
