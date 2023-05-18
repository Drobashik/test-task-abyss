import React, { useState } from "react";
import { calculateParallelPosition } from "../API";

export const useMouseMove = (mainRef: React.RefObject<HTMLElement>, additionalRef: React.RefObject<HTMLElement>) => {
    const [parallelPosition, setParallelPosition] = useState({ x: 0, y: 0 })
    const [isReadyMove, setIsReadyMove] = useState(false);

    const onMouseDown = (event: React.MouseEvent) => {
        additionalRef.current!.style.cursor = 'move';

        const parallelPosition = calculateParallelPosition(
            event.clientX,
            event.clientY,
            additionalRef.current as HTMLElement,
            mainRef.current as HTMLElement
        );
        
        setIsReadyMove(true);
        setParallelPosition(() => {
            return {
                x: parallelPosition.x,
                y: parallelPosition.y,
            }
        })
    }

    const onMouseMove = (event: React.MouseEvent) => {
        if (isReadyMove) {
            additionalRef.current!.style.left = 
                event.clientX - mainRef.current!.offsetLeft - (additionalRef.current!.offsetWidth - parallelPosition.x) + 'px';

            additionalRef.current!.style.top = 
                event.clientY - mainRef.current!.offsetTop - (additionalRef.current!.offsetHeight - parallelPosition.y) + 'px';
        }
    }

    const onMouseUp = () => {
        additionalRef.current!.style.cursor = 'pointer';
        setIsReadyMove(false);
    }

    return {
        onMouseDown,
        onMouseMove,
        onMouseUp,
    }
}