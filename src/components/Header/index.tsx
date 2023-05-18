import React from "react";
import { Logo } from "../UI/Logo";
import { Panel } from "../Panel";
import style from './header.module.scss';
import classNames from "classnames";

export const Header: React.FC = () => {
    return (
        <>
            <header className={style.header}>
                <div className={classNames(style.headerWrapper, 'container')}>
                    <Logo>
                        Services
                    </Logo>
                    <Panel />
                </div>
            </header>
        </>
    );
}