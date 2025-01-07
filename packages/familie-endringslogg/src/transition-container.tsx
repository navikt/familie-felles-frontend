import React from 'react';
import { useFocus } from './hooks/use-focus';
import './endringslogg.css';
import './collapse-container-transition.css';
import classNames from 'classnames';

interface CollapseContainerProps {
    children?: React.ReactNode;
    alignLeft?: boolean;
    visible: boolean;
}

interface TransitionProps extends CollapseContainerProps {
    visible: boolean;
    alignLeft?: boolean;
}

const TransitionContainer = (props: TransitionProps) => (
    <CollapseContainer alignLeft={props.alignLeft} visible={props.visible}>
        {props.children}
    </CollapseContainer>
);

const CollapseContainer = (props: CollapseContainerProps) => {
    const { focusRef } = useFocus();
    return (
        <div
            className={classNames(
                props.alignLeft && 'align-left',
                props.visible
                    ? 'collapse-container-enter-active'
                    : 'collapse-container-exit-active',
                'collapse-container',
            )}
        >
            <div
                className={props.alignLeft ? 'arrow-container-left' : 'arrow-container'}
                ref={inputRef => (focusRef.current = inputRef)}
            >
                <div className={'endringslogg-content'} tabIndex={-1}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};
export default TransitionContainer;
