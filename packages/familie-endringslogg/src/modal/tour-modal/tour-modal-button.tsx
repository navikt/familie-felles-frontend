import React, { useState } from "react";
import { default as TourModal } from "./tour-modal";
import "../../endringslogg.less";
import { trackModalOpen } from "../../utils/utils";
import { ModalType } from "../../utils/endringslogg-custom";
import { Knapp } from 'nav-frontend-knapper';

interface ModalStepperProps {
  modal: ModalType;
  id: string;
  buttonText?: string;
  forced?: boolean;
}

export const TourModalButton = (props: ModalStepperProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Knapp
        className={"endringslogg-stepperKnapp"}
        mini
        onClick={() => {
          setOpen(true);
          trackModalOpen(props.id);
        }}
      >
        <b>{props.buttonText ? props.buttonText : "Se hvordan"}</b>
      </Knapp>
      <TourModal
        open={open}
        modal={props.modal}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
