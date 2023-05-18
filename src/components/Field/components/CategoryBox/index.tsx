import { useState } from 'react';
import penSvg from '../../../../assets/pen.svg';
import checkSvg from '../../../../assets/check.svg';
import { Input } from '../../../UI/Input';
import { LowerLines, UpperLines } from '../Lines';
import { CategoryBoxProps, DefaultCategoryProps, EditableCategoryProps } from '../../Types';
import style from '../Category/category.module.scss';

export const DefaultCategory: React.FC<DefaultCategoryProps> = ({
    id,
    color,
    value,
    isInnerComponent,
    addCategory,
    deleteCategory,
    setIsCurrentEditing,
}) => {
    return (
        <>
            <div className={style.name} style={{ background: color }}>
                {value}
            </div>
            <div
                className={style.plus}
                onClick={addCategory}
            >
                +
            </div>
            {isInnerComponent && <div
                className={style.cross}
                onClick={() => deleteCategory(id as number)}
            >
                +
            </div>}
            {isInnerComponent && <div
                className={style.edit}
                onClick={() => setIsCurrentEditing!(true)}
            >
                <img src={penSvg} alt="Pen grey" />
            </div>}
        </>
    )
}

export const EditableCategory: React.FC<EditableCategoryProps> = ({
    id,
    isInnerComponent,
    inputValue,
    setInputValue,
    deleteCategory,
    saveCategory,
}) => {
    return (
        <>
            <div className={style.name} style={{ background: 'white' }}>
                <Input
                    value={inputValue}
                    onChange={(value) => {
                        setInputValue(value);
                    }}
                />
            </div>
            {isInnerComponent && <div
                className={style.cross}
                onClick={() => deleteCategory(id as number)}  // TODO: create function cancelEditing
            >
                +
            </div>}
            {isInnerComponent && <div
                className={style.check}
                onClick={() => {
                    saveCategory(inputValue || 'Sub-category', id)
                }}
            >
                <img src={checkSvg} alt="Pen grey" />
            </div>}
        </>
    );
}

export const CategoryBox: React.FC<CategoryBoxProps> = ({
    id,
    subCategories,
    categories,
    isInnerComponent,
    value,
    color,
    addCategory,
    deleteCategory,
    isCurrentEditing,
    setIsCurrentEditing,
    saveCategory,
}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className={style.category}>
            <UpperLines
                id={id}
                categories={subCategories}
                isInnerComponent={isInnerComponent}
            />


            {isCurrentEditing ? (
                <EditableCategory
                    id={id}
                    isInnerComponent={isInnerComponent}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    deleteCategory={deleteCategory}
                    saveCategory={saveCategory}
                />
            ) : (
                <DefaultCategory
                    id={id}
                    color={color}
                    value={value}
                    isInnerComponent={isInnerComponent}
                    addCategory={addCategory}
                    deleteCategory={deleteCategory}
                    setIsCurrentEditing={setIsCurrentEditing}
                />
            )}

            <LowerLines
                categories={categories}
            />

        </div>
    );
}