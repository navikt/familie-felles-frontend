import { default as React, useEffect, useState } from 'react';
import './tour-modal.css';
import ChevronLenke, { Direction } from '../../chevron-lenke/chevron-lenke';
import Stegviser from '../../stegviser/stegviser';
import { ModalType } from '../../utils/endringslogg-custom';
import { Heading, Loader, Modal } from '@navikt/ds-react';
import { PortableText } from '@portabletext/react';
import { hentEndringsloggSlideImage } from '../../utils/utils';

interface TourModalProps {
    modal: ModalType;
    open: boolean;
    onClose: (e: boolean) => void;
    dataset: string;
}

interface SlideImage {
    slideImage: string;
}

interface ImageFetching {
    image?: SlideImage;
    loading: boolean;
    error?: string;
}

const TourModal = (props: TourModalProps) => {
    const initialImageState = { loading: true };
    const [stepIndex, setStepIndex] = useState(0);
    const [imageFetching, setImageFetching] = useState<ImageFetching>(initialImageState);

    useEffect(() => {
        setImageFetching(initialImageState);
        if (
            props.modal.slides &&
            props.modal.slides[stepIndex] &&
            props.modal.slides[stepIndex].slideImageRef
        ) {
            hentEndringsloggSlideImage(props.modal.slides[stepIndex].slideImageRef, props.dataset)
                .then(response =>
                    response.json().then(jsonResponse => {
                        setImageFetching({
                            loading: false,
                            image: jsonResponse,
                        });
                    }),
                )
                .catch(() => {
                    setImageFetching({
                        loading: false,
                        error: 'Kunne ikke hente data for endringslogg',
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stepIndex]);

    const lukkModal = () => {
        setStepIndex(0);
        props.onClose(isFinalStep);
    };

    const handlePreviousBtnClicked = () => {
        setStepIndex(stepIndex - 1);
    };

    const handleNextBtnClicked = () => {
        setStepIndex(stepIndex + 1);
    };

    const steps = props.modal.slides;
    if (!steps) {
        return null;
    }
    const step = steps[stepIndex];
    const isFinalStep = stepIndex === steps.length - 1;

    const hidePrevBtn = stepIndex === 0;
    const nextBtnText = isFinalStep ? 'Ferdig' : 'Neste';
    const nextBtnHandleClick = isFinalStep ? lukkModal : handleNextBtnClicked;

    const modalTittel = props.modal?.header ? props.modal.header : 'Ny oppdatering';

    return props.open ? (
        <Modal
            className={'tour-modal'}
            open={props.open}
            onClose={lukkModal}
            header={{ heading: modalTittel }}
        >
            <Modal.Body>
                <main className={'tour-modal__main'}>
                    <div className={'tour-modal__main--bilde-wrapper'}>
                        {imageFetching.image && (
                            <img
                                alt={step.altText}
                                src={`data:image/jpeg;base64,${imageFetching.image.slideImage}`}
                                className={'tour-modal__main--bilde'}
                            />
                        )}
                        {imageFetching.error && <span>Noe gikk galt ved uthenting av bilde</span>}
                        {imageFetching.loading && <Loader size="3xlarge" title="Laster bilde..." />}
                    </div>
                    <div className={'tour-modal__main--beskrivelse'}>
                        <Heading size="small">{step.slideHeader}</Heading>
                        {step.slideDescription && (
                            <div className={'tour-modal__main--tekst'}>
                                <PortableText value={step.slideDescription} />
                            </div>
                        )}
                    </div>
                </main>
                <footer className={'tour-modal__footer'}>
                    <ChevronLenke
                        retning={Direction.LEFT}
                        tekst="Forrige"
                        hide={hidePrevBtn}
                        onClick={handlePreviousBtnClicked}
                        dataTestId="endringslogg_forrige-knapp"
                    />
                    <Stegviser antallSteg={steps.length} valgtSteg={stepIndex} />
                    <ChevronLenke
                        retning={Direction.RIGHT}
                        tekst={nextBtnText}
                        onClick={nextBtnHandleClick}
                        dataTestId={
                            isFinalStep ? 'endringslogg_ferdig-knapp' : 'endringslogg_neste-knapp'
                        }
                    />
                </footer>
            </Modal.Body>
        </Modal>
    ) : null;
};

export default TourModal;
