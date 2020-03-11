import './index.less';

import * as React from 'react';
import { Hendelse, Tabs } from './types';

import classNames from 'classnames';
import Dokumenterknapp from './komponenter/Dokumenterknapp';
import HendelseItem from './komponenter/HendelseItem';
import Historikkknapp from './komponenter/Historikkknapp';
import Meldingerknapp from './komponenter/Meldingerknapp';

export { Tabs as Hendelsetype, Hendelse };

export interface IHendelsesoversiktProps {
    className?: string;
    hendelser?: Hendelse[];
}

const tilHendelseItem = (hendelse: Hendelse) => (
    <HendelseItem key={hendelse.id} hendelse={hendelse} />
);

const Hendelsesoversikt = ({ hendelser, className }: IHendelsesoversiktProps) => {
    const [aktivTab, settAktivTab] = React.useState<Tabs>(Tabs.Historikk);

    return (
        <div className={classNames('hendelsesoversikt', className)}>
            <div className={'hendelsesoversikt__header'}>
                <Historikkknapp
                    aktiv={aktivTab === Tabs.Historikk}
                    onClick={() => settAktivTab(Tabs.Historikk)}
                />
                <Meldingerknapp
                    aktiv={aktivTab === Tabs.Meldinger}
                    onClick={() => settAktivTab(Tabs.Meldinger)}
                />
                <Dokumenterknapp
                    aktiv={aktivTab === Tabs.Dokumenter}
                    onClick={() => settAktivTab(Tabs.Dokumenter)}
                />
            </div>
            {aktivTab === Tabs.Historikk && (
                <ul className={'hendelsesoversikt__list'}>{hendelser?.map(tilHendelseItem)}</ul>
            )}
        </div>
    );
};

export default Hendelsesoversikt;
