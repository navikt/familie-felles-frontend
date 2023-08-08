import React from 'react';
import styled from 'styled-components';
import '@navikt/ds-css';
import { Ressurs, RessursStatus } from '@navikt/familie-typer';
import Søkeresultater from './Søkeresultater';
import { ISøkeresultat } from '../types';
import useSøk from './useSøk';
import { FnrInputWrapper } from './FnrInputWrapper';
import { Popover } from '@navikt/ds-react';

export interface SøkProps {
    formaterResultat?: (
        søkeresultat: ISøkeresultat,
        erSøkeresultatValgt: boolean,
    ) => React.ReactNode;
    label: string;
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    acceptSynthNr?: boolean;
    placeholder?: string;
    size?: 'small' | 'medium';
}

const SøkContainer = styled.div`
    align-self: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    .navds-body-small {
        font-size: var(--a-font-size-medium);
    }
`;
export const inputId = 'sok-input';
export const søkKnappId = 'søk-knapp';
export const tømKnappId = 'tøm-knapp';

export const Søk = ({
    formaterResultat,
    nullstillSøkeresultater,
    søk,
    søkeresultatOnClick,
    søkeresultater,
    acceptSynthNr,
    placeholder,
    label,
    size = 'small',
}: SøkProps) => {
    const {
        ankerRef,
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
            <SøkContainer alt-text={'søk'} data-theme="dark">
                <FnrInputWrapper
                    id={inputId}
                    laster={søkeresultater.status === RessursStatus.HENTER}
                    placeholder={placeholder}
                    label={label}
                    onEndre={onInputChange}
                    onKeyDown={onInputKeyDown}
                    onValidate={(isValid: boolean) => settErGyldig(isValid)}
                    acceptSynthNr={acceptSynthNr}
                    value={ident}
                    utløserSøk={utløserSøk}
                    size={size}
                    onClear={() => {
                        nullstillInput(true);
                    }}
                />
            </SøkContainer>

            <Popover
                id={'søkeresultat'}
                anchorEl={ankerRef.current}
                arrow={false}
                placement="bottom"
                tabIndex={-1}
                open={true}
                onClose={() => {
                    return;
                }}
            >
                <Popover.Content
                    style={{
                        padding: '0px',
                    }}
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
                </Popover.Content>
            </Popover>
        </>
    );
};
