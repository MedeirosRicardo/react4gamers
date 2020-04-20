import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../../settings/constants';
import useEnemyMovement from '../../hooks/useEnemyMovement';

import './index.css';

interface IProps {
    initialPosition: { x: number, y: number} 
};

const Demon = (props: IProps) => {
    const movement = useEnemyMovement(props.initialPosition);

    return (
        <div
            style={{
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: "no-repeat",
                animation: "demon-animation 1s steps(4) infinite",
                position: "absolute",
                top: TILE_SIZE * movement.position.y,
                left: TILE_SIZE * movement.position.x,
                transform: `scaleX(${movement.direction === EDirection.RIGHT ? 1 : -1})`
            }}
        />
    );
}

export default Demon;