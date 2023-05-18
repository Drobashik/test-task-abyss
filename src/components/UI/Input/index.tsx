import React from "react";
import classNames from "classnames";
import style from './input.module.scss';

type InputProps = {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    className?: string | CSSModuleClasses;
}

export const Input: React.FC<InputProps> = ({onChange, value, placeholder, className}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <input 
            type="text" 
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            autoFocus
            className={classNames(
                style.input,
                className
            )}
        />
    )
}