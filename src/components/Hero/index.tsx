import React, { useState } from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';
import useEventListener from '@use-it/event-listener';

import './index.css';

const Hero = () => {

    const initialPosition = {
        x: 15,
        y: 15
    }

    const [positionState, updatePositionState] = useState(initialPosition);
    const [heroDirection, updateHeroDirection] = useState({direction: 'RIGHT'});

    useEventListener('keydown', (event: any) => {
        if (event.key === 'ArrowLeft') {
            updatePositionState({ x: positionState.x - 1, y: positionState.y });
            updateHeroDirection({direction: 'LEFT'});
        } else if (event.key === 'ArrowRight') {
            updatePositionState({ x: positionState.x + 1, y: positionState.y });
            updateHeroDirection({ direction: 'RIGHT'});
        } else if (event.key === 'ArrowDown') {
            updatePositionState({ x: positionState.x, y: positionState.y - 1 });    
        } else if (event.key === 'ArrowUp') {
            updatePositionState({ x: positionState.x, y: positionState.y + 1 });
        }
    });
    

    return (
        <div
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: `0PX -${TILE_SIZE - HEAD_OFFSET}px`,
                animation: "hero-animation 1s steps(4) infinite",
                position: "absolute",
                bottom: TILE_SIZE * positionState.y,
                left: TILE_SIZE * positionState.x,
                transform: `scaleX(${heroDirection.direction === 'RIGHT' ? 1 : -1})`
            }}
        />
    );
}

export default Hero;