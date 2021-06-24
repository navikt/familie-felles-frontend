import React, { ReactNode, useState, Ref } from 'react';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import styled from 'styled-components';
import { ESvar } from './typer';

type LabelTekstForJaNei = {
    ja: ReactNode;
    nei: ReactNode;
    vetikke?: ReactNode;
};

export interface JaNeiSpørsmålProps {
    onChange: (value: ESvar) => void;
    legend: ReactNode;
    name: string;
    labelTekstForRadios: LabelTekstForJaNei;
    initiellVerdi: ESvar | null;
    feil?: ReactNode;
}

const StyledRadioPanelGruppe = styled(RadioPanelGruppe)`
    && label:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const Capitalized = styled.span`
    ::first-letter {
        text-transform: capitalize;
    }
`;

export const JaNeiSpørsmål = React.forwardRef(
    (props: JaNeiSpørsmålProps, ref: Ref<RadioPanelGruppe> | undefined) => {
        const { legend, name, onChange, labelTekstForRadios, feil, initiellVerdi } = props;

        const [checked, setChecked] = useState<ESvar | null>(initiellVerdi);

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
                radios={radios}
                checked={checked ?? undefined}
                onChange={(_event, value) => {
                    setChecked(value);
                    onChange(value);
                }}
                feil={feil}
                ref={ref}
            />
        );
    },
);
