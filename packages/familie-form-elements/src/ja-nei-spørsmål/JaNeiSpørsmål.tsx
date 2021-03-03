import React, { ReactNode, useState } from 'react';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import styled from 'styled-components';
import { ESvar } from './typer';

type LabelTekstForJaNei = {
    ja: ReactNode;
    nei: ReactNode;
};

interface JaNeiSpørsmålProps {
    onChange: (value: ESvar) => void;
    legend: JSX.Element | string;
    name: string;
    labelTekstForJaNei: LabelTekstForJaNei;
}

const StyledRadioPanelGruppe = styled(RadioPanelGruppe)`
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
        grid-template: 'ja nei';
        grid-gap: 1rem;
        padding-top: 1rem;

        label {
            margin-bottom: 0.5rem;
        }

        label:first-child {
            grid-area: ja;
        }

        label:last-child {
            grid-area: nei;
        }

        @media all and (max-width: 420px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template: 'ja' 'nei';
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
}) => {
    const [checked, setChecked] = useState<ESvar | undefined>();

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
        />
    );
};
