import React from 'react';
import { FnrInput, FnrInputProps } from 'nav-frontend-skjema';
import { erIdnr } from '@navikt/familie-validering';

interface FnrInputWrapperProps extends FnrInputProps {
    acceptSynthNr?: boolean;
}

//support synthID for FnrInput
export const FnrInputWrapper: React.FC<FnrInputWrapperProps> = ({
    id,
    onChange,
    onKeyDown,
    onValidate,
    value,
    acceptSynthNr,
    ...props
}: FnrInputWrapperProps) => {
    return (
        <FnrInput
            autoComplete={'off'}
            aria-label={props.placeholder}
            id={id}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const nyVerdi = event.target.value;
                onChange && onChange(event);
                onValidate && onValidate(erIdnr(nyVerdi, acceptSynthNr));
            }}
            onValidate={() => {}}
            onKeyDown={onKeyDown}
            value={value}
            {...props}
        />
    );
};
