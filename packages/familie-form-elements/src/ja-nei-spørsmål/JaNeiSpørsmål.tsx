import React, { ReactNode, useState } from 'react';
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
    initiellVerdi?: ESvar | undefined;
    feil?: ReactNode;
}

const StyledRadioPanelGruppe = styled(RadioPanelGruppe)`
  && label:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Capitalized = styled.span`
  ::first-letter{
    text-transform: capitalize;
  }
`;

export const JaNeiSpørsmål: React.FC<JaNeiSpørsmålProps> = ({
    legend,
    name,
    onChange,
    labelTekstForRadios,
    feil,
    initiellVerdi,
}) => {
    const [checked, setChecked] = useState<ESvar | undefined>(initiellVerdi);

    let radios = [
        { label: <Capitalized>{labelTekstForRadios.ja}</Capitalized>, value: ESvar.JA },
        {
            label: <Capitalized>{labelTekstForRadios.nei}</Capitalized>,
            value: ESvar.NEI,
        },
    ]

    const inkluderVetIkke = !!labelTekstForRadios.vetikke;

    if (inkluderVetIkke) {
        radios = [...radios, { label: <Capitalized>{labelTekstForRadios.vetikke}</Capitalized>, value: ESvar.VET_IKKE }];
    }

    return (
        <StyledRadioPanelGruppe
            legend={legend}
            name={name}
            radios={radios}
            checked={checked}
            onChange={(_event, value) => {
                setChecked(value);
                onChange(value);
            }}
            feil={feil}
        />
    );
};
