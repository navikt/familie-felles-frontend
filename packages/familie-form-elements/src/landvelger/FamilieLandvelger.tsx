import React from 'react';

import '@navikt/ds-css';
import { Country, CountryFilter } from '@navikt/land-verktoy';
import CountrySelect, { CountrySelectProps } from '@navikt/landvelger';
import styled from 'styled-components';

import navFarger from 'nav-frontend-core';
import { Element } from 'nav-frontend-typografi';
import classNames from 'classnames';

const Landvelger = styled(CountrySelect)`
    margin-bottom: 1rem;

    & div.c-countrySelect__select {
        margin-top: 0px;

        .c-countrySelect__select__indicator {
            color: initial;
        }

        .c-countrySelect__select__indicator-separator {
            width: 0px;
        }

        .c-countrySelect__select--is-disabled {
            background-color: ${navFarger.navGraBakgrunn};

            .c-countrySelect__select__indicators {
                display: none;
            }
        }

        .c-countrySelect__select__control {
            border: 1px solid ${props => (props.feil ? navFarger.redError : navFarger.navGra60)};
            box-shadow: ${props => (props.feil ? `0 0 0 1px ${navFarger.redError}` : 'none')};
        }
    }

    .navds-error-message {
        color: ${navFarger.redError};
        font-size: 1rem;
        font-weight: bold;

        &::before {
            display: none;
        }
    }

    .navds-body-long {
        margin-top: 2px;
        margin-bottom: 2px;
    }
`;

export interface ILandvelgerProps {
    className?: string;
    value?: string | string[] | undefined;
    feil?: string;
    label: string | JSX.Element;
    placeholder?: string | undefined;
    isMulti?: boolean;
    eøs?: boolean;
    medFlagg?: boolean;
    medWave?: boolean;
    sirkulær?: boolean;
    size?: 'small' | 'medium';
    erLesevisning?: boolean;
    onChange: (value: Country) => void;
}

export const FamilieLandvelger: React.FC<ILandvelgerProps> = ({
    className,
    value,
    feil,
    label,
    placeholder,
    isMulti = false,
    eøs = false,
    sirkulær = false,
    size = 'small',
    medFlagg = false,
    medWave = false,
    erLesevisning = false,
    onChange,
}) => {
    const id = `country-select-${label}`;

    let landvelgerProps: CountrySelectProps<Country> = {
        id,
        values: value,
        placeholder,
        error: feil ? feil : undefined,
        isMulti,
        flags: medFlagg,
        flagWave: medFlagg && medWave,
        flagType: sirkulær ? 'circle' : 'original',
        closeMenuOnSelect: true,
        size: medFlagg ? 'medium' : size,
        isDisabled: erLesevisning,
        onOptionSelected: onChange,
    };
    if (eøs) {
        landvelgerProps = { ...landvelgerProps, includeList: CountryFilter.EEA({}) };
    }
    return (
        <div className={classNames('skjemaelement', className)}>
            <Landvelger feil={feil} {...landvelgerProps} place label={<Element>{label}</Element>} />
        </div>
    );
};
