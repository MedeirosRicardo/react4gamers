import { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection } from '../../settings/constants';
import { checkValidMovement, handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMovement(initialPosition: any) {
    
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectoinState] = useState(EDirection.RIGHT);

    useEventListener('keydown', (event: any) => {
        const direction = event.key as EDirection;
        
        if (event.key.indexOf('Arrow') === -1) {
            return;
        }
        
        const nextPosition = handleNextPosition(direction, positionState);
        const isValidMovement = checkValidMovement(nextPosition);
        
        if (isValidMovement) {
            updatePositionState(nextPosition);
            updateDirectoinState(direction);
        }
    });

    return {
        position: positionState,
        direction: direction
    }
}

export default useHeroMovement;