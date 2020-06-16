import { Knapp, KnappBaseProps } from 'nav-frontend-knapper';
import React from 'react';

export interface IKnappProps extends KnappBaseProps {
    erLesevisning: boolean;
}

export const FamilieKnapp: React.FC<IKnappProps> = ({
    onClick,
    mini,
    type,
    spinner,
    children,
    erLesevisning,
}) => {
    return !erLesevisning ? (
        <Knapp onClick={onClick} mini={mini} type={type} spinner={spinner}>
            {children}
        </Knapp>
    ) : null;
};
