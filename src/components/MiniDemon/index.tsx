import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useEnemyMovement from '../../hooks/useEnemyMovement';

import './index.css';

interface IProps {
    initialPosition: { x: number; y: number }
}

const MiniDemon = (props: IProps) => {
    

    const movement = useEnemyMovement(props.initialPosition);

    return (
        <div
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: "no-repeat",
                animation: "mini-demon-animation 1s steps(4) infinite",
                backgroundPosition: `0PX -${TILE_SIZE - HEAD_OFFSET}px`,
                position: "absolute",
                top: TILE_SIZE * movement.position.y - HEAD_OFFSET,
                left: TILE_SIZE * movement.position.x,
                transform: `scaleX(${movement.direction === EDirection.RIGHT ? 1 : -1})`
            }}
        />
    );
}

export default MiniDemon;