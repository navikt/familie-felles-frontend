import React, { useState } from 'react';
import { default as TourModal } from './tour-modal';
import '../../endringslogg.css';
import { Button } from '@navikt/ds-react';
import { ModalType } from '../../utils/endringslogg-custom';

interface ModalStepperProps {
    modal: ModalType;
    id: string;
    buttonText?: string;
    forced?: boolean;
    dataset: string;
}

export const TourModalButton = (props: ModalStepperProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                variant="secondary"
                className={'endringslogg-stepperKnapp'}
                type="button"
                size="small"
                onClick={() => {
                    setOpen(true);
                }}
            >
                <b>{props.buttonText ? props.buttonText : 'Se hvordan'}</b>
            </Button>
            {open && (
                <TourModal
                    dataset={props.dataset}
                    open={open}
                    modal={props.modal}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
};
