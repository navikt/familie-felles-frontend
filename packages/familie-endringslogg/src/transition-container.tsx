import React, { PropsWithChildren } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useFocus } from './hooks/use-focus';
import './endringslogg.css';
import './collapse-container-transition.css';
import classNames from 'classnames';
import { TransitionGroupProps } from 'react-transition-group/TransitionGroup';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

interface CollapseContainerProps {
    children?: React.ReactNode;
    alignLeft?: boolean;
}

interface TransitionProps extends CollapseContainerProps {
    visible: boolean;
    alignLeft?: boolean;
}

/**
 * Overrider props ettersom transition-group ikke er oppgradert til React 18.
 * Disse to linjene kan fjernes når dette skjer
 */
const TransitionGroupWithChildren = TransitionGroup as unknown as React.FC<
    PropsWithChildren<TransitionGroupProps>
>;
const CSSTransitionWithChildren = CSSTransition as unknown as React.FC<
    PropsWithChildren<CSSTransitionProps>
>;

const TransitionContainer = (props: TransitionProps) => (
    <TransitionGroupWithChildren component={null}>
        {props.visible && (
            <CSSTransitionWithChildren
                classNames={{
                    enter: 'collapse-container-enter',
                    enterActive: 'collapse-container-enter-active',
                    exit: 'collapse-container-exit',
                    exitActive: 'collapse-container-exit-active',
                }}
                timeout={400}
            >
                <CollapseContainer alignLeft={props.alignLeft}>{props.children}</CollapseContainer>
            </CSSTransitionWithChildren>
        )}
    </TransitionGroupWithChildren>
);

const CollapseContainer = (props: CollapseContainerProps) => {
    const { focusRef } = useFocus();
    return (
        <div
            className={
                props.alignLeft
                    ? classNames('align-left', 'collapse-container')
                    : 'collapse-container'
            }
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
