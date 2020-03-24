import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';

export enum InfoType{
    Info= 'info',
    Sukcess= 'suksess',
    Advarsel= 'advarsel',
    Feil= 'feil'
}

export interface IInfostripProps{
    type: InfoType;
    children?: React.ReactNode | React.ReactNode[];
}

const Infostripe: React.FunctionComponent<IInfostripProps>= ({type, children})=>{
    return  <Alertstripe type={type}>{children}</Alertstripe>
}

export default Infostripe;