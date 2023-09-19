import { FamilieIkonVelger } from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';
import * as React from 'react';
import styled from 'styled-components';
import { CopyButton, Label } from '@navikt/ds-react';
import { AGray700, ASpacing2, ASpacing4 } from '@navikt/ds-tokens/dist/tokens';

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
    border-bottom: 1px solid ${AGray700};
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    .visittkort__ikon {
        padding-right: ${ASpacing2};
    }
    .visittkort__pipe {
        padding: 0 ${ASpacing4};
    }
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
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
            {typeof navn === 'string' ? (
                <Label size={'small'}>
                    {navn} ({alder} år)
                </Label>
            ) : (
                navn
            )}

            <div className={'visittkort__pipe'}>|</div>

            <FlexBox>
                {ident}
                <CopyButton copyText={ident.replace(' ', '')} size={'small'} />
            </FlexBox>

            {children}
        </StyledVisittkort>
    );
};

export default Visittkort;
