import React, { useState } from 'react';
import styled from 'styled-components';

import { Success, Error, Warning } from '@navikt/ds-icons';

import { Periode, Tidslinje, TidslinjeProps } from './src';
import { Switch } from '@navikt/ds-react';
import '@navikt/ds-css';

const StyledContainer = styled.div(
    (props: { kompakt: boolean }) => `
    & button.periode {
        & div svg {
            position: relative;
            top: ${props.kompakt ? 2 : 3}px;
        }
    }
    & div.periode {
        & div svg {
            position: relative;
            top: ${props.kompakt ? 2 : 3}px;
        }
    }
`,
);

export default {
    title: 'Komponenter/Tidslinje',
    component: Tidslinje,
    args: {
        rader: [
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
        aktivtUtsnitt: {
            fom: new Date('2021-04-01'),
            tom: new Date('2021-04-30'),
        },
    },
};

export const LongPeriodClickable = (args: TidslinjeProps) => {
    const [rader, setRader] = useState<Periode[][]>(args.rader);
    const [aktivPeriode, setAktivPeriode] = useState<Periode>();
    const [kompakt, settKompakt] = useState<boolean>(false);

    const onSelectPeriode = (periode: Periode) => {
        setAktivPeriode(periode);
        setRader(prevRader =>
            prevRader.map(rad => rad.map(p => ({ ...p, active: periode.id === p.id }))),
        );
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
            </div>
            <StyledContainer kompakt={kompakt}>
                <h2>Klikkbare perioder</h2>
                <p>
                    Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato
                    for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021.
                </p>
                <p>
                    De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til
                    31.12.2022 og 01.01.2020 til 31.12.2021
                </p>
                <p>Eksempelet viser også hvordan det er mulig å bruke ikon i periodene.</p>
                <Tidslinje
                    kompakt={kompakt}
                    {...args}
                    startDato={new Date('2021-01-01')}
                    sluttDato={new Date('2021-12-31')}
                    aktivRad={aktivRad}
                    onSelectPeriode={onSelectPeriode}
                />
            </StyledContainer>
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
                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </Switch>
            </div>
            <StyledContainer kompakt={kompakt}>
                <h2>Perioder ikke klikkbare</h2>
                <p>
                    Eksempel på visning av perioder, som strekker seg utanfor startDato og sluttDato
                    for tidslinjen. Start- og sluttdato for visning er 01.01.2021 og 31.12.2021.
                </p>
                <p>
                    De ulike periodene kan gå fra 01.01.2020 til 31.12.2022, 01.01.2021 til
                    31.12.2022 og 01.01.2020 til 31.12.2021
                </p>
                <p>Eksempelet viser også hvordan det er mulig å bruke ikon i periodene.</p>
                <Tidslinje
                    kompakt={kompakt}
                    startDato={new Date('2021-01-01')}
                    sluttDato={new Date('2021-12-31')}
                    {...args}
                />
            </StyledContainer>
        </>
    );
};
LongPeriodNotClickable.storyName = 'Uklikkbar tidslinje med lange cropped perioder';
