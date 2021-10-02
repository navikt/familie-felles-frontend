import React from 'react';
import { FnrInput, FnrInputProps } from 'nav-frontend-skjema';
import {validerIdnr} from './idnrValidator';

//support synthID for FnrInput
export const FnrInputWrapper: React.FC<FnrInputProps> = ({
    id,
    onChange,
    onKeyDown,
    onValidate,
    value,
    ...props
}: FnrInputProps) => {
    const [ident, settIdent] = React.useState("");

    return (
        <FnrInput
            autoComplete={'off'}
            aria-label={props.placeholder}
            id={id}
            onChange={
                (event: React.ChangeEvent)=>{
                    const nyVerdi = (event.target as HTMLInputElement).value;
                    settIdent(nyVerdi);
                }
            }
            onKeyDown={onKeyDown}
            onValidate={() => onValidate(erIdnr(ident))}
            value={value}
            {...props}
        />
    );
};
