import React from 'react';
import { CavasProvider } from '../contexts/canvas';
import Debugger from './Debugger';
import Board from './Board';
import ChestsProvider from '../contexts/chests';

export function Game() {
    return (
        <CavasProvider>
            <ChestsProvider>
                {/* <Debugger /> */}
                <Board />
            </ChestsProvider>
        </CavasProvider>
    )
}