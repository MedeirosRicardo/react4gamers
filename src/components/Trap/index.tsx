import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Trap = () => {
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/TRAP.png)",
                backgroundRepeat: "no-repeat",
                animation: "trap-animation 1s steps(8) infinite",
                position: "absolute",
                bottom: TILE_SIZE * 10,
                left: TILE_SIZE * 4
            }}
        />
    );
}

export default Trap;