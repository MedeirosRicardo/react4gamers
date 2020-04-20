import React from 'react';
import Tile from './Tile';
import { canvas } from '../../contexts/canvas/helpers';

function getCanvasMap() {
    const tileArray = [];

    for (let i = 0; i < canvas.length; i++) {
        const canvasY = canvas[i];

        for (let j = 0; j <= canvasY.length; j++) {

            const position = { x: j, y: i };
            const text = canvas[i][j];

            tileArray.push(<Tile key={`${i}-${j}`} position={position} text={text} />);
        }
    }
    return tileArray;
}

function Debugger() {

    const tile = getCanvasMap();

    return (
        <div>
            {tile}
        </div>
    );
}

export default Debugger;