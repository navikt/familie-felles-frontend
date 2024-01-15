import * as React from 'react';
import styled from 'styled-components';
import { CopyButton, HStack, Label } from '@navikt/ds-react';
import { ABorderStrong, ABorderSubtle } from '@navikt/ds-tokens/dist/tokens';
import { FamilieIkonVelger } from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';

export interface IkonProps {
    className?: string;
    height?: number;
    width?: number;
}
export interface IProps extends React.PropsWithChildren {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string | React.ReactNode;
    ValgfrittIkon?: React.ComponentType<IkonProps>;
    dempetKantlinje?: boolean;
}

const StyledVisittkort = styled(HStack)<{ $dempetKantlinje: boolean }>`
    border-bottom: 1px solid ${props => (props.$dempetKantlinje ? ABorderSubtle : ABorderStrong)};
    height: 3rem;
`;

const GrådigChildrenContainer = styled.div`
    flex: 1;
`;

export const Visittkort: React.FunctionComponent<IProps> = ({
    alder,
    children,
    ident,
    kjønn,
    navn,
    ValgfrittIkon,
    dempetKantlinje = false,
}) => {
    return (
        <StyledVisittkort
            align="center"
            justify="space-between"
            gap="4"
            $dempetKantlinje={dempetKantlinje}
        >
            <HStack align="center" gap="4">
                {ValgfrittIkon ? (
                    <ValgfrittIkon width={24} height={24} />
                ) : (
                    <FamilieIkonVelger alder={alder} kjønn={kjønn} width={24} height={24} />
                )}
                {typeof navn === 'string' ? (
                    <Label size={'small'}>
                        {navn} ({alder} år)
                    </Label>
                ) : (
                    navn
                )}
                <div>|</div>
                <HStack align="center" gap="1">
                    {ident}
                    <CopyButton copyText={ident.replace(' ', '')} size={'small'} />
                </HStack>
            </HStack>
            <GrådigChildrenContainer>{children}</GrådigChildrenContainer>
        </StyledVisittkort>
    );
};

export default Visittkort;
