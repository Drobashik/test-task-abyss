import React from "react";
import { CategoryBox } from "../CategoryBox";
import { CategoryProps } from "../../Types";
import { useCategory } from "../../hooks/useCategory";
import style from './category.module.scss';

export const CategoryContainer: React.FC<CategoryProps> = ({
    value,
    isInnerComponent = false,
    id,
    currentCategories = [],
    setCurrentCategories,
    nestingElement = 0,
    isCurrentEditing = false,
}) => {
    const {
        categories,
        isEditing,
        color,
        nesting,
        addCategory,
        deleteCategory,
        saveCategory,
        setIsEditing,
        setCategories,
    } = useCategory(isCurrentEditing, nestingElement, setCurrentCategories!, isCurrentEditing);

    return (
        <>
            <div
                className={style.container}
                style={{ alignItems: categories.length < 2 ? 'center' : 'unset' }}
            >
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