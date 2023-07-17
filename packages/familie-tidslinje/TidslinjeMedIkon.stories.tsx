import React, { useState } from 'react';
import { Periode, Tidslinje, TidslinjeProps } from './src';
import styled from 'styled-components';

import '@navikt/ds-css';
import { Eu, NorwegianFlag } from '@navikt/ds-icons';
import { Detail, Switch } from '@navikt/ds-react';

const TidlinjeContainer = styled.div`
    & div.tidslinje .eøs {
        background-color: yellow;
    }
`;

const StyledEu = styled(Eu)`
    margin-right: 0.3rem;
`;

const StyledNorwegian = styled(NorwegianFlag)`
    margin-right: 0.3rem;
`;

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
                    className: 'eøs',
                    children: (
                        <>
                            <StyledEu
                                height="24"
                                width="24"
                                style={{ position: 'relative', top: '-1px' }}
                            />
                            <span style={{ position: 'relative', top: '-6px' }}>
                                Dette er ein lang tekst for testing
                            </span>
                        </>
                    ),
                    hoverLabel: 'Dette er ein lang tekst for testing',
                },
                {
                    id: '234',
                    fom: new Date('2020-02-01'),
                    tom: new Date('2020-02-29'),
                    status: 'feil',
                    className: 'eøs',
                    children: <StyledEu />,
                },
                {
                    id: '345',
                    fom: new Date('2020-03-01'),
                    tom: new Date('2020-03-31'),
                    status: 'suksess',
                    className: 'norge',
                    children: (
                        <>
                            <StyledNorwegian
                                height="24"
                                width="24"
                                style={{
                                    color: 'var(--a-orange-600)',
                                    position: 'relative',
                                    top: '-1px',
                                }}
                            />
                            <Detail
                                size="small"
                                style={{ display: 'inline', position: 'relative', top: '-8px' }}
                            >
                                Dette er ein lang tekst for testing
                            </Detail>
                        </>
                    ),
                },
                {
                    id: '456',
                    fom: new Date('2020-07-01'),
                    tom: new Date('2020-07-31'),
                    status: 'suksess',
                    className: 'norge',
                    children: <StyledNorwegian height="24" width="24" />,
                },
                {
                    id: '567',
                    fom: new Date('2020-08-01'),
                    tom: new Date('2020-08-31'),
                    status: 'advarsel',
                },
            ],
        ],
        pins: [{ date: new Date('2020-03-15'), render: 'Dette er en pin' }],
    },
};

export const ClickableWithIcon = (args: TidslinjeProps) => {
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
                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </Switch>
            </div>
            <TidlinjeContainer>
                <h2>Klikkbare perioder</h2>
                <p>
                    Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og
                    tekst. Også eksempel på egne klasser på perioder.
                </p>
                <p>Styling må tilpasses bruken.</p>
                <Tidslinje
                    kompakt={kompakt}
                    {...args}
                    aktivRad={aktivRad}
                    onSelectPeriode={onSelectPeriode}
                />
            </TidlinjeContainer>
            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}
        </>
    );
};
ClickableWithIcon.storyName = 'Klikkbar tidslinje med ikon';

export const NotClickableWithIcon = (args: TidslinjeProps) => {
    const [kompakt, settKompakt] = useState<boolean>(false);
    return (
        <>
            <div>
                <Switch checked={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </Switch>
            </div>
            <h2>Perioder ikke klikkbare</h2>
            <p>
                Eksempel på muligheten for litt mer avansert innhold med blanding av ikon og tekst.
                Også eksempel på egne klasser på perioder.
            </p>
            <p>Styling må tilpasses bruken.</p>
            <TidlinjeContainer>
                <Tidslinje kompakt={kompakt} {...args} />
            </TidlinjeContainer>
        </>
    );
};
NotClickableWithIcon.storyName = 'Uklikkbar tidslinje med ikon';
