import React, { useContext } from 'react';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Hero from '../Hero';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, ECanvas } from '../../contexts/canvas/helpers';
import { ChestsContext } from '../../contexts/chests';

function getCanvasMap() {
    const array = [];

    for (let i = 0; i < canvas.length; i++) {
        const canvasY = canvas[i];

        for (let j = 0; j <= canvasY.length; j++) {

            const position = { x: j, y: i };
            const text = canvas[i][j];
            const key = `${i}-${j}`;

            if (text === ECanvas.TRAP) {
                array.push(<Trap key={key} initialPosition={position} />);
            }

            if (text === ECanvas.MINI_DEMON) {
                array.push(<MiniDemon key={key} initialPosition={position} />);
            }

            if (text === ECanvas.DEMON) {
                array.push(<Demon key={key} initialPosition={position} />);
            }

            if (text === ECanvas.CHEST) {
                array.push(<Chest key={key} initialPosition={position} />);
            }

            if (text === ECanvas.HERO) {
                array.push(<Hero key={key} initialPosition={position} />);
            }
        }
    }
    return array;
}

const elements = getCanvasMap();
const Board = () => {
    const chestsContext = useContext(ChestsContext);

    return (
        <div>
            {elements}

            {chestsContext.totalChests === chestsContext.openedChests.total && (
                <img src="./assets/DOOR-OPEN.png" alt="" style={{
                    position: "absolute",
                    left: 578,
                    top: 0
                }} />
            )}
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Board;