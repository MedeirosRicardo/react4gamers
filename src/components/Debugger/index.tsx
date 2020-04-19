import React from 'react';
import Tile from './Tile';
import { canvas } from '../../contexts/canvas/helpers';

function getCanvasMap() {
    const tilesArray = [];

    for (let i = 0; i < canvas.length; i++) {
        const canvasY = canvas[i];

        for (let j = 0; j <= canvasY.length; j++) {

            const position = { x: j, y: i };
            const text = canvas[i][j];

            tilesArray.push(<Tile position={position} text={text} />);
        }
    }
    return tilesArray;
}

function Debugger() {

    const tiles = getCanvasMap();

    return (
        <div>
            {tiles}
        </div>
    );
}

export default Debugger;