import { default as React, useState } from "react";
import "./tour-modal.less";
import ChevronLenke, { Direction } from "../../chevron-lenke/chevron-lenke";
import Stegviser from "../../stegviser/stegviser";
import { ModalType } from "../../utils/endringslogg-custom";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import ModalWrapper from 'nav-frontend-modal';
import { Normaltekst, Undertittel } from "nav-frontend-typografi";

export interface Step {
  tittel: string;
  tekst: React.ReactNode;
  bilde: string;
  altTekst: string;
}

interface TourModalProps {
  modal: ModalType;
  open: boolean;
  onClose: (e: boolean) => void;
}

const TourModal = (props: TourModalProps) => {
  const [stepIndex, setStepIndex] = useState(0);
  const lukkModal = () => {
    setStepIndex(0)
    props.onClose(isFinalStep);
  };

  const handlePreviousBtnClicked = () => {
    setStepIndex(stepIndex - 1);
  };

  const handleNextBtnClicked = () => {
    setStepIndex(stepIndex + 1);
  };

  const steps = props.modal.slides;
  if (!steps) { return null; }
  const step = steps[stepIndex];
  const isFinalStep = stepIndex === steps.length - 1;

  const hidePrevBtn = stepIndex === 0;
  const nextBtnText = isFinalStep ? "Ferdig" : "Neste";
  const nextBtnHandleClick = isFinalStep ? lukkModal : handleNextBtnClicked;

  const modalTittel = props.modal?.header
    ? props.modal.header
    : "Ny oppdatering";

  return (
    <ModalWrapper
      className={"tour-modal"}
      isOpen={props.open}
      shouldCloseOnOverlayClick
      onRequestClose={lukkModal}
      contentLabel={"Endringslogg-modal"}
    >
      <div
        className={"tour-modal__header--wrapper"}
        data-testid="endringslogg_tour-modal"
      >
        <header className={"tour-modal__header"}>
          <Undertittel>{modalTittel}</Undertittel>
        </header>
      </div>
      <main className={"tour-modal__main"}>
        <div className={"tour-modal__main--bilde-wrapper"}>
          {step.slideImage && (
            <img
              alt={step.altText}
              src={`data:image/jpeg;base64,${step.slideImage}`}
              className={"tour-modal__main--bilde"}
              onClick={() => {
                const data = `data:image/png;base64,${step.slideImage}`;
                const newWindow = window.open('about:blank');
                const image = new Image();
                image.src = data;
                setTimeout(() => {
                  newWindow?.document?.write(image.outerHTML);
                }, 0);
              }}
            />
          )}
        </div>
        <div className={"tour-modal__main--beskrivelse"}>
          <Normaltekst>{step.slideHeader}</Normaltekst>
          {step.slideDescription && (
            <div className={"tour-modal__main--tekst"}>
              <BlockContent blocks={step.slideDescription} />
            </div>
          )}
        </div>
      </main>
      <footer className={"tour-modal__footer"}>
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
            isFinalStep
              ? "endringslogg_ferdig-knapp"
              : "endringslogg_neste-knapp"
          }
        />
      </footer>
    </ModalWrapper>
  );
};

export default TourModal;
