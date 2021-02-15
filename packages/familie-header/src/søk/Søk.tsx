import React from 'react';

import styled from 'styled-components';

import navFarger from 'nav-frontend-core';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import { FnrInput, InputProps } from 'nav-frontend-skjema';
import { Flatknapp } from 'nav-frontend-knapper';

import { Ressurs, RessursStatus } from '@navikt/familie-typer';

import SkjultLabel from './SkjultLabel';
import Søkeresultater from './Søkeresultater';
import { Søkeresultat } from '../types';
import { oransjBoxShadow } from '../common';
import { Close, Search } from '@navikt/ds-icons';
import useSøk from './useSøk';

export interface SøkProps extends InputProps {
    formaterResultat?: (
        søkeresultat: Søkeresultat,
        erSøkeresultatValgt: boolean,
    ) => React.ReactNode;
    label: React.ReactNode;
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultater: Ressurs<Søkeresultat[]>;
    søkeresultatOnClick: (søkResultat: Søkeresultat) => void;
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
`;

const StyledTømknapp = styled(Flatknapp)`
    position: absolute;
    right: 3rem;
    top: 0;
    padding: 0;
    width: 3rem;
    border-radius: 0;

    :hover {
        background-color: ${navFarger.navBla} !important;
        border-color: ${navFarger.navBla} !important;

        svg > path {
            fill: ${navFarger.white};
        }
    }

    :focus {
        z-index: 1000;
        background-color: ${navFarger.white} !important;
        border: ${navFarger.white};
        box-shadow: ${oransjBoxShadow};

        svg > path {
            fill: ${navFarger.navBla};
        }
    }
`;

const StyledHovedknapp = styled(Flatknapp)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    width: 3rem;
    background-color: ${navFarger.navBla};
    border-radius: 0 4px 4px 0;

    .knapp__spinner {
        width: 1rem;
        height: 1rem;
        margin: 0;
    }

    :hover {
        border-color: #0074df !important;
        background-color: #0074df !important;
    }

    :focus {
        z-index: 1000;
        background-color: ${navFarger.white} !important;
        border: ${navFarger.white};
        box-shadow: ${oransjBoxShadow};

        svg > path {
            fill: ${navFarger.navBla};
        }
    }
`;

export const inputId = 'sok-input';

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
        knappTitle,
        nullstillInput,
        onInputChange,
        onInputKeyDown,
        settErGyldig,
        settValgtSøkeresultat,
        søkKnappRef,
        tømKnappRef,
        utløserSøk,
        valgtSøkeresultat,
    } = useSøk({
        label,
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
                        ref={tømKnappRef}
                        onClick={() => {
                            nullstillInput(true);
                        }}
                    >
                        <Close color={navFarger.navBla} width={32} height={32} />
                    </StyledTømknapp>
                )}
                <StyledHovedknapp
                    title={knappTitle()}
                    ref={søkKnappRef}
                    onClick={() => {
                        utløserSøk();
                    }}
                    spinner={søkeresultater.status === RessursStatus.HENTER}
                >
                    {søkeresultater.status !== RessursStatus.HENTER && (
                        <Search color={navFarger.white} width={32} height={32} />
                    )}
                </StyledHovedknapp>
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
