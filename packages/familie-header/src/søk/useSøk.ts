import { Ressurs, RessursStatus } from '@navikt/familie-typer';
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { inputId } from '.';
import { Søkeresultat } from '..';

export interface Props {
    label: React.ReactNode;
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultatOnClick: (søkResultat: Søkeresultat) => void;
    søkeresultater: Ressurs<Søkeresultat[]>;
}

const useSøk = ({
    label,
    nullstillSøkeresultater,
    søk,
    søkeresultatOnClick,
    søkeresultater,
}: Props) => {
    const [ident, settIdent] = useState('');
    const [identSistSøktPå, settIdentSistSøktPå] = useState('');
    const [anker, settAnker] = useState<HTMLElement | undefined>(undefined);
    const [valgtSøkeresultat, settValgtSøkeresultat] = useState(-1);
    const [erGyldig, settErGyldig] = useState(false);
    const søkKnappRef = useRef(null);
    const tømKnappRef = useRef(null);

    const ankerRef = useRef<HTMLElement>();

    useEffect(() => {
        ankerRef.current = anker;
    }, [anker]);

    useEffect(() => {
        if (erGyldig) {
            utløserSøk();
        }
    }, [erGyldig]);

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
        settAnker(document.getElementById(inputId) as HTMLElement);
    };

    const utløserSøk = () => {
        const identUtenWhitespace = ident.replace(/ /g, '');
        søk(identUtenWhitespace);
        settIdentSistSøktPå(identUtenWhitespace);
        settAnkerPåInput();
    };

    const knappTitle = () => {
        if (søkeresultater.status === RessursStatus.HENTER) {
            return 'søker';
        } else {
            return typeof label === 'string' ? label : 'søk';
        }
    };

    const handleGlobalKeydown = (event: KeyboardEvent) => {
        if (ankerRef.current === undefined) return;
        if (event.key === 'Escape') nullstillInput(true);
    };

    const handleGlobalClick = (event: MouseEvent) => {
        if (
            ankerRef.current !== undefined &&
            ReactDOM.findDOMNode(ankerRef.current) !== event.target &&
            ReactDOM.findDOMNode(søkKnappRef.current) !== event.target &&
            ReactDOM.findDOMNode(tømKnappRef.current) !== event.target
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
        knappTitle,
        nullstillInput,
        onInputChange,
        onInputKeyDown,
        settErGyldig,
        settValgtSøkeresultat,
        søkKnappRef,
        tømKnappRef,
        utløserSøk,
        valgtSøkeresultat,
    };
};

export default useSøk;
