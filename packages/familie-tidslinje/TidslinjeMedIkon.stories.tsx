import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Periode, Tidslinje, TidslinjeProps } from './src';
import styled from 'styled-components';

import { Eu, NorwegianFlag } from '@navikt/ds-icons';

const euSvg = encodeURIComponent(renderToStaticMarkup(<Eu />));
const norgeSvg = encodeURIComponent(renderToStaticMarkup(<NorwegianFlag />));

const euUrl = `data:image/svg+xml,${euSvg}`;
const norgeUrl = `data:image/svg+xml,${norgeSvg}`;

const TidslinjeMedIkonContainer = styled.div`
    div.tidslinjerad div::before,
    button::before {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        top: 50%;
        left: 6px;
        transform: translateY(-50%);
        background-repeat: no-repeat;
    }
    div.eøs::before,
    button.eøs::before {
        background-image: url(${euUrl});
    }
    div.norge::before,
    button.norge::before {
        background-image: url(${norgeUrl});
    }
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
                    },
                    {
                        id: '234',
                        fom: new Date('2020-02-01'),
                        tom: new Date('2020-02-29'),
                        status: 'feil',
                        className: 'eøs',
                    },
                    {
                        id: '345',
                        fom: new Date('2020-03-01'),
                        tom: new Date('2020-03-31'),
                        status: 'suksess',
                        className: 'norge',
                    },
                    {
                        id: '456',
                        fom: new Date('2020-07-01'),
                        tom: new Date('2020-07-31'),
                        status: 'suksess',
                        className: 'norge',
                    },
                    {
                        id: '567',
                        fom: new Date('2020-08-01'),
                        tom: new Date('2020-08-31'),
                        status: 'advarsel',
                        className: 'eøs',
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

    const onSelectPeriode = (periode: Periode) => {
        console.log(periode);
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
            <TidslinjeMedIkonContainer>
                <h2>Klikkbare perioder</h2>
                <Tidslinje {...args} aktivRad={aktivRad} onSelectPeriode={onSelectPeriode} />
            </TidslinjeMedIkonContainer>
            {aktivPeriode && <div>{`${aktivPeriode.fom} - ${aktivPeriode.tom}`}</div>}
        </>
    );
};
ClickableWithIcon.storyName = 'Klikkbar tidslinje med ikon';

export const NotClickableWithIcon = (args: TidslinjeProps) => {
    return (
        <>
            <h2>Perioder ikke klikkbare</h2>
            <TidslinjeMedIkonContainer>
                <Tidslinje {...args} />
            </TidslinjeMedIkonContainer>
        </>
    );
};
NotClickableWithIcon.storyName = 'Uklikkbar tidslinje med ikon';
