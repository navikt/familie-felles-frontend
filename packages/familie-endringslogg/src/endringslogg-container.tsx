import { default as React, RefObject, useRef, useState } from 'react';
import EndringsloggIkon, { StilType } from './icons/endringslogg-icon';
import { EndringsloggContent } from './endringslogg-content';
import TransitionContainer from './transition-container';
import { useEventListener } from './hooks/use-event-listener';
import { EndringsloggEntryWithSeenStatus } from './utils/endringslogg-custom';
import './endringslogg.css';
import classNames from 'classnames';
import { Heading, Label } from '@navikt/ds-react';

interface EndringsloggContainerProps {
    content: EndringsloggEntryWithSeenStatus[];
    onOpen: () => void;
    onClose: () => void;
    userId: string;
    appId: string;
    appName: string;
    dataset: string;
    stil?: StilType;
    alignLeft?: boolean;
    errorMessage?: string;
}

export const EndringsloggContainer = (props: EndringsloggContainerProps) => {
    const [endringsloggApen, setEndringsloggApen] = useState(false);
    const ulesteNotifikasjoner = props.content.filter(element => !element.seen).length;

    const loggNode = useRef<HTMLDivElement>(null); // Referanse til omsluttende div rundt loggen
    const buttonRef = useRef<HTMLButtonElement>(null);

    const requestSetOpenStatus = (setOpenTo: boolean) => {
        if (setOpenTo) {
            props.onOpen();
        } else {
            props.onClose();
        }
        setEndringsloggApen(setOpenTo);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
        if (
            loggNode.current?.contains(event.target) ||
            document.body.classList.contains('ReactModal__Body--open')
        ) {
            // Klikket er inne i komponenten, eller modalen vises
            return;
        }
        // Klikket er utenfor, oppdater staten
        if (endringsloggApen) {
            requestSetOpenStatus(false);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const escHandler = (event: any) => {
        if (event.keyCode === 27 && endringsloggApen) {
            requestSetOpenStatus(false);
            if (buttonRef.current) {
                buttonRef.current.focus();
            }
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const click = (event: any) => {
        event.stopPropagation();
        requestSetOpenStatus(!endringsloggApen);
        if (!endringsloggApen) {
            if (buttonRef.current) {
                buttonRef.current.focus();
            }
        }
    };

    useEventListener('mousedown', handleClickOutside);
    useEventListener('keydown', escHandler);

    return (
        <div ref={loggNode} className={'endringslogg'}>
            <EndringsloggIconButton
                onClick={click}
                open={endringsloggApen}
                newNotifications={ulesteNotifikasjoner}
                buttonRef={buttonRef}
                name={props.appName}
                stil={props.stil}
            />
            <TransitionContainer visible={endringsloggApen} alignLeft={props.alignLeft}>
                <EndringsloggHeader appName={props.appName} />
                <div className={'innhold-container'} data-testid="endringslogg-innhold">
                    <EndringsloggContent innleggsListe={props.content} dataset={props.dataset} />
                    {props.errorMessage && <Label>{props.errorMessage}</Label>}
                </div>
            </TransitionContainer>
        </div>
    );
};

interface EndringsloggIconButtonProps {
    buttonRef: RefObject<HTMLButtonElement>;
    open: boolean;
    newNotifications: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (e?: any) => void;
    name: string;
    stil?: StilType;
}

const EndringsloggIconButton = (props: EndringsloggIconButtonProps) => {
    return (
        <button
            aria-label={`Endringslogg for ${props.name}`}
            ref={props.buttonRef}
            className={classNames(
                'endringslogg-knapp',
                'endringslogg-dropDown',
                props.open && 'endringslogg-dropDown-active',
            )}
            onClick={props.onClick}
            data-testid="endringslogg-knapp"
        >
            <EndringsloggIkon stil={props.stil} />
            {props.newNotifications > 0 && (
                <div className={'ring-container'}>
                    <div className={'ringring'} />
                    <div className={'circle'} data-testid="endringslogg_nye-notifikasjoner">
                        <div className={'antall-notifikasjoner'}>{props.newNotifications}</div>
                    </div>
                </div>
            )}
        </button>
    );
};

const EndringsloggHeader = (props: { appName: string }) => {
    return (
        <Heading size="small" level="1" className={'collapse-header'}>
            Nytt i {props.appName}
        </Heading>
    );
};
