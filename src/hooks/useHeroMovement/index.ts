import { useState, useContext } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection, ECharacter } from '../../settings/constants';
import { CanvasContext } from '../../contexts/canvas';
import { ChestsContext } from '../../contexts/chests';

function useHeroMovement(initialPosition) {

    const canvasContext = useContext(CanvasContext);
    const chestsContext = useContext(ChestsContext);

    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectoinState] = useState(EDirection.RIGHT);

    useEventListener('keydown', (event: any) => {
        const direction = event.key;
        
        if (event.key.indexOf('Arrow') === -1) {
            return;
        }
        
        const movement = canvasContext.updateCanvas(direction, positionState, ECharacter.HERO);
        
        if (movement.nextMove.valid) {
            updatePositionState(movement.nextPosition);
            updateDirectoinState(direction);
        }

        if (movement.nextMove.dead) {
            alert('DEAD');
        }

        if (movement.nextMove.chest) {
            chestsContext.updateOpenedChests();
        }
    });

    return {
        position: positionState,
        direction: direction
    }
}

export default useHeroMovement;