import * as React from "react";
import classNames from "classnames";
import "./chevron-lenke.less";
import Chevron from "nav-frontend-chevron";

export enum Direction {
  RIGHT,
  LEFT,
}

interface ChevronLenkeProps {
  retning: Direction;
  tekst: string;
  hide?: boolean;
  dataTestId: string;

  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const  ChevronLenke = (props: ChevronLenkeProps) => {
  const { retning, tekst, onClick, hide, dataTestId } = props;
  const clsPar = [
    "chevron-lenke",
    { "chevron-lenke--hide": hide },
  ];
  return (
    <button
      className={classNames(clsPar)}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {retning === Direction.RIGHT ? (
        <>
          <span className={"chevron-lenke__tekst"}>{tekst}</span>
          <Chevron type={'høyre'} />
        </>
      ) : (
        <>
          <Chevron type={'venstre'} />
          <span className={"chevron-lenke__tekst"}>{tekst}</span>
        </>
      )}
    </button>
  );
}

export default ChevronLenke;
