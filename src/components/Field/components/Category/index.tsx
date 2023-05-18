import React, { useEffect, useState } from "react";
import { colors, getRandomColor } from "../../API";
import { CategoryBox } from "../CategoryBox";
import style from './category.module.scss';
import { Category, CategoryProps } from "../../Types";

export const CategoryContainer: React.FC<CategoryProps> = ({
    value,
    isInnerComponent = false,
    id,
    currentCategories = [],
    setCurrentCategories,
    nestingElement = 0,
    isCurrentEditing = false,
}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isEditing, setIsEditing] = useState(isCurrentEditing);
    const [color, setColor] = useState<string>('white');
    const [nesting, setNesting] = useState(nestingElement);
    

    const addCategory = () => {
        setCategories(prev => {
            return [...prev, { value: '', id: Date.now() }]
        })
    }

    const deleteCategory = (id: number) => {
        setCurrentCategories!(prev => prev.filter(category => category.id !== id));
    }

    const saveCategory = (value: string, id: number) => {
        setCurrentCategories!(prev => prev.map(category => category.id === id ? {...category, value} : category))
        setIsEditing(false);
    }

    useEffect(() => {
        if (!isInnerComponent) return;

        if (nestingElement === colors.length) {
            setNesting(0);
        }

        setColor(getRandomColor(nestingElement))
    }, [])

    return (
        <>
            <div className={style.container} style={{alignItems: categories.length < 2 ? 'center' : 'unset'}}>
                <CategoryBox
                    id={id as number}
                    subCategories={currentCategories}
                    categories={categories}
                    isInnerComponent={isInnerComponent}
                    value={value}
                    color={color}
                    addCategory={addCategory}
                    deleteCategory={deleteCategory}
                    saveCategory={saveCategory}
                    isCurrentEditing={isEditing}
                    setIsCurrentEditing={setIsEditing}
                />

                <div className={style.subCategories}>
                    {categories?.map(category =>
                        <CategoryContainer
                            key={category.id}
                            value={category.value}
                            isInnerComponent={true}
                            id={category.id}
                            currentCategories={categories}
                            setCurrentCategories={setCategories}
                            nestingElement={nesting + 1}
                            isCurrentEditing={true}
                            setIsCurrentEditing={setIsEditing}
                        />
                    )}
                </div>
            </div>
        </>
    );
}