import { Ressurs, RessursStatus } from '@navikt/familie-typer';
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { inputId } from '.';
import { ISøkeresultat } from '..';
import { søkKnappId, tømKnappId } from './Søk';

export interface Props {
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
}

const useSøk = ({ nullstillSøkeresultater, søk, søkeresultatOnClick, søkeresultater }: Props) => {
    const [ident, settIdent] = useState('');
    const [identSistSøktPå, settIdentSistSøktPå] = useState('');
    const [anker, settAnker] = useState<HTMLElement | undefined>(undefined);
    const [valgtSøkeresultat, settValgtSøkeresultat] = useState(-1);
    const [erGyldig, settErGyldig] = useState(false);
    const ankerRef = useRef<HTMLElement>();

    useEffect(() => {
        if (erGyldig) {
            utløserSøk();
        }
    }, [erGyldig, ident]);

    useEffect(() => {
        window.addEventListener('keydown', handleGlobalKeydown);
        window.addEventListener('click', handleGlobalClick);

        return () => {
            window.removeEventListener('keydown', handleGlobalKeydown);
            window.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    const nullstillInput = (lukkPopover = false) => {
        settIdent('');
        settIdentSistSøktPå('');
        settErGyldig(false);
        lukkPopover && settAnker(undefined);
        nullstillSøkeresultater();
    };

    const settAnkerPåInput = () => {
        const ankerElement = document.getElementById(inputId) as HTMLElement;
        settAnker(ankerElement);
        ankerRef.current = ankerElement;
    };

    const utløserSøk = () => {
        const identUtenWhitespace = ident.replace(/ /g, '');
        søk(identUtenWhitespace);
        settIdentSistSøktPå(identUtenWhitespace);
        settAnkerPåInput();
    };

    const handleGlobalKeydown = (event: KeyboardEvent) => {
        if (ankerRef.current === undefined) { return; }
        if (event.key === 'Escape') { nullstillInput(true); }
    };

    const handleGlobalClick = () => {
        if (
            ankerRef.current !== undefined &&
            !ReactDOM.findDOMNode(ankerRef.current)?.contains(document.activeElement) &&
            !document.getElementById(søkKnappId)?.contains(document.activeElement) &&
            !document.getElementById(tømKnappId)?.contains(document.activeElement)
        ) {
            nullstillInput(true);
        }
    };

    const onInputChange = (event: React.ChangeEvent) => {
        const nyVerdi = (event.target as HTMLInputElement).value;
        settIdent(nyVerdi);

        if (nyVerdi === '') {
            nullstillSøkeresultater();
            settAnker(undefined);
        }
    };

    const onInputKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
                settValgtSøkeresultat(
                    valgtSøkeresultat === -1
                        ? søkeresultater.status === RessursStatus.SUKSESS
                            ? søkeresultater.data.length - 1
                            : -1
                        : valgtSøkeresultat - 1,
                );
                break;
            case 'ArrowDown':
                settValgtSøkeresultat(
                    valgtSøkeresultat <
                        (søkeresultater.status === RessursStatus.SUKSESS
                            ? søkeresultater.data.length - 1
                            : -1)
                        ? valgtSøkeresultat + 1
                        : -1,
                );
                break;
            case 'Enter':
                if (søkeresultater.status === RessursStatus.SUKSESS) {
                    if (
                        identSistSøktPå === ident &&
                        valgtSøkeresultat === -1 &&
                        søkeresultater.data.length === 1
                    ) {
                        søkeresultatOnClick(søkeresultater.data[0]);
                    } else if (valgtSøkeresultat !== -1) {
                        søkeresultatOnClick(søkeresultater.data[valgtSøkeresultat]);
                    } else {
                        utløserSøk();
                    }
                } else {
                    utløserSøk();
                }
                break;
        }
    };

    return {
        anker,
        ident,
        nullstillInput,
        onInputChange,
        onInputKeyDown,
        settErGyldig,
        settValgtSøkeresultat,
        utløserSøk,
        valgtSøkeresultat,
    };
};

export default useSøk;
