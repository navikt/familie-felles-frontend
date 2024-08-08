import React, { ReactNode, useState, Ref } from 'react';
import { Radio, RadioGroup, RadioGroupProps } from '@navikt/ds-react';
import styled from 'styled-components';
import { ESvar } from './typer';

type LabelTekstForJaNei = {
    ja: ReactNode;
    nei: ReactNode;
    vetikke?: ReactNode;
};

export interface JaNeiSpørsmålProps extends Omit<RadioGroupProps, 'children'> {
    onChange: (value: ESvar) => void;
    labelTekstForRadios: LabelTekstForJaNei;
    initiellVerdi: ESvar | null;
}

const StyledRadioPanelGruppe = styled(RadioGroup)`
    && label:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const Capitalized = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
`;

// eslint-disable-next-line react/display-name
export const JaNeiSpørsmål = React.forwardRef(
    (props: JaNeiSpørsmålProps, ref: Ref<HTMLFieldSetElement> | undefined) => {
        const {
            legend,
            name,
            onChange,
            labelTekstForRadios,
            error,
            initiellVerdi,
            size,
            required,
            description,
        } = props;

        const [checked, setChecked] = useState<ESvar | ''>(initiellVerdi ?? '');

        let radios = [
            { label: <Capitalized>{labelTekstForRadios.ja}</Capitalized>, value: ESvar.JA },
            {
                label: <Capitalized>{labelTekstForRadios.nei}</Capitalized>,
                value: ESvar.NEI,
            },
        ];

        const inkluderVetIkke = !!labelTekstForRadios.vetikke;

        if (inkluderVetIkke) {
            radios = [
                ...radios,
                {
                    label: <Capitalized>{labelTekstForRadios.vetikke}</Capitalized>,
                    value: ESvar.VET_IKKE,
                },
            ];
        }

        return (
            <StyledRadioPanelGruppe
                legend={legend}
                name={name}
                value={checked ?? undefined}
                onChange={value => {
                    setChecked(value);
                    onChange(value);
                }}
                error={error}
                ref={ref}
                size={size}
                required={required}
                description={description}
            >
                {radios.map(radio => (
                    <Radio key={radio.value} value={radio.value}>
                        {radio.label}
                    </Radio>
                ))}
            </StyledRadioPanelGruppe>
        );
    },
);
