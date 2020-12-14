import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactChild, useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import ClipboardIcon from './ClipboardIcon';
import { copyContentsToClipboard } from './util';
import navFarger from 'nav-frontend-core';
import styled from 'styled-components';

interface IProps {
    children: ReactChild;
}

const ClipboardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const ClipboardChildrenContainer = styled.div`
    :hover {
        border-bottom: 1px dotted #000;
    }
`;

const StyledButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 0.0625rem;
    margin-left: 0.25rem;

    :focus,
    :active {
        outline: 0.1875rem solid ${navFarger.fokusFarge};
    }
`;

const IconContainer = styled(motion.span)`
    display: flex;
`;

const animation = {
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    initial: { y: 5, opacity: 0 },
    transition: {
        duration: 0.1,
    },
};

const Clipboard: React.FunctionComponent<IProps> = ({ children }) => {
    const [didCopy, setDidCopy] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    const copy = () => {
        if (!didCopy) {
            setDidCopy(copyContentsToClipboard(ref?.current?.firstChild as HTMLElement));
        }
    };

    useEffect(() => {
        didCopy && setTimeout(() => setDidCopy(false), 2000);
    }, [didCopy]);

    return (
        <ClipboardContainer>
            <ClipboardChildrenContainer ref={ref}>{children}</ClipboardChildrenContainer>
            <ReactTooltip place="bottom" disable={!didCopy} />
            <StyledButton
                data-tip="Kopiert!"
                data-tip-disable={!didCopy}
                onClick={copy}
                data-class="typo-undertekst"
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    <IconContainer {...animation} key={didCopy ? 'check' : 'copy'}>
                        <ClipboardIcon type={didCopy ? 'check' : 'copy'} />
                    </IconContainer>
                </AnimatePresence>
            </StyledButton>
        </ClipboardContainer>
    );
};

export default Clipboard;
