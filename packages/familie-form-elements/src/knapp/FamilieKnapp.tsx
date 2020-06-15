import { Knapp, KnappBaseProps } from 'nav-frontend-knapper';
import React from 'react';

export interface IKnappProps {
    erLesevisning: boolean;
}

export const FamilieKnapp = ({
    onClick,
    mini,
    type,
    spinner,
    children,
    erLesevisning,
}: KnappBaseProps & IKnappProps) => {
    return !erLesevisning ? (
        <Knapp onClick={onClick} mini={mini} type={type} spinner={spinner}>
            {children}
        </Knapp>
    ) : null;
};
