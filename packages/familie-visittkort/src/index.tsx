import Clipboard from '@navikt/familie-clipboard';
import { FamilieIkonVelger } from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
import styled from 'styled-components';
import { BodyShort, Label } from '@navikt/ds-react';
import {
    NavdsGlobalColorGray700,
    NavdsSpacing2,
    NavdsSpacing4,
} from '@navikt/ds-tokens/dist/tokens';

export interface IkonProps {
    className?: string;
    heigth?: number;
    width?: number;
}
export interface IProps {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string | React.ReactNode;
    ValgfrittIkon?: React.ComponentType<IkonProps>;
    children?: React.ReactNode;
}

const StyledVisittkort = styled.div`
    border-bottom: 1px solid ${NavdsGlobalColorGray700};
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    .visittkort__ikon {
        padding-right: ${NavdsSpacing2};
    }
    .visittkort__pipe {
        padding: 0 ${NavdsSpacing4};
    }
`;

export const Visittkort: React.FunctionComponent<IProps> = ({
    alder,
    children,
    ident,
    kjønn,
    navn,
    ValgfrittIkon,
}) => {
    return (
        <StyledVisittkort className={'visittkort'}>
            {ValgfrittIkon ? (
                <ValgfrittIkon className={'visittkort__ikon'} width={32} heigth={32} />
            ) : (
                <FamilieIkonVelger className={'visittkort__ikon'} alder={alder} kjønn={kjønn} />
            )}
            {typeof navn === 'string' ? <Label size={'small'}>{navn}</Label> : navn}

            <div className={'visittkort__pipe'}>|</div>

            <Clipboard>
                <BodyShort size={'small'}>{ident}</BodyShort>
            </Clipboard>

            {children}
        </StyledVisittkort>
    );
};

export default Visittkort;
