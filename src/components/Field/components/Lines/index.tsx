import React from "react";
import { Category } from "../../Types";
import style from './line.module.scss';
import classNames from "classnames";

type LineProps = {
    id?: number;
    categories: Category[];
    isInnerComponent?: boolean;
}

export const UpperLines: React.FC<LineProps> = ({ id, categories, isInnerComponent }) => {
    return (
        <>
            {id === categories[0]?.id &&
                <div className={classNames(
                    style.additional,
                    style.left
                )}></div>}

            {id === categories[categories.length - 1]?.id &&
                <div className={classNames(
                    style.additional,
                    style.right
                )}></div>}

            {isInnerComponent &&
                <div className={classNames(
                    style.line,
                    style.upperLine
                )}></div>}
        </>
    );
}

export const LowerLines: React.FC<LineProps> = ({ categories }) => {
    return (
        <>
            {!!categories.length &&
                <div className={style.line}></div>}

            {categories.length > 1 &&
                <div className={style.bigLine}>
                </div>}
        </>
    );
}
