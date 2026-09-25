import type * as React from 'react';

interface IPilVenstre {
    className?: string;
    heigth?: number;
    width?: number;
    onClick?: React.MouseEventHandler;
}

const PilVenstre: React.FunctionComponent<IPilVenstre> = ({ className, heigth = 24, width = 24, onClick }) => {
    const håndterTastetrykk = (event: React.KeyboardEvent<SVGSVGElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onClick(event as unknown as React.MouseEvent<SVGSVGElement>);
        }
    };

    return (
        <svg
            aria-labelledby={'pilvenstre'}
            className={className}
            height={heigth}
            width={width}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            onKeyDown={onClick ? håndterTastetrykk : undefined}
            role={onClick ? 'button' : 'img'}
            tabIndex={onClick ? 0 : undefined}
        >
            <title id={'PilVenstre'}>PilVenstre</title>
            <polygon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
                strokeLinejoin="round"
                points="23.5,15.504 23.5,8.504 10.5,8.504 10.5,2.025 0.491,12   10.5,22.004 10.5,15.504 "
            />
        </svg>
    );
};

export default PilVenstre;
