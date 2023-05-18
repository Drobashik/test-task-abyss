import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import style from './select.module.scss';

export type Option = {
    value: number;
    label: string;
}

type SelectProps = {
    options: Option[];
    onChange: (selectedValue: number) => void;
    className?: string | CSSModuleClasses;
    value?: number;
}

const Select: React.FC<SelectProps> = ({ options, onChange, className, value = 100 }) => {
    const [selectedValue, setSelectedValue] = useState<number>(value);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(+event.target.value);
        onChange(+event.target.value);
    };

    useEffect(() => {
        setSelectedValue(value);
    }, [value])

    return (
        <select
            value={selectedValue}
            onChange={handleSelectChange}
            className={classNames(style.select, className)}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;