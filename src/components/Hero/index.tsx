import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMovement from '../../hooks/useHeroMovement';

import './index.css';

const initialPosition = {
    x: 15,
    y: 15
}

const Hero = () => {
    const { position, direction} = useHeroMovement(initialPosition);
    

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
                bottom: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
                zIndex: 1
            }}
        />
    );
}

export default Hero;