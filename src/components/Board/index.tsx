import React from 'react';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../MiniDemon';
import Hero from '../Hero';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () => {
    return (
        <div>
            <Trap />
            <Chest />
            <Demon />
            <MiniDemon initialPosition={{ x: 10, y: 8}} />
            <MiniDemon initialPosition={{ x: 10, y: 10}} />
            <Hero />
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Board;