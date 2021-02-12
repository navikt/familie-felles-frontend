import React, { useState } from 'react';

import styled from 'styled-components';

import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import { Input, InputProps } from 'nav-frontend-skjema';

import { Ressurs, RessursStatus } from '@navikt/familie-typer';

import SkjultLabel from './SkjultLabel';
import Søkeresultater from './Søkeresultater';
import { Søkeresultat } from '../../types';

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

    const settAnkerPåInput = () => {
        settAnker(document.getElementById(inputId) as HTMLElement);
    };

    const nullstillInput = (lukkPopover = false) => {
        settVerdi('');
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

    return (
        <SøkContainer>
            {typeof label === 'string' ? (
                <SkjultLabel htmlFor={inputId}>{label}</SkjultLabel>
            ) : (
                label
            )}
            <Input
                aria-label={props.placeholder}
                id={inputId}
                onChange={onChange}
                onKeyDown={event => {
                    switch (event.key) {
                        case 'ArrowUp':
                            settValgtSøkeresultat(
                                valgtSøkeresultat >= 0 ? valgtSøkeresultat - 1 : -1,
                            );
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
                            if (
                                valgtSøkeresultat !== -1 &&
                                søkeresultater.status === RessursStatus.SUKSESS
                            ) {
                                søkeresultatOnClick(søkeresultater.data[valgtSøkeresultat]);
                            } else {
                                utløserSøk();
                            }
                            break;
                    }
                }}
                onClick={() => settAnkerPåInput()}
                value={verdi}
                {...props}
            />

            <Popover
                id={'søkresultat'}
                ankerEl={anker}
                orientering={PopoverOrientering.UnderVenstre}
                autoFokus={false}
                onRequestClose={() => {
                    nullstillInput(true);
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
        </SøkContainer>
    );
};
