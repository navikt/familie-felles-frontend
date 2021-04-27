/// <reference types="react" />
import { Ressurs } from '@navikt/familie-typer';
import { ISøkeresultat } from '..';
export interface Props {
    nullstillSøkeresultater: () => void;
    søk: (value: string) => void;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
}
declare const useSøk: ({ nullstillSøkeresultater, søk, søkeresultatOnClick, søkeresultater }: Props) => {
    anker: HTMLElement | undefined;
    ident: string;
    nullstillInput: (lukkPopover?: boolean) => void;
    onInputChange: (event: React.ChangeEvent) => void;
    onInputKeyDown: (event: React.KeyboardEvent) => void;
    settErGyldig: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    settValgtSøkeresultat: import("react").Dispatch<import("react").SetStateAction<number>>;
    utløserSøk: () => void;
    valgtSøkeresultat: number;
};
export default useSøk;
