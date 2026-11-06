import { Radio, RadioGroup, type RadioGroupProps } from '@navikt/ds-react';
import React, { type ReactNode, type Ref, useState } from 'react';
import Styles from './JaNeiSpørsmål.module.less';
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

// eslint-disable-next-line react/display-name
export const JaNeiSpørsmål = React.forwardRef(
    (props: JaNeiSpørsmålProps, ref: Ref<HTMLFieldSetElement> | undefined) => {
        const { legend, name, onChange, labelTekstForRadios, error, initiellVerdi, size, required, description } =
            props;

        const [checked, setChecked] = useState<ESvar | ''>(initiellVerdi ?? '');

        let radios = [
            { label: <span className={Styles.capitalized}>{labelTekstForRadios.ja}</span>, value: ESvar.JA },
            {
                label: <span className={Styles.capitalized}>{labelTekstForRadios.nei}</span>,
                value: ESvar.NEI,
            },
        ];

        const inkluderVetIkke = !!labelTekstForRadios.vetikke;

        if (inkluderVetIkke) {
            radios = [
                ...radios,
                {
                    label: <span className={Styles.capitalized}>{labelTekstForRadios.vetikke}</span>,
                    value: ESvar.VET_IKKE,
                },
            ];
        }

        return (
            <RadioGroup
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
            </RadioGroup>
        );
    },
);
