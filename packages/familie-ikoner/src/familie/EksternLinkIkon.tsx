import React from 'react';

interface IEksternLinkIkon {
    className?: string;
    height?: number;
    width?: number;
}

export const EksternLinkIkon: React.FC<IEksternLinkIkon> = ({
    className,
    height = 32,
    width = 32,
}) => {
    return (
        <svg
            aria-labelledby={'ekstern link'}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            height={height}
            width={width}
            fill="none"
            viewBox="0 0 24 24"
            focusable="false"
            role="img"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.532 3.471A.75.75 0 0 1 20.75 4v7.5a.75.75 0 0 1-1.5 0V5.81l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72H12.5a.75.75 0 0 1 0-1.5H20c.206 0 .393.083.529.218l.001.002zM4.75 9A.25.25 0 0 1 5 8.75h7a.75.75 0 0 0 0-1.5H5A1.75 1.75 0 0 0 3.25 9v10c0 .966.784 1.75 1.75 1.75h10A1.75 1.75 0 0 0 16.75 19v-7a.75.75 0 0 0-1.5 0v7a.25.25 0 0 1-.25.25H5a.25.25 0 0 1-.25-.25z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
