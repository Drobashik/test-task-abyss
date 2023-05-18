import React, { useContext, useEffect, useState } from "react";
import { scaleOptions } from "./API";
import { Button } from "../UI/Button";
import Select from "../UI/Select";
import style from './scale.module.scss';
import { ScaleContext, ScaleContextType } from "../../context/scaleContext";

export const Scale: React.FC = () => {
    const { selectValue,
        handlerSelectValue } = useContext(ScaleContext) as ScaleContextType;
        const [currentIndex, setCurrentIndex] = useState(8);


    useEffect(() => {
        handlerSelectValue(scaleOptions[currentIndex].value);
    }, [currentIndex])

    return (
        <>
            <div className={style.scale}>
                <Button
                    type="secondary"
                    onClick={() => {
                        if (currentIndex < 1) return;
                        setCurrentIndex(prev => prev - 1)
                    }}
                >
                    -
                </Button>
                <Select
                    options={scaleOptions}
                    value={selectValue}
                    onChange={(value) => {
                        setCurrentIndex(scaleOptions.findIndex((option) => option.value === value))
                    }}
                />
                <Button
                    type="secondary"
                    onClick={() => {
                        if (currentIndex >= scaleOptions.length - 1) return;
                        setCurrentIndex(prev => prev + 1)
                    }}
                >
                    +
                </Button>
            </div>
        </>
    );
}