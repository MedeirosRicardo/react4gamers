import React from 'react';
import { TILE_SIZE } from '../../../settings/constants';
import { ECanvas } from '../../../contexts/canvas/helpers';

interface IProps {
    position: { x: number, y: number };
    text: number;
}

function Tile(props: IProps) {

    function getTileColor() {
        switch(props.text) {
            case ECanvas.FLOOR:
                return 'darkgrey';

            case ECanvas.WALL:
                return 'yellow';
            
            case ECanvas.DOOR:
                return 'white';

            case ECanvas.TRAP:
                return 'chartreuse';
            
            case ECanvas.MINI_DEMON:
            case ECanvas.DEMON:
                return 'red';

            case ECanvas.CHEST:
                return 'cyan';

            case ECanvas.HERO:
                return 'magenta';
        }
    }

    const color = getTileColor();

    return (
        <div style={{ 
            width: TILE_SIZE, 
            height: TILE_SIZE,
            position: "absolute",
            left: TILE_SIZE * props.position.x,
            top: TILE_SIZE * props.position.y,
            border: `2px solid ${color}`,
            color: color,
            fontSize: 32,
            zIndex: 2
        }} >
            {props.text}
        </div>
    )
}

export default Tile;