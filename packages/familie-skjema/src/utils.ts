import { ChangeEvent } from 'react';

// eslint-disable-next-line
export function isChangeEvent(value: any): value is ChangeEvent<HTMLInputElement> {
    return (
        typeof value === 'object' &&
        value !== null &&
        Reflect.has(value, 'target') &&
        Reflect.has(value.target, 'value')
    );
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString()
        .substring(1);
}

export function guid() {
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}
