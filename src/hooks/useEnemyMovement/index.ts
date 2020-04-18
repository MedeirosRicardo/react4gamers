import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMovement(initialPosition: any) {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useInterval(function move() {
        const random = Math.floor(Math.random() * 4);
        const directionsArray = Object.values(EDirection);
        const randomDirections = directionsArray[random];

        const nextMovement = handleNextPosition(randomDirections, positionState);

        updateDirectionState(randomDirections);
        updatePositionState(nextMovement);
    }, 2000);

    return {
        position: positionState,
        direction: direction
    }
}

export default useEnemyMovement;