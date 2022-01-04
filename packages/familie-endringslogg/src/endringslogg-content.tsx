import classNames from "classnames/dedupe";
import React from "react";
import Lenke from "nav-frontend-lenker"
import ExternalLinkIcon from './icons/external-link';
import { EndringsloggEntryWithSeenStatus } from "./utils/endringslogg-custom";
import "./endringslogg.less";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { TourModalButton } from "./modal/tour-modal/tour-modal-button";
import { trackLinkClick } from "./utils/utils";
import { Undertittel, Undertekst } from 'nav-frontend-typografi';

interface EndringsloggContentProps {
  innleggsListe: EndringsloggEntryWithSeenStatus[];
}

export const EndringsloggLink = (props: {
  linkText: string;
  link: string;
  onClick: () => void;
}) => {
  return (
    <Lenke
      className={"endringslogg-link"}
      target="_blank"
      href={props.link}
      onClick={props.onClick}
    >
      {props.linkText ? props.linkText : props.link}
      <ExternalLinkIcon className={"linkikon"} />
    </Lenke>
  );
}

export const EndringsloggContent = (props: EndringsloggContentProps) => {
  const content = props.innleggsListe.map((endring, index) => {
    return (
      <EndringsloggEntry
        key={index}
        _id={endring._id}
        date={endring.date}
        description={endring.description}
        title={endring.title}
        seen={endring.seen}
        children={endring.children}
        linkText={endring.linkText}
        link={endring.link}
        modal={endring.modal}
        forced={endring.forced}
        seenForced={endring.seenForced}
      />
    );
  });

  return <>{content}</>;
}

const isoTimeStringToDate = (dateString: string) => {
  const date = new Date(dateString);
  return (
    date.getDate() +
    ". " +
    date
      .toLocaleString("no-NO", { year: "numeric", month: "long" })
      .toLowerCase()
  );
};

const EndringsloggEntry = (props: EndringsloggEntryWithSeenStatus) => {
  return (
    <div className={classNames("endringslogg-rad", "endringslogg-skille")}>
      <div className={"endringslogg-datolinje"}>
        <div
          role={props.seen ? "alert" : ""}
          aria-label={
            props.seen ? "Nye endringer i Arbeidsrettet oppfølging" : ""
          }
          className={classNames("endringslogg-info-kolonne", {
            "endringslogg-info-nye-notifikasjoner": !props.seen,
          })}
        />
        <Undertekst>{isoTimeStringToDate(props.date!)}</Undertekst>
      </div>
      <div
        className={classNames("endringslogg-innhold","endringslogg-kolonne")}
      >
        <Undertittel>{props.title}</Undertittel>
        {props.description && (
          <div className={"endringslogg-block-content"}>
            <BlockContent blocks={props.description} />
          </div>
        )}
        {props.modal && (
          <TourModalButton
            id={props._id}
            modal={props.modal}
            buttonText="Se hvordan"
            forced={props.forced}
          />
        )}
        {props.link && props.linkText && (
          <EndringsloggLink
            linkText={props.linkText}
            link={props.link}
            onClick={() => trackLinkClick(props._id)}
          />
        )}
      </div>
    </div>
  );
}
