import React from 'react';
import { TILE_SIZE, HEAD_OFFSET } from '../../settings/constants';

import './index.css';

const MiniDemon = () => {
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
                bottom: TILE_SIZE * 9,
                left: TILE_SIZE * 5
            }}
        />
    );
}

export default MiniDemon;