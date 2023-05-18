import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import style from './button.module.scss';

type ButtonProps = {
    type?: string;
    classNames?: CSSModuleClasses | string;
    onClick?: React.MouseEventHandler;
    icon?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    onClick,
    type,
    classNames,
    children,
    icon,
}) => {
    return (
        <button
            className={classnames(
                style.button,
                style[type || 'primary'],
                classNames,
            )}
            onClick={onClick}
        >
            {icon
                ? <img src={icon} alt="Button icon" />
                : <span>{children}</span>}
        </button>
    );
}