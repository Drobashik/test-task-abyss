import React, { createContext, useRef, useState } from 'react';

export type ScaleContextType = {
    selectValue: number;
    categoryRef: React.RefObject<HTMLDivElement>;
    fieldRef: React.RefObject<HTMLDivElement>;
    handlerSelectValue: (value: number) => void;
    centrateCategories: () => void;
}

export const ScaleContext = createContext<ScaleContextType | null>(null);

export const ScaleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const categoryRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);
    const [selectValue, setSelectValue] = useState(100);
    

    const handlerSelectValue = (value: number) => {
        setSelectValue(value);
    }

    const centrateCategories = () => {
        categoryRef.current!.style.transition = '300ms';
        categoryRef.current!.style.top = '25%';
        categoryRef.current!.style.left = '50%';
        categoryRef.current!.style.transform = `translateX(-50%) scale(${selectValue / 100})`;

        setTimeout(() => {
            categoryRef.current!.style.transition = 'transform 300ms';
        }, 300)
    }

    return (
        <ScaleContext.Provider
            value={{
                selectValue,
                handlerSelectValue,
                categoryRef,
                fieldRef,
                centrateCategories,
            }}
        >
            {children}
        </ScaleContext.Provider>
    );
}