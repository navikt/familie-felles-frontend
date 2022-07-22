import React from 'react';
import { Button, ButtonProps } from '@navikt/ds-react';
import '@navikt/ds-css';

export interface IKnappProps extends ButtonProps {
    erLesevisning: boolean;
    spinner?: boolean;
}

export const FamilieKnapp: React.FC<IKnappProps> = ({
    children,
    className,
    erLesevisning,
    loading,
    onClick,
    spinner,
    type,
    ...props
}) => {
    return !erLesevisning ? (
        <Button
            className={className}
            onClick={onClick}
            loading={spinner || loading}
            type={type}
            {...props}
        >
            {children}
        </Button>
    ) : null;
};
