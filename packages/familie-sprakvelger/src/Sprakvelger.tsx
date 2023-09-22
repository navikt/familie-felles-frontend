import * as React from 'react';
import styled from 'styled-components';
import { SpråkSelectMenu } from './SpråkSelectMenu';
import { Button, Wrapper } from 'react-aria-menubutton';
import { useSprakContext } from './SprakContext';
import { LocaleType, sprakTittel } from './typer';
import { GlobeIcon, ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { SkjultLabel } from '@navikt/familie-form-elements';
import { hentSprakvelgerLabelTekst } from './utils';
import { BodyShort } from '@navikt/ds-react';

const StyledWrapper = styled(Wrapper)`
    position: relative;
    outline: none;
`;

const StyledButton = styled(Button)`
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    outline: none;
    border-radius: 0.25rem;
    border: 3px solid var(--a-gray-400);

    &:focus {
        border: solid 3px var(--a-blue-800);
    }
`;

const StyledNormalTekst = styled(BodyShort)`
    padding: 0 1.22rem;
    flex-grow: 1;
`;

const StyledCollapse = styled(ChevronUpIcon)`
    z-index: -1;
`;

const StyledExpand = styled(ChevronDownIcon)`
    z-index: -1;
`;

export const Sprakvelger: React.FC<{ støttedeSprak: LocaleType[]; className?: string }> = ({
    støttedeSprak,
    className,
}) => {
    const [valgtLocale, setValgtLocale] = useSprakContext();
    const [erÅpen, setErÅpen] = React.useState(false);

    const handleSelection = (value: JSX.Element) => {
        const valgtSprak = støttedeSprak.find(locale => locale === value.key);
        if (valgtSprak) {
            setValgtLocale(valgtSprak);
        }
    };

    return (
        <StyledWrapper
            onSelection={(value: JSX.Element) => handleSelection(value)}
            onMenuToggle={wrapperState => setErÅpen(wrapperState.isOpen)}
            className={className}
        >
            <SkjultLabel htmlFor="språkvelger">
                {hentSprakvelgerLabelTekst(valgtLocale)}
            </SkjultLabel>
            <StyledButton id="språkvelger" value={valgtLocale}>
                <GlobeIcon
                    role="img"
                    focusable={false}
                    aria-hidden={true}
                    onResize={undefined}
                    onResizeCapture={undefined}
                />
                <StyledNormalTekst size={'small'}>
                    {sprakTittel[valgtLocale as LocaleType]}
                </StyledNormalTekst>
                {erÅpen ? (
                    <StyledCollapse
                        role="img"
                        focusable={false}
                        aria-hidden={true}
                        onResize={undefined}
                        onResizeCapture={undefined}
                    />
                ) : (
                    <StyledExpand
                        role="img"
                        focusable={false}
                        aria-hidden={true}
                        onResize={undefined}
                        onResizeCapture={undefined}
                    />
                )}
            </StyledButton>
            <SpråkSelectMenu valgtLocale={valgtLocale} støttedeSprak={støttedeSprak} />
        </StyledWrapper>
    );
};
