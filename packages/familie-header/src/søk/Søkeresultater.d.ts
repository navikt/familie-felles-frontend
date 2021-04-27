import React from 'react';
import AlertStripe from 'nav-frontend-alertstriper';
import { Ressurs } from '@navikt/familie-typer';
import { ISøkeresultat } from '../types';
interface Props {
    formaterResultat?: (søkeresultat: ISøkeresultat, erSøkeresultatValgt: boolean) => React.ReactNode;
    søkeresultatOnClick: (søkResultat: ISøkeresultat) => void;
    søkeresultater: Ressurs<ISøkeresultat[]>;
    valgtSøkeresultat: number;
    settValgtSøkeresultat: (søkeresultatIndex: number) => void;
}
export declare const StyledAlertStripe: import("styled-components").StyledComponent<typeof AlertStripe, any, {}, never>;
declare const Søkeresultater: React.FC<Props>;
export default Søkeresultater;
