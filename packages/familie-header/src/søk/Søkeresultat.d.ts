import React from 'react';
import { ISøkeresultat } from '..';
interface Props {
    formaterResultat?: (søkeresultat: ISøkeresultat, erSøkeresultatValgt: boolean) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: ISøkeresultat[];
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
}
declare const Søkeresultat: React.FC<Props>;
export default Søkeresultat;
