import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../../settings/constants';
import useHeroMovement from '../../hooks/useHeroMovement';

import './index.css';

interface IProps {
    initialPosition: { x: number, y: number} 
};

const Hero = (props: IProps) => {
    const { position, direction} = useHeroMovement(props.initialPosition);
    

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
                top: TILE_SIZE * position.y - HEAD_OFFSET,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
                zIndex: 1
            }}
        />
    );
}

export default Hero;