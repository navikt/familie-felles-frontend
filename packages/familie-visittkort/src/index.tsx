import Clipboard from '@navikt/familie-clipboard';
import { FamilieIkonVelger } from '@navikt/familie-ikoner';
import { kjønnType } from '@navikt/familie-typer';
import Element, { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';

import './index.less';

export interface IVisittkortProps {
    alder: number;
    ident: string;
    kjønn: kjønnType;
    navn: string;
}

const Visittkort: React.SFC<IVisittkortProps> = ({ alder, ident, kjønn, navn }) => {
    const [didCopy, setDidCopy] = React.useState(false);

    React.useEffect(() => {
        if (didCopy) {
            setTimeout(() => setDidCopy(false), 2000);
        }
    }, [didCopy]);

    return (
        <div className={'visittkort'}>
            <FamilieIkonVelger className={'visittkort__ikon'} alder={alder} kjønn={kjønn} />
            <Element type={'element'}>{navn}</Element>

            <div className={'visittkort__skråstrek'}>/</div>

            <Clipboard>
                <Normaltekst>{ident}</Normaltekst>
            </Clipboard>
        </div>
    );
};

export default Visittkort;
