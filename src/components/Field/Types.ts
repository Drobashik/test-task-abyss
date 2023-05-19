import { SetStateAction } from "react";

export type CategoryProps = {
    value: string;
    isInnerComponent?: boolean;
    id?: number;
    nestingElement?: number;
    currentCategories?: Category[];
    setCurrentCategories?: React.Dispatch<SetStateAction<Category[]>>
    isCurrentEditing?: boolean;
    setIsCurrentEditing?: React.Dispatch<SetStateAction<boolean>>
}

export type Category = {
    id: number;
    value: string;
}

export type CategoryBoxProps = {
    id: number;
    categories: Category[];
    isInnerComponent: boolean;
    value: string;
    color: string;
    isCurrentEditing: boolean;
    setIsCurrentEditing?: React.Dispatch<SetStateAction<boolean>>
    addCategory: () => void;
    deleteCategory: (id: number) => void;
    saveCategory: (value: string, id: number) => void;
}

export type EditableCategoryProps = {
    id: number;
    inputValue: string;
    isInnerComponent: boolean;
    saveCategory: (value: string, id: number) => void;
    deleteCategory: (id: number) => void;
    setInputValue: React.Dispatch<SetStateAction<string>>
}

export type DefaultCategoryProps = {
    id: number;
    color: string;
    value: string;
    isInnerComponent: boolean;
    addCategory: () => void;
    deleteCategory: (id: number) => void;
    setIsCurrentEditing?: React.Dispatch<SetStateAction<boolean>>
}