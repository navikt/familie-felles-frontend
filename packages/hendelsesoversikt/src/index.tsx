import './index.less';

import * as React from 'react';
import { Hendelse, Hendelsetype } from './types';

import classNames from 'classnames';
import Dokumenterknapp from './komponenter/Dokumenterknapp';
import HendelseItem from './komponenter/HendelseItem';
import Historikkknapp from './komponenter/Historikkknapp';
import Meldingerknapp from './komponenter/Meldingerknapp';

export { Hendelsetype, Hendelse };

export interface IHendelsesoversiktProps {
    className?: string;
    hendelser?: Hendelse[];
}

const tilHendelseItem = (hendelse: Hendelse) => (
    <HendelseItem key={hendelse.id} hendelse={hendelse} />
);

const Hendelsesoversikt = ({ hendelser, className }: IHendelsesoversiktProps) => {
    const [aktivtFilter, setAktivtFilter] = React.useState<Hendelsetype>(Hendelsetype.Historikk);

    return (
        <div className={classNames('hendelsesoversikt', className)}>
            <div className={'hendelsesoversikt__header'}>
                <Historikkknapp
                    aktiv={aktivtFilter === Hendelsetype.Historikk}
                    onClick={() => setAktivtFilter(Hendelsetype.Historikk)}
                />
                <Meldingerknapp
                    aktiv={aktivtFilter === Hendelsetype.Meldinger}
                    onClick={() => setAktivtFilter(Hendelsetype.Meldinger)}
                />
                <Dokumenterknapp
                    aktiv={aktivtFilter === Hendelsetype.Dokumenter}
                    onClick={() => setAktivtFilter(Hendelsetype.Dokumenter)}
                />
            </div>
            <ul className={'hendelsesoversikt__list'}>{hendelser?.map(tilHendelseItem)}</ul>
        </div>
    );
};

export default Hendelsesoversikt;
