import React, { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMovement(initialPosition: any) {
    
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectoinState] = useState(EDirection.RIGHT);

    useEventListener('keydown', (event: any) => {
        if (event.key.indexOf('Arrow') === -1) {
            return;
        }
        
        const direction = event.key as EDirection;
        const nextPosition = handleNextPosition(direction, positionState);
    
        updatePositionState(nextPosition);
        updateDirectoinState(event.key);
    });

    return {
        position: positionState,
        direction: direction
    }
}

export default useHeroMovement;