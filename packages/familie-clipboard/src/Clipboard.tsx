import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactChild, useEffect, useRef, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import ClipboardIcon from './ClipboardIcon';
import { copyContentsToClipboard } from './util';

import './Clipboard.less';

interface IProps {
    children: ReactChild;
}

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

    // tslint:disable-next-line: no-null-keyword
    const ref = useRef<HTMLDivElement>(null);

    const copy = () => {
        if (!didCopy) {
            setDidCopy(copyContentsToClipboard(ref?.current?.firstChild as HTMLElement));
        }
    };

    useEffect(() => {
        // tslint:disable-next-line: no-unused-expression
        didCopy && setTimeout(() => setDidCopy(false), 2000);
    }, [didCopy]);

    return (
        <div className="Clipboard">
            <div className="Clipboard__children" ref={ref}>
                {children}
            </div>
            <ReactTooltip place="bottom" disable={!didCopy} />
            <button
                data-tip="Kopiert!"
                data-tip-disable={!didCopy}
                onClick={copy}
                data-class="typo-undertekst"
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div {...animation} key={didCopy ? 'check' : 'copy'}>
                        <ClipboardIcon type={didCopy ? 'check' : 'copy'} />
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
};

export default Clipboard;
