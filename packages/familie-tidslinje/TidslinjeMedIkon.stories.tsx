import React, { useState } from 'react';
import { Periode, Tidslinje, TidslinjeProps } from './src';
import styled from 'styled-components';

import { Eu, NorwegianFlag } from '@navikt/ds-icons';
import { ToggleKnapp } from 'nav-frontend-toggle';

const TidlinjeContainer = styled.div`
    & div.tidslinje .eøs {
        background-color: yellow;
    }
`;

const StyledEu = styled(Eu)`
    position: relative;
    top: 2px;
    margin-right: 0.3rem;
`;

const StyledNorwegian = styled(NorwegianFlag)`
    position: relative;
    top: 2px;
    margin-right: 0.3rem;
`;

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
                        tom: new Date('2020-01-31'),
                        status: 'suksess',
                        infoPin: false,
                        className: 'eøs',
                        children: (
                            <>
                                <StyledEu />
                                <span>Dette er ein lang tekst for testing</span>
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
                                <StyledNorwegian />
                                <span>Dette er ein lang tekst for testing</span>
                            </>
                        ),
                    },
                    {
                        id: '456',
                        fom: new Date('2020-07-01'),
                        tom: new Date('2020-07-31'),
                        status: 'suksess',
                        className: 'norge',
                        children: <StyledNorwegian />,
                    },
                    {
                        id: '567',
                        fom: new Date('2020-08-01'),
                        tom: new Date('2020-08-31'),
                        status: 'advarsel',
                    },
                ],
            ],
        },
        pins: {
            defaultValue: [{ date: new Date('2020-03-15'), render: 'Dette er en pin' }],
        },
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
                <ToggleKnapp pressed={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </ToggleKnapp>
            </div>
            <TidlinjeContainer>
                <h2>Klikkbare perioder</h2>
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
                <ToggleKnapp pressed={kompakt} onClick={() => settKompakt(!kompakt)}>
                    Kompakt
                </ToggleKnapp>
            </div>
            <h2>Perioder ikke klikkbare</h2>
            <TidlinjeContainer>
                <Tidslinje kompakt={kompakt} {...args} />
            </TidlinjeContainer>
        </>
    );
};
NotClickableWithIcon.storyName = 'Uklikkbar tidslinje med ikon';
