import React, { useState } from 'react';

import { Periode, Tidslinje, TidslinjeProps } from './src';
import { Switch } from '@navikt/ds-react';
import '@navikt/ds-css';

export default {
    title: 'Komponenter/Tidslinje',
    component: Tidslinje,
    args: {
        rader: [
            [
                {
                    id: '123',
                    fom: new Date('2020-01-01'),
                    tom: new Date('2020-01-31'),
                    status: 'suksess',
                    infoPin: false,
                },
                {
                    id: '234',
                    fom: new Date('2020-02-01'),
                    tom: new Date('2020-02-29'),
                    status: 'feil',
                },
                {
                    id: '345',
                    fom: new Date('2020-03-01'),
                    tom: new Date('2020-03-31'),
                    status: 'suksess',
                },
                {
                    id: '456',
                    fom: new Date('2020-07-01'),
                    tom: new Date('2020-07-31'),
                    status: 'suksess',
                },
                {
                    id: '567',
                    fom: new Date('2020-08-01'),
                    tom: new Date('2020-08-31'),
                    status: 'advarsel',
                },
            ],
            [
                {
                    id: '678',
                    fom: new Date('2020-02-01'),
                    tom: new Date('2020-02-29'),
                    status: 'inaktiv',
                },
                {
                    id: '789',
                    fom: new Date('2020-03-01'),
                    tom: new Date('2020-03-31'),
                    status: 'inaktiv',
                },
            ],
            [
                {
                    id: 'test678',
                    fom: new Date('2020-02-01'),
                    tom: new Date('2020-02-29'),
                    status: 'feil',
                },
                {
                    id: 'test789',
                    fom: new Date('2020-03-01'),
                    tom: new Date('2020-03-31'),
                    status: 'suksess',
                    infoPin: true,
                },
            ],
        ],
        pins: [{ date: new Date('2020-03-15'), render: 'Dette er en pin' }],
        aktivtUtsnitt: {
            fom: new Date('2020-02-01'),
            tom: new Date('2020-02-29'),
        },
    },
};

export const BasicClickable = (args: TidslinjeProps) => {
    const [rader, setRader] = useState<Periode[][]>(args.rader);
    const [aktivPeriode, setAktivPeriode] = useState<Periode>();
    const [kompakt, settKompakt] = useState<boolean>(false);
    const [retningSynkende, settRetningSynkende] = useState<boolean>(false);

    const onSelectPeriode = (periode: Periode) => {
        setAktivPeriode(periode);
        setRader(rader => rader.map(rad => rad.map(p => ({ ...p, active: periode.id === p.id }))));
    };

    const aktivRad =
        aktivPeriode &&
        rader.reduce(
            (radIndex: number, rad: Periode[], i: number) =>
                rad.find(({ id }) => id === aktivPeriode.id) ? i : radIndex,
            undefined,
        );
    return (
        <>
            <div>
                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </Switch>
                <Switch
                    checked={retningSynkende}
                    onClick={() => settRetningSynkende(!retningSynkende)}
                >
                    Synkende
                </Switch>
            </div>
            <div>
                <h2>Klikkbare perioder</h2>
                <p>
                    Eksempel på klikkbar familie-tidslinje med default styling. Tilgjengelige
                    classnames på perioder er: 'success', 'advarsel', 'feil' og 'inaktiv'
                </p>
                <Tidslinje
                    kompakt={kompakt}
                    retning={retningSynkende ? 'synkende' : undefined}
                    {...args}
                    aktivRad={aktivRad}
                    onSelectPeriode={onSelectPeriode}
                />
            </div>
            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}
        </>
    );
};
BasicClickable.storyName = 'Enkel klikkbar tidslinje';

export const BasicNotClickable = (args: TidslinjeProps) => {
    const [kompakt, settKompakt] = useState<boolean>(false);
    const [retningSynkende, settRetningSynkende] = useState<boolean>(false);

    return (
        <>
            <div>
                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </Switch>
                <Switch
                    checked={retningSynkende}
                    onClick={() => settRetningSynkende(!retningSynkende)}
                >
                    Synkende
                </Switch>
            </div>
            <div>
                <h2>Perioder ikke klikkbare</h2>
                <p>
                    Eksempel på uklikkbar familie-tidslinje med default styling. Tilgjengelige
                    classnames på perioder er: 'success', 'advarsel', 'feil' og 'inaktiv'
                </p>
                <Tidslinje
                    kompakt={kompakt}
                    retning={retningSynkende ? 'synkende' : undefined}
                    {...args}
                />
            </div>
        </>
    );
};
BasicNotClickable.storyName = 'Enkel uklikkbar tidslinje';
