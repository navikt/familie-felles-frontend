import type React from 'react';
import type { ReactNode } from 'react';
import '@navikt/ds-css';
import { Popover } from '@navikt/ds-react';
import { type Ressurs, RessursStatus } from '@navikt/familie-typer/dist';
import type { ISøkeresultat } from '../types';
import { FnrInputWrapper } from './FnrInputWrapper';
import Styles from './Søk.module.less';
import Søkeresultater from './Søkeresultater';
import useSøk from './useSøk';

export interface SøkProps {
    formaterResultat?: (søkeresultat: ISøkeresultat, erSøkeresultatValgt: boolean) => React.ReactNode;
    label: string;
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    placeholder?: string;
    size?: 'small' | 'medium';
    ingenFagsakKomponent?: ReactNode;
}

export const inputId = 'sok-input';
export const søkKnappId = 'søk-knapp';
export const tømKnappId = 'tøm-knapp';

export const Søk = ({
    formaterResultat,
    nullstillSøkeresultater,
    søk,
    søkeresultatOnClick,
    søkeresultater,
    placeholder,
    label,
    size = 'small',
    ingenFagsakKomponent,
}: SøkProps) => {
    const {
        ankerElement,
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
            <div title={'søk'} data-theme="dark" className={Styles.sok}>
                <FnrInputWrapper
                    id={inputId}
                    laster={søkeresultater.status === RessursStatus.HENTER}
                    placeholder={placeholder}
                    label={label}
                    onEndre={onInputChange}
                    onKeyDown={onInputKeyDown}
                    onValidate={(isValid: boolean) => settErGyldig(isValid)}
                    value={ident}
                    utløserSøk={utløserSøk}
                    size={size}
                    onClear={() => {
                        nullstillInput(true);
                    }}
                />
            </div>
            {ankerElement && (
                <Popover
                    id={'søkeresultat'}
                    anchorEl={ankerElement}
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
                            settValgtSøkeresultat={søkeresultatIndex => settValgtSøkeresultat(søkeresultatIndex)}
                            søkeresultatOnClick={søkeresultatOnClick}
                            søkeresultater={søkeresultater}
                            valgtSøkeresultat={valgtSøkeresultat}
                            ingenFagsakKomponent={ingenFagsakKomponent}
                        />
                    </Popover.Content>
                </Popover>
            )}
        </>
    );
};
