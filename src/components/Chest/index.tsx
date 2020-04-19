import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Chest = () => {
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: "no-repeat",
                animation: "chest-animation 1s steps(3) infinite",
                position: "absolute",
                top: TILE_SIZE * 8,
                left: TILE_SIZE * 8
            }}
        />
    );
}

export default Chest;