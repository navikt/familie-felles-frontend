import React, { useState } from 'react';

import { ToggleKnapp } from 'nav-frontend-toggle';

import { Success, Error, Warning } from '@navikt/ds-icons';

import { Periode, Tidslinje, TidslinjeProps } from './src';

export default {
    title: 'Komponenter/Tidslinje',
    component: Tidslinje,
    argTypes: {
        rader: {
            defaultValue: [
                [
                    {
                        id: '123',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'suksess',
                        children: <Success />,
                    },
                ],
                [
                    {
                        id: '678',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2021-12-31'),
                        status: 'inaktiv',
                    },
                ],
                [
                    {
                        id: 'test678',
                        fom: new Date('2021-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'feil',
                        children: <Error />,
                    },
                ],
                [
                    {
                        id: '123',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'advarsel',
                        children: <Warning />,
                    },
                ],
                [],
                [
                    {
                        id: '123',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'inaktiv',
                    },
                ],
                [
                    {
                        id: '123',
                        fom: new Date('2021-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'advarsel',
                        children: <Warning />,
                    },
                ],
                [
                    {
                        id: '678',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2021-12-31'),
                        status: 'feil',
                        children: <Error />,
                    },
                ],
                [
                    {
                        id: 'test678',
                        fom: new Date('2021-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'suksess',
                        children: <Success />,
                    },
                ],
                [],
                [
                    {
                        id: '123',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2021-12-31'),
                        status: 'advarsel',
                        children: <Warning />,
                    },
                ],
                [
                    {
                        id: '123',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'feil',
                        children: <Error />,
                    },
                ],
                [
                    {
                        id: '678',
                        fom: new Date('2020-01-01'),
                        tom: new Date('2021-12-31'),
                        status: 'suksess',
                        children: <Success />,
                    },
                ],
                [
                    {
                        id: 'test678',
                        fom: new Date('2021-01-01'),
                        tom: new Date('2022-12-31'),
                        status: 'inaktiv',
                    },
                ],
            ],
        },
        aktivtUtsnitt: {
            defaultValue: {
                fom: new Date('2020-02-01'),
                tom: new Date('2020-02-29'),
            },
        },
    },
};

export const LongPeriodClickable = (args: TidslinjeProps) => {
    const [rader, setRader] = useState<Periode[][]>(args.rader);
    const [aktivPeriode, setAktivPeriode] = useState<Periode>();
    const [kompakt, settKompakt] = useState<boolean>(false);

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
                <ToggleKnapp pressed={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </ToggleKnapp>
            </div>
            <div>
                <h2>Klikkbare perioder</h2>
                <Tidslinje
                    kompakt={kompakt}
                    {...args}
                    startDato={new Date('2021-01-01')}
                    sluttDato={new Date('2021-12-31')}
                    aktivRad={aktivRad}
                    onSelectPeriode={onSelectPeriode}
                />
            </div>
            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}
        </>
    );
};
LongPeriodClickable.storyName = 'Klikkbar tidslinje med lange cropped perioder';

export const LongPeriodNotClickable = (args: TidslinjeProps) => {
    const [kompakt, settKompakt] = useState<boolean>(false);

    return (
        <>
            <div>
                <ToggleKnapp pressed={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </ToggleKnapp>
            </div>
            <div>
                <h2>Perioder ikke klikkbare</h2>
                <Tidslinje
                    kompakt={kompakt}
                    startDato={new Date('2021-01-01')}
                    sluttDato={new Date('2021-12-31')}
                    {...args}
                />
            </div>
        </>
    );
};
LongPeriodNotClickable.storyName = 'Uklikkbar tidslinje med lange cropped perioder';
