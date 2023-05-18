import React, { useContext } from "react";
import { CategoryContainer } from "./components/Category";
import { useMouseMove } from "./hooks/useMouseMove";
import { ScaleContext, ScaleContextType } from "../../context/scaleContext";
import style from './field.module.scss';

export const Field: React.FC = () => {
    const {selectValue, categoryRef, fieldRef} = useContext(ScaleContext) as ScaleContextType;

    const { onMouseUp, onMouseMove, onMouseDown } = useMouseMove(fieldRef, categoryRef);

    return (
        <div
            ref={fieldRef}
            className={style.field}
            onMouseMove={onMouseMove}
        >
            <div
                ref={categoryRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                style={{transform: `translate(-50%) scale(${selectValue / 100})`}}
            >
                <CategoryContainer
                    value={'Category'}
                />
            </div>
        </div>
    );
}