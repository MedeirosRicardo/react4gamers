import React from 'react';
import './App.css';
import { GAME_SIZE } from '../settings/constants';
import { Game } from './game';

function App() {
  return (
    <div className="App">
      <div className="App-header"
        style={{
          position: "relative",
          width: GAME_SIZE,
          height: GAME_SIZE
        }} >
        <Game />
      </div>
    </div>
  );
}

export default App;