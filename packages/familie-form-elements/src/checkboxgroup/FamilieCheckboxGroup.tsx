import { BodyShort, CheckboxGroup, CheckboxGroupProps, Label } from '@navikt/ds-react';
import { ASpacing5 } from '@navikt/ds-tokens/dist/tokens';
import styled from 'styled-components';

import React from 'react';

export interface ICheckboxGroupProps extends CheckboxGroupProps {
    erLesevisning: boolean;
}

const LesevisningContainer = styled.div`
    p:first-of-type {
        margin-top: ${ASpacing5};
    }
`;

export const FamilieCheckboxGroup: React.FC<ICheckboxGroupProps> = ({
    legend,
    value,
    className,
    erLesevisning,
    children,
    ...props
}) => {
    return erLesevisning ? (
        <LesevisningContainer>
            <Label spacing>{legend}</Label>
            {value?.map(item => (
                <BodyShort spacing>{item}</BodyShort>
            ))}
        </LesevisningContainer>
    ) : (
        <CheckboxGroup className={className} value={value} legend={legend} {...props}>
            {children}
        </CheckboxGroup>
    );
};
