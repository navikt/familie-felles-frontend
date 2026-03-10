import React, { ReactNode } from 'react';

import ReactSelect, { GroupBase, Props, StylesConfig } from 'react-select';
import Creatable from 'react-select/creatable';
import styled from 'styled-components';
import {
    BgAccentModerate,
    BgAccentStrong,
    BorderAccentStrong,
    BorderDanger,
    BorderNeutralStrong,
    TextNeutral,
    TextNeutralContrast,
    TextNeutralSubtle,
} from '@navikt/ds-tokens/dist/tokens';
import { ErrorMessage, Label, omit } from '@navikt/ds-react';

export interface IProps {
    erLesevisning?: boolean;
    creatable?: boolean;
    label: ReactNode;
    feil?: ReactNode;
    propSelectStyles?: StylesConfig<ISelectOption, boolean, GroupBase<ISelectOption>>;
    className?: string;
}

const Container = styled.div`
    margin-bottom: 1rem;
`;

const navSelectStyles = (
    feil?: ReactNode,
    erLesevisning?: boolean,
): StylesConfig<ISelectOption, boolean, GroupBase<ISelectOption>> => ({
    control: (provided, state) => ({
        ...provided,
        border:
            feil && !state.isFocused
                ? `1px solid ${BorderDanger}`
                : `1px solid ${BorderNeutralStrong}`,
        borderRadius: '4px',
        boxShadow: state.isFocused
            ? `0 0 0 3px ${BorderAccentStrong}`
            : feil
              ? `0 0 0 1px ${BorderDanger}`
              : '',
        ':hover': {
            border: `1px solid ${BorderAccentStrong}`,
        },
    }),
    placeholder: provided => ({
        ...provided,
        color: TextNeutralSubtle,
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
                  color: TextNeutralSubtle,
                  ':hover': {
                      color: TextNeutral,
                  },
              },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    multiValue: (provided, _) => ({
        ...provided,
        backgroundColor: BgAccentModerate,
        maxWidth: '18rem',
    }),
    multiValueRemove: provided =>
        erLesevisning
            ? { display: 'none' }
            : {
                  ...provided,
                  ':hover': {
                      backgroundColor: BgAccentStrong,
                      color: TextNeutralContrast,
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

export const FamilieReactSelect: React.FC<
    IProps | Props<ISelectOption, boolean, GroupBase<ISelectOption>>
> = ({
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
    const stylesCombined: StylesConfig<ISelectOption, boolean, GroupBase<ISelectOption>> = {
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
