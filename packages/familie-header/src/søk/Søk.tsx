import './Søk.less';

import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import React, { useState } from 'react';

import { IkonFeil, IkonGyldig, IkonSpinner, IkonSøk } from '../icons';

export interface SøkProps {
    onSøk: (value: string) => void;
    onEndring?: (value: string) => void;
    spinner?: boolean;
    validator?: (value: string) => boolean;
    plassholder?: string;
    onGyldigVerdi?: (value: string) => void;
    autoSøk?: boolean;
    children?: React.ReactNode | React.ReactNode[];
}

export const Søk = ({ onSøk, onEndring, validator, onGyldigVerdi, autoSøk = true, spinner = false, plassholder='', children }: SøkProps) => {
    const [verdi, settVerdi] = useState('');
    const [anker, settAnker] = useState<HTMLElement | undefined>(undefined);
    const [gyldig, settGyldig] = useState(false);

    const søk = (nøkkel?: string) => {
        const gyldigNøkkel = nøkkel || verdi;

        gyldigNøkkel.length > 0 && onSøk(gyldigNøkkel);
    };

    const tastenTrykkes = (event: React.KeyboardEvent) => {
        //Vis popover når du trykker på en tast. Dette for å sikre at søkestatusen vises korrekt når den ble tilbake fra skjult.
        settAnker(verdi.length > 0 ? event.currentTarget as HTMLElement : undefined);
        event.key === 'Enter' && verdi.length > 0 && søk();
    };

    const søkKlikket= (event: React.MouseEvent)=>{
        settAnker(verdi.length > 0 ? event.currentTarget as HTMLElement : undefined);
        søk();
    }

    const innspillEndret = (event: React.ChangeEvent) => {
        const changed = (event.target as HTMLInputElement).value
        settVerdi(changed);
        //sørg for at popover vises
        settAnker(changed.length > 0 ? event.currentTarget as HTMLElement : undefined);
        onEndring?.(changed);
        const erGyldig = validator?.(changed);
        settGyldig(erGyldig || false);

        if (erGyldig) {
            onGyldigVerdi?.(changed);
            autoSøk && søk(changed);
        }
    };

    const prompt = !spinner && validator && gyldig && verdi.length > 0 && <IkonGyldig />
        || !spinner && validator && !gyldig && verdi.length > 0 && <IkonFeil />

    return (
        <div className='søk_container'>
            {prompt && <div className='søk_container__prompt'>{prompt}</div>}
            {spinner && <div className='søk_container__spinner'><IkonSpinner /></div>}
            <input className='søk_container__felt' onChange={innspillEndret} onKeyPress={tastenTrykkes} value={verdi} placeholder={plassholder} />
            <button className='søk_container__knapp' onClick={søkKlikket}>
                <IkonSøk />
            </button>
            {children && <Popover
                id={'søkresultat'}
                ankerEl={anker}
                orientering={PopoverOrientering.UnderVenstre}
                autoFokus={false}
                onRequestClose={() => { settAnker(undefined); }}
                tabIndex={-1}
                utenPil
            >
                <div className='søk_container__resultat'>
                    {children}
                </div>
            </Popover>}
        </div>
    );
};