import { Knapp, KnappBaseProps } from 'nav-frontend-knapper';
import React from 'react';

export interface IKnappProps extends KnappBaseProps {
    erLesevisning: boolean;
}

export const FamilieKnapp: React.FC<IKnappProps> = ({
    children,
    erLesevisning,
    mini,
    onClick,
    spinner,
    type,
    ...props
}) => {
    return !erLesevisning ? (
        <Knapp mini={mini} onClick={onClick} spinner={spinner} type={type} {...props}>
            {children}
        </Knapp>
    ) : null;
};
