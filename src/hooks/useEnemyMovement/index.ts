import { useState, useContext } from 'react';
import useInterval from '@use-it/interval';
import { EDirection, ECharacter } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';

function useEnemyMovement(initialPosition) {

    const canvasContext = useContext(CanvasContext);
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState(EDirection.RIGHT);

    useInterval(function move() {
        const random = Math.floor(Math.random() * 4);
        const directionsArray = Object.values(EDirection);
        const randomDirections = directionsArray[random];

        const movement = canvasContext.updateCanvas(randomDirections, positionState, ECharacter.ENEMY);

        if (movement.nextMove.valid) {
            updateDirectionState(randomDirections);
            updatePositionState(movement.nextPosition);
        }

        if (movement.nextMove.dead) {
            setTimeout(() => {
                alert('DEAD');
                window.location.reload();
            });
        }
    }, 2000);

    return {
        position: positionState,
        direction: direction
    }
}

export default useEnemyMovement;