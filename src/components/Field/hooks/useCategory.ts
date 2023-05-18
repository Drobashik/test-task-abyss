import { useEffect, useState } from "react";
import { Category } from "../Types";
import { colors, getRandomColor } from "../API";

export const useCategory = (
    isCurrentEditing: boolean,
    nestingElement: number,
    setCurrentCategories: React.Dispatch<React.SetStateAction<Category[]>>,
    isInnerComponent: boolean,
) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isEditing, setIsEditing] = useState(isCurrentEditing);
    const [color, setColor] = useState<string>('white');
    const [nesting, setNesting] = useState(nestingElement);


    const addCategory = () => {
        setCategories(prev => {
            return [...prev, { value: '', id: Date.now() }]
        });
    }

    const deleteCategory = (id: number) => {
        setCurrentCategories!(prev => prev.filter(category => category.id !== id));
    }

    const saveCategory = (value: string, id: number) => {
        setCurrentCategories!(prev =>
            prev.map(category =>
                category.id === id
                    ? { ...category, value }
                    : category)
        );
        setIsEditing(false);
    }

    useEffect(() => {
        if (!isInnerComponent) return;

        if (nestingElement === colors.length) {
            setNesting(0);
        }

        setColor(getRandomColor(nestingElement));
    }, []);

    return {
        categories,
        isEditing,
        color,
        nesting,
        addCategory,
        deleteCategory,
        saveCategory,
        setIsEditing,
        setCategories
    };
}