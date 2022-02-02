import { useEffect, useRef } from 'react';

export const useFocus = <T extends HTMLElement>() => {
    const focusRef = useRef<T | null>(null);

    const elem = focusRef.current;

    console.log('Fjern denne');

    useEffect(() => {
        if (elem) {
            elem.focus();
        }
    }, [elem]);

    return { focusRef };
};
