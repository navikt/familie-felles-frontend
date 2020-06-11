import { Knapp, KnappBaseProps } from 'nav-frontend-knapper';
import React from 'react';

interface IProps {
    erLesevisning: boolean
}


const FamilieKnapp = ({ onClick, mini, type, spinner, children, erLesevisning }: KnappBaseProps & IProps) => {
    return !erLesevisning ? (
        <Knapp onClick={onClick} mini={mini} type={type} spinner={spinner}>
            {children}
        </Knapp>
    ) : null;
};

export default FamilieKnapp;
