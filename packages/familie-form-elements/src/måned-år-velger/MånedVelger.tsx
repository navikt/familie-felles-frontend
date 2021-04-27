import React from 'react';
import { FamilieSelect } from '../select';
import { SelectProps } from 'nav-frontend-skjema';

export interface IMånedProps extends Omit<SelectProps, 'children'>{
    value: string | undefined;
    erLesevisning?: boolean;
}

const månedValg = [
    { mndNr: '01', verdi: 'Januar' },
    { mndNr: '02', verdi: 'Februar' },
    { mndNr: '03', verdi: 'Mars' },
    { mndNr: '04', verdi: 'April' },
    { mndNr: '05', verdi: 'Mai' },
    { mndNr: '06', verdi: 'Juni' },
    { mndNr: '07', verdi: 'Juli' },
    { mndNr: '08', verdi: 'August' },
    { mndNr: '09', verdi: 'September' },
    { mndNr: '10', verdi: 'Oktober' },
    { mndNr: '11', verdi: 'November' },
    { mndNr: '12', verdi: 'Desember' },
];

const månedsnavnForNummer = (value: string | undefined) => {
    return value ? månedValg.find((mnd) => mnd.mndNr === value)?.verdi : '';
}

export const MånedVelger: React.FC<IMånedProps> = ({
    value,
    erLesevisning = false,
    ...props
}) => {
    return (
        <FamilieSelect
            erLesevisning={erLesevisning}
            lesevisningVerdi={månedsnavnForNummer(value)}
            value={value}
            {...props}
        >
            <option value="">Måned</option>
            {månedValg.map((mnd) => (
                <option value={mnd.mndNr} key={mnd.mndNr}>
                    {mnd.verdi}
                </option>
            ))}
        </FamilieSelect>
    );
};

