import { useEffect, useRef } from 'react';

export const useFocus = <T extends HTMLElement>() => {
    const focusRef = useRef<T | null>(null);

    const elem = focusRef.current;

    console.log('hei1');

    useEffect(() => {
        if (elem) {
            elem.focus();
        }
    }, [elem]);

    return { focusRef };
};
