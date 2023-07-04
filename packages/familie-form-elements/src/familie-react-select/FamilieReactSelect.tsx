import React, { ReactNode } from 'react';

import ReactSelect, { Props, StylesConfig } from 'react-select';
import Creatable from 'react-select/creatable';
import styled from 'styled-components';
import {
    ASurfaceDanger,
    ASurfaceActionHover,
    ABorderStrong,
    ABorderFocus,
    ATextDefault,
    ATextSubtle,
    ATextOnInverted,
    ABlue100,
    ABlue500,
} from '@navikt/ds-tokens/dist/tokens';
import { ErrorMessage, Label, omit } from '@navikt/ds-react';

export interface IProps extends Props<{ label: string; value: string }, true | false> {
    erLesevisning?: boolean;
    creatable?: boolean;
    label: ReactNode;
    feil?: ReactNode;
    propSelectStyles?: StylesConfig;
    className?: string;
}

const Container = styled.div`
    margin-bottom: 1rem;
`;

const navSelectStyles = (feil?: ReactNode, erLesevisning?: boolean): StylesConfig => ({
    control: (provided, state) => ({
        ...provided,
        border:
            feil && !state.isFocused ? `1px solid ${ASurfaceDanger}` : `1px solid ${ABorderStrong}`,
        borderRadius: '4px',
        boxShadow: state.isFocused
            ? `0 0 0 3px ${ABorderFocus}`
            : feil
            ? `0 0 0 1px ${ASurfaceDanger}`
            : '',
        ':hover': {
            border: `1px solid ${ASurfaceActionHover}`,
        },
    }),
    placeholder: provided => ({
        ...provided,
        color: ATextSubtle,
    }),
    dropdownIndicator: provided =>
        erLesevisning
            ? { display: 'none' }
            : {
                  ...provided,
                  color: 'initial',
                  ':hover': {
                      color: 'initial',
                  },
              },
    clearIndicator: provided =>
        erLesevisning
            ? { display: 'none' }
            : {
                  ...provided,
                  color: ATextSubtle,
                  ':hover': {
                      color: ATextDefault,
                  },
              },
    multiValue: (provided, _) => ({
        ...provided,
        backgroundColor: ABlue100,
        maxWidth: '18rem',
    }),
    multiValueRemove: provided =>
        erLesevisning
            ? { display: 'none' }
            : {
                  ...provided,
                  ':hover': {
                      backgroundColor: ABlue500,
                      color: ATextOnInverted,
                  },
              },
});

const StyledFeilmelding = styled(ErrorMessage)`
    margin-top: 0.5rem;
`;

export type OptionType = {
    value: string;
    label: string;
};

export interface ISelectOption extends OptionType {
    value: string;
    label: string;
}

export const FamilieReactSelect: React.FC<IProps> = ({
    erLesevisning,
    creatable = false,
    label,
    value,
    feil,
    propSelectStyles,
    className,
    ...props
}) => {
    const propsWithoutStyles = omit(props, ['styles']);

    const id = `react-select-${label}`;
    const stylesCombined: StylesConfig = {
        ...navSelectStyles(feil, erLesevisning),
        ...propSelectStyles,
    };

    return (
        <Container className={className}>
            {typeof label === 'string' ? (
                <label htmlFor={id}>
                    <Label size={'small'} spacing={true}>
                        {label}
                    </Label>
                </label>
            ) : (
                label
            )}
            {creatable ? (
                <Creatable
                    formatCreateLabel={() => `Opprett`}
                    styles={stylesCombined}
                    id={id}
                    isDisabled={erLesevisning}
                    isClearable={!erLesevisning}
                    value={value}
                    placeholder={'Velg'}
                    noOptionsMessage={() => 'Ingen valg'}
                    {...propsWithoutStyles}
                />
            ) : (
                <ReactSelect
                    styles={stylesCombined}
                    id={id}
                    isDisabled={erLesevisning}
                    isClearable={!erLesevisning}
                    value={value}
                    placeholder={'Velg'}
                    noOptionsMessage={() => 'Ingen valg'}
                    {...propsWithoutStyles}
                />
            )}

            {feil && <StyledFeilmelding size={'small'}>{feil}</StyledFeilmelding>}
        </Container>
    );
};
