import Alertstripe from 'nav-frontend-alertstriper';
import React from 'react';

export enum InfoType {
    Info = 'info',
    Sukcess = 'suksess',
    Advarsel = 'advarsel',
    Feil = 'feil'
}

export interface IInfostripProps {
    type: InfoType;
    children?: React.ReactNode | React.ReactNode[];
}

export const Infostripe: React.FunctionComponent<IInfostripProps> = ({ type, children }) => {
    return <Alertstripe type={type}>{children}</Alertstripe>
}
