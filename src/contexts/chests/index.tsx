import React, { createContext, ReactNode, useState } from "react";
import { canvas, ECanvas } from "../canvas/helpers";

interface IProps {
    children: ReactNode
}

export const ChestsContext = createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        position: []
    },
    updateOpenedChests: (postion) => null
});

function ChestsProvider(props: IProps) {
    const [chestsState, updateChestsState] = useState({
        totalChests: canvas.filter(a =>  a.includes(ECanvas.CHEST)).length,
        openedChests: {
            total: 0,
            position: []
        },
        updateOpenedChests: (position) => {
            updateChestsState((prevState) => {
                return {
                    totalChests: prevState.totalChests,
                    openedChests: {
                        total: prevState.openedChests.total + 1,
                        position: prevState.openedChests.position.concat(position)
                    },
                    updateOpenedChests: prevState.updateOpenedChests
                }
            });
        }
    });

    return (
        <ChestsContext.Provider value={chestsState}>
            {props.children}
        </ChestsContext.Provider>
    )
}

export default ChestsProvider;