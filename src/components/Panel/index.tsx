import React, { useContext } from "react";
import { Button } from "../UI/Button";
import locationIcon from '../../assets/location-arrow.svg';
import style from './panel.module.scss';
import { Scale } from "../Scale";
import { ScaleContext, ScaleContextType } from "../../context/scaleContext";

export const Panel: React.FC = () => {
    const {centrateCategories} = useContext(ScaleContext) as ScaleContextType;

    return (
        <div className={style.panel}>
            <Button>
                List view
            </Button>
            <Button
                icon={locationIcon}
                type={'secondary'}
                onClick={() => centrateCategories()}
            />
            <Scale />
        </div>
    )
}