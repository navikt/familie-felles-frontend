import React, { ReactNode, useState } from 'react';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import styled from 'styled-components';
import { ESvar } from './typer';

type LabelTekstForJaNei = {
    ja: ReactNode;
    nei: ReactNode;
};

export interface JaNeiSpørsmålProps {
    onChange: (value: ESvar) => void;
    legend: ReactNode;
    name: string;
    labelTekstForJaNei: LabelTekstForJaNei;
    initiellVerdi?: ESvar | undefined;
    feil?: ReactNode;
}

const StyledRadioPanelGruppe = styled(RadioPanelGruppe)`
    div {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-template: 'ja' 'nei';
        grid-gap: 1rem;

        label:first-child {
            grid-area: ja;
        }

        label:last-child {
            grid-area: nei;
        }
    }
`;

const Capitalized = styled.span`
    text-transform: capitalize;
`;

export const JaNeiSpørsmål: React.FC<JaNeiSpørsmålProps> = ({
    legend,
    name,
    onChange,
    labelTekstForJaNei,
    feil,
    initiellVerdi
}) => {
    const [checked, setChecked] = useState<ESvar | undefined>(initiellVerdi);

    return (
        <StyledRadioPanelGruppe
            legend={legend}
            name={name}
            radios={[
                { label: <Capitalized>{labelTekstForJaNei.ja}</Capitalized>, value: ESvar.JA },
                {
                    label: <Capitalized>{labelTekstForJaNei.nei}</Capitalized>,
                    value: ESvar.NEI,
                },
            ]}
            checked={checked}
            onChange={(_event, value) => {
                setChecked(value);
                onChange(value);
            }}
            feil={feil}
        />
    );
};
