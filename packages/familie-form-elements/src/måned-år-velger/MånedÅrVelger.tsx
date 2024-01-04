import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Label, ErrorMessage } from '@navikt/ds-react';
import { Årvelger } from './ÅrVelger';
import { MånedVelger } from './MånedVelger';

export interface IMånedÅrProps {
    label?: string;
    årMånedInitiell?: string;
    onEndret: (årMåned?: string) => void;
    antallÅrTilbake: number;
    antallÅrFrem: number;
    feilmelding?: string;
    erLesevisning?: boolean;
    disabled?: boolean;
}

const StyledMånedvelger = styled.div`
    padding-right: 0.5em;
`;
const StyledÅrvelger = styled.div`
    padding-right: 1.5em;
`;
export const FlexDiv = styled.div`
    display: flex;
    flex-direction: 'row';
    flex-wrap: wrap;
`;

export const MånedÅrVelger: React.FC<IMånedÅrProps> = ({
    label,
    årMånedInitiell,
    onEndret,
    antallÅrTilbake = 10,
    antallÅrFrem = 4,
    feilmelding,
    erLesevisning = false,
    disabled = false,
}) => {
    const [år, settÅr] = useState(
        årMånedInitiell ? parseInt(årMånedInitiell.split('-')[0], 10) : undefined,
    );
    const [måned, settMåned] = useState(
        årMånedInitiell ? årMånedInitiell.split('-')[1] : undefined,
    );

    // Får uendelig loop hvis onEndret blir en del av effekten
    useEffect(() => {
        if (år && måned) {
            onEndret(`${år}-${måned}`);
        } else {
            onEndret(undefined);
        }
    }, [år, måned]);

    return (
        <>
            <div>{typeof label === 'string' ? <Label>{label}</Label> : label}</div>
            <FlexDiv>
                <StyledMånedvelger>
                    <MånedVelger
                        label="Velg måned"
                        hideLabel
                        value={måned}
                        onChange={e => settMåned(e.currentTarget.value)}
                        erLesevisning={erLesevisning}
                        disabled={disabled}
                    />
                </StyledMånedvelger>
                <StyledÅrvelger>
                    <Årvelger
                        label="Velg år"
                        hideLabel
                        value={år}
                        onChange={e => settÅr(parseInt(e.currentTarget.value, 10))}
                        antallÅrTilbake={antallÅrTilbake}
                        antallÅrFrem={antallÅrFrem}
                        erLesevisning={erLesevisning}
                        disabled={disabled}
                    />
                </StyledÅrvelger>
            </FlexDiv>
            {feilmelding && <ErrorMessage>{feilmelding}</ErrorMessage>}
        </>
    );
};
