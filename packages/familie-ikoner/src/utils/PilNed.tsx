import type * as React from 'react';

interface IPilNed {
    className?: string;
    heigth?: number;
    width?: number;
    onClick?: React.MouseEventHandler;
}

const PilNed: React.FunctionComponent<IPilNed> = ({ className, heigth = 24, width = 24, onClick }) => {
    const håndterTastetrykk = (event: React.KeyboardEvent<SVGSVGElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onClick(event as unknown as React.MouseEvent<SVGSVGElement>);
        }
    };

    return (
        <svg
            aria-labelledby={'pilned'}
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
            <title id={'PilNed'}>PilNed</title>
            <polygon
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
                strokeLinejoin="round"
                points="8.5,0.504 15.5,0.504 15.5,13.504 22,13.504 12,23.513   2,13.504 8.5,13.504 "
            />
        </svg>
    );
};

export default PilNed;
