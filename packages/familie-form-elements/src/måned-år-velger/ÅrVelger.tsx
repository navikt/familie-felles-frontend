import React from 'react';
import { FamilieSelect } from '../select';
import { SelectProps } from 'nav-frontend-skjema';

export interface IÅrProps extends Omit<SelectProps, 'children'>{
    value: number | undefined;
    antallÅrFrem: number;
    antallÅrTilbake: number;
    erLesevisning?: boolean;
}

const range = (start: number, end: number): number[] =>
    Array.from({ length: end - start }, (_, k) => k + start);

const lagÅrOptions = (år: number | undefined, antallÅrFrem: number, antallÅrTilbake: number): number[] => {
    const gjeldendeÅr = new Date().getFullYear();
    const start = år ? Math.min(år, gjeldendeÅr - antallÅrTilbake) : gjeldendeÅr - antallÅrTilbake;
    const slutt = år ? Math.max(år, gjeldendeÅr + antallÅrFrem) : gjeldendeÅr + antallÅrFrem;
    return range(start, slutt)
};

export const Årvelger: React.FC<IÅrProps> = ({
    value,
    antallÅrFrem,
    antallÅrTilbake,
    erLesevisning = false,
    bredde = 'xs',
    ...props
}) => {
    const årOptions = lagÅrOptions(value, antallÅrFrem, antallÅrTilbake);
    return (
        <FamilieSelect
            lesevisningVerdi={value ? value.toString() : ''}
            value={value}
            erLesevisning={erLesevisning}
            {...props}
        >
            <option value="">År</option>
            {årOptions.map((verdi) => (
                <option value={verdi} key={verdi}>
                    {verdi}
                </option>
            ))}
        </FamilieSelect>
    );
};

