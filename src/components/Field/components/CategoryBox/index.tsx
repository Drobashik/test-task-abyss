import { useState } from 'react';
import penSvg from '../../../../assets/pen.svg';
import checkSvg from '../../../../assets/check.svg';
import { Input } from '../../../UI/Input';
import { LowerLines } from '../Lines';
import { CategoryBoxProps, DefaultCategoryProps, EditableCategoryProps } from '../../Types';
import { Button } from '../../../UI/Button';
import style from './categoryBox.module.scss';

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

            <Button
                type='tertiary'
                onClick={addCategory}
            >
                +
            </Button>
            {isInnerComponent &&
                <Button
                    type='tertiary'
                    classNames='cross'
                    onClick={() => deleteCategory(id as number)}
                >+</Button>}
            {isInnerComponent &&
                <Button
                    type='tertiary'
                    classNames='edit'
                    icon={penSvg}
                    onClick={() => setIsCurrentEditing!(true)}
                />}
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
            {isInnerComponent &&
                <Button
                    type='tertiary'
                    classNames='cross'
                    onClick={() => deleteCategory(id as number)}
                >+</Button>}
            {isInnerComponent &&
                <Button
                    type='tertiary'
                    classNames='check'
                    icon={checkSvg}
                    onClick={() => {
                        saveCategory(inputValue || 'Sub-category', id)
                    }}
                />}
        </>
    );
}

export const CategoryBox: React.FC<CategoryBoxProps> = ({
    id,
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