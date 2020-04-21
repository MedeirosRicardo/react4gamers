import React, { createContext, useState, ReactNode } from "react";
import { canvas, handleNextPosition, checkValidMovement, ECanvas } from "./helpers";


interface IProps {
    children: ReactNode
}

export const CanvasContext = createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, character) => null
});

export function CavasProvider(props: IProps) {
    const [canvasState, updateCanvasState] = useState({
        canvas: canvas,
        updateCanvas: (direction: any, currentPosition: any, character: any) => {
            const nextPosition = handleNextPosition(direction, currentPosition);
            const nextMove = checkValidMovement(nextPosition, character);

            if (nextMove.valid) {
                updateCanvasState((prevState) => {
                    const newCanvas = [...prevState.canvas];
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x];

                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.FLOOR;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;

                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas
                    }
                });
            }

            return {
                nextPosition,
                nextMove
            }
        }
    });

    return (
    <CanvasContext.Provider value={canvasState}>
        {props.children}
    </CanvasContext.Provider>
    )
}