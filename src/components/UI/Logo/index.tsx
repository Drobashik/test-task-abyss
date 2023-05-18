import React, { PropsWithChildren } from "react";
import style from './logo.module.scss';

type LogoProps = {
    imageSource?: string;
}

export const Logo: React.FC<PropsWithChildren<LogoProps>> = ({ imageSource, children }) => {
    return (
        <div className={style.logo}>
            {imageSource && <img src={imageSource} alt="Logo" />}
            {children && <h1>{children}</h1>}
        </div>
    )
}