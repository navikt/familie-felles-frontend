import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import navFarger from 'nav-frontend-core';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import { FnrInput, InputProps } from 'nav-frontend-skjema';
import { Flatknapp } from 'nav-frontend-knapper';

import { Ressurs, RessursStatus } from '@navikt/familie-typer';

import SkjultLabel from './SkjultLabel';
import Søkeresultater from './Søkeresultater';
import { Søkeresultat } from '../types';
import { IkonSøk } from '../icons';
import { oransjBoxShadow } from '../common';
import ReactDOM from 'react-dom';

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

    .knapp__spinner {
        width: 1rem;
        height: 1rem;
        margin: 0;
    }

    :hover {
        border-color: ${navFarger.navBla} !important;

        svg > path {
            fill: ${navFarger.navBla};
        }
    }

    :focus {
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
    const [verdi, settVerdi] = useState('');
    const [anker, settAnker] = useState<HTMLElement | undefined>(undefined);
    const [valgtSøkeresultat, settValgtSøkeresultat] = useState(-1);
    const [erGyldig, settErGyldig] = useState(false);
    const søkKnappRef = useRef(null);

    useEffect(() => {
        if (erGyldig) {
            utløserSøk();
        }
    }, [erGyldig]);

    const settAnkerPåInput = () => {
        settAnker(document.getElementById(inputId) as HTMLElement);
    };

    const nullstillInput = (lukkPopover = false) => {
        settVerdi('');
        settErGyldig(false);
        lukkPopover && settAnker(undefined);
        nullstillSøkeresultater();
    };

    const utløserSøk = () => {
        søk(verdi.replace(/ /g, ''));
        settAnkerPåInput();
    };

    const onChange = (event: React.ChangeEvent) => {
        const nyVerdi = (event.target as HTMLInputElement).value;
        settVerdi(nyVerdi);

        if (nyVerdi === '') {
            nullstillSøkeresultater();
            settAnker(undefined);
        }
    };

    const onKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
                settValgtSøkeresultat(valgtSøkeresultat >= 0 ? valgtSøkeresultat - 1 : -1);
                break;
            case 'ArrowDown':
                settValgtSøkeresultat(
                    valgtSøkeresultat <
                        (søkeresultater.status === RessursStatus.SUKSESS
                            ? søkeresultater.data.length - 1
                            : -1)
                        ? valgtSøkeresultat + 1
                        : -1,
                );
                break;
            case 'Enter':
                if (søkeresultater.status === RessursStatus.SUKSESS) {
                    if (valgtSøkeresultat === -1 && søkeresultater.data.length === 1) {
                        søkeresultatOnClick(søkeresultater.data[0]);
                    } else if (valgtSøkeresultat !== -1) {
                        søkeresultatOnClick(søkeresultater.data[valgtSøkeresultat]);
                    } else {
                        utløserSøk();
                    }
                } else {
                    utløserSøk();
                }
                break;
        }
    };

    const knappTitle = () => {
        if (søkeresultater.status === RessursStatus.HENTER) {
            return 'søker';
        } else {
            return typeof label === 'string' ? label : 'søk';
        }
    };

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
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onValidate={(isValid: boolean) => settErGyldig(isValid)}
                    value={verdi}
                    {...props}
                />
                {verdi !== '' && (
                    <StyledTømknapp
                        title={'tøm'}
                        ref={søkKnappRef}
                        onClick={() => {
                            nullstillInput(true);
                        }}
                    >
                        <IkonSøk color={navFarger.navBla} width={32} height={32} />
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
                        <IkonSøk color={navFarger.white} width={32} height={32} />
                    )}
                </StyledHovedknapp>
            </SøkContainer>

            <Popover
                id={'søkresultat'}
                ankerEl={anker}
                orientering={PopoverOrientering.UnderVenstre}
                autoFokus={false}
                onRequestClose={() => {
                    if (document.activeElement !== ReactDOM.findDOMNode(søkKnappRef.current)) {
                        nullstillInput(true);
                    }
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
