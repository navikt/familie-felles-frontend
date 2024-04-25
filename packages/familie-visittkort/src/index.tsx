import * as React from 'react';
import styled from 'styled-components';
import { CopyButton, HStack, Label } from '@navikt/ds-react';
import { ABorderStrong, ABorderSubtle, ASpacing4 } from '@navikt/ds-tokens/dist/tokens';
import { FamilieIkonVelger } from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';
export interface IProps extends React.PropsWithChildren {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string | React.ReactNode;
    ikon?: React.ReactElement;
    dempetKantlinje?: boolean;
    padding?: boolean;
    borderBottom?: boolean;
}

const StyledVisittkort = styled(HStack)<{ $dempetKantlinje: boolean; $padding: boolean }>`
    ${props => props.$borderBottom && `border-bottom: 1px solid ${props.$dempetKantlinje ? ABorderSubtle : ABorderStrong}`};
    height: 3rem;
    padding: ${props => props.$padding && `0 ${ASpacing4}`};
`;

const GrådigChildrenContainer = styled(HStack)`
    flex: 1;
`;

export const Visittkort: React.FunctionComponent<IProps> = ({
    alder,
    children,
    ident,
    kjønn,
    navn,
    ikon,
    dempetKantlinje = false,
    padding = false,
    borderBottom = true,
}) => {
    return (
        <StyledVisittkort
            align="center"
            justify="space-between"
            gap="4"
            $dempetKantlinje={dempetKantlinje}
            $padding={padding}
            $borderBottom={borderBottom}
        >
            <HStack align="center" gap="4">
                {ikon ? (
                    ikon
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
            <GrådigChildrenContainer align="center" gap="4">
                {children}
            </GrådigChildrenContainer>
        </StyledVisittkort>
    );
};

export default Visittkort;
