import React, { useContext } from 'react';
import { TILE_SIZE } from '../../settings/constants';
import { ChestsContext } from '../../contexts/chests';

import './index.css';

interface IProps {
    initialPosition: { x: number, y: number };
};

const Chest = (props: IProps) => {
    const chestsContext = useContext(ChestsContext);

    const shouldAnimate = chestsContext.openedChests.position.find((position) => {
        const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

        return match;
    });

    return (
        <div
            style={{
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: "no-repeat",
                animation: shouldAnimate && "chest-animation 1s steps(2) forwards",
                position: "absolute",
                top: TILE_SIZE * props.initialPosition.y,
                left: TILE_SIZE * props.initialPosition.x
            }}
        />
    );
}

export default Chest;