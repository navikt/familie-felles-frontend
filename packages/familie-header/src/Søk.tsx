import React, { useState } from 'react';
import IkonSøk from './icons/IkonSøk';
import './Søk.less';

export interface SøkProps {
    onSøk: (value: string) => void;
    validator?: (value: string)=> boolean;
    onGyldigVerdi?: (value: string)=> void;
}

const Søk = ({ onSøk, validator, onGyldigVerdi }: SøkProps) => {
    const [value, setValue] = useState('');

    const søk = () => {
        if (value.length > 0) {
            onSøk(value);
        }
    };

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && value.length > 0) {
            søk();
        }
    };

    const onChange = (event: React.ChangeEvent) => {
        const changed= (event.target as HTMLInputElement).value
        setValue(changed);
        if(validator?.(changed)){
            onGyldigVerdi?.(changed);
        }
    };

    return (
        <div>
            <div className='søk_container'>
                <input className='søkefelt' onChange={onChange} onKeyPress={onKeyPress} value={value} />
                <button className='søkeknapp' onClick={søk}>
                    <IkonSøk />
                </button>
            </div>
        </div>
    );
};

export default Søk;
