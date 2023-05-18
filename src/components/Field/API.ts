export const calculateParallelPosition = (clientX: number, clientY: number, categoryElement: HTMLElement, fieldElement: HTMLElement) => {
    return {
        x: ((clientX - categoryElement.offsetLeft - fieldElement.offsetLeft) - categoryElement.offsetWidth) * -1,
        y: ((clientY - categoryElement.offsetTop - fieldElement.offsetTop) - categoryElement.offsetHeight) * -1,
    };
}

export const colors = ['white', 'yellow', 'pink', 'lightblue', 'lime', 'tomato'];

export const getRandomColor = (nesting: number) => {
    return colors[nesting];
}