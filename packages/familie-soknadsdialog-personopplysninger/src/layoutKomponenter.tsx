import styled from 'styled-components';
import AlertStripe from 'nav-frontend-alertstriper';

export const KomponentGruppe = styled.div`
    padding-bottom: 2rem;
    :last-child {
        padding-bottom: 0;
    }
`;

export const FeltGruppe = styled.div`
    padding-bottom: 2rem;
`;

export const StyledAlertStripe = styled(AlertStripe)`
    p {
        margin: 0;
    }
`;
