import React, { ReactNode } from 'react';

import ReactSelect, { NamedProps, StylesConfig } from 'react-select';
import Creatable from 'react-select/creatable';
import styled from 'styled-components';

import navFarger from 'nav-frontend-core';
import { Label } from 'nav-frontend-skjema';
import { Feilmelding } from 'nav-frontend-typografi';

export interface IProps extends NamedProps<{ label: string; value: string }, true | false> {
    erLesevisning?: boolean;
    creatable?: boolean;
    label: ReactNode;
    feil?: ReactNode;
    propSelectStyles?: StylesConfig;
}

const Container = styled.div`
    margin-bottom: 1rem;
`;

const navSelectStyles = (feil?: ReactNode, erLesevisning?: boolean): StylesConfig => ({
    control: (provided, state) => ({
        ...provided,
        border:
            feil && !state.isFocused
                ? `1px solid ${navFarger.redError}`
                : `1px solid ${navFarger.navGra60}`,
        borderRadius: '4px',
        boxShadow: state.isFocused
            ? `0 0 0 3px ${navFarger.fokusFarge}`
            : feil
            ? `0 0 0 1px ${navFarger.redError}`
            : '',
        ':hover': {
            border: `1px solid ${navFarger.navBla}`,
        },
    }),
    placeholder: provided => ({
        ...provided,
        color: navFarger.navGra60,
    }),
    dropdownIndicator: provided => (
        erLesevisning ? { display: 'none' }
        : {
        ...provided,
        color: 'initial',
        ':hover': {
            color: 'initial',
        },
    }),
    clearIndicator: provided => (
        erLesevisning ? { display: 'none' }
        : {
        ...provided,
        color: navFarger.navGra60,
        ':hover': {
            color: navFarger.navMorkGra,
        },
    }),
    multiValue: (provided, _) => ({
        ...provided,
        backgroundColor: navFarger.navBlaLighten80,
        maxWidth: '18rem',
    }),
    multiValueRemove: provided => (
        erLesevisning ? { display: 'none' }
        : {
        ...provided,
        ':hover': {
            backgroundColor: navFarger.navBla,
            color: 'white',
        },
    }),
});

const StyledFeilmelding = styled(Feilmelding)`
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
    ...props
}) => {
    const id = `react-select-${label}`;

    const hentSelectProps = () => ({
        styles: {
            ...navSelectStyles(feil, erLesevisning),
            ...propSelectStyles,
        },
        id: id,
        isDisabled: erLesevisning,
        isClearable: !erLesevisning,
        value,
        placeholder: 'Velg',
        noOptionsMessage: () => 'Ingen valg',
        ...props,
    });

    return (
        <Container>
            {typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label}
            {creatable ? (
                <Creatable
                    formatCreateLabel={value => `Opprett "${value}"`}
                    {...hentSelectProps()}
                />
            ) : (
                <ReactSelect {...hentSelectProps()} />
            )}

            {feil && <StyledFeilmelding>{feil}</StyledFeilmelding>}
        </Container>
    );
};
