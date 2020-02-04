import * as React from 'react';

interface IKopierIkon {
    className?: string;
    heigth?: number;
    onClick?: React.MouseEventHandler;
    width?: number;
}

export const KopierIkon: React.StatelessComponent<IKopierIkon> = ({
    className,
    heigth,
    onClick,
    width,
}) => {
    return (
        <svg
            aria-labelledby={'kopier'}
            className={className}
            height={heigth}
            width={width}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
        >
            <title id={'kopier'}>Kopier</title>
            <g
                fill="none"
                fill-rule="evenodd"
                stroke="#0067C5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
            >
                <path d="M1.5 20.673V6.01h10.257v14.662z" />
                <path d="M7.198 3.7V1.5h10.258v14.662H14.89" />
            </g>
        </svg>
    );
};
