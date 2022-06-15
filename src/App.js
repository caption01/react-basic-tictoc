import React, { useState, useEffect } from 'react';

import Header from './componets/Header';
import Board from './componets/Board';
import Status from './componets/Status';
import History from './componets/History';

const initialBoard = Array(9).fill(null);
const initialStatus = {
  winner: null,
  turn: 'X',
};

function App() {
  const [status, setStatus] = useState(initialStatus);
  const [gameHistory, setGameHistory] = useState([
    {
      squaresList: initialBoard,
      squareSelected: null,
    },
  ]);

  // todo implement onClick when user click on board
  // this function should
  // 1. save game history
  // 2. update game step
  function onBoardClick(i) {}

  // todo implement sideEffect when app state change
  // this function should
  // calculate winner
  // calculate next app state
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      {/* <Status player={status?.winner?.player} turn={status.turn} />
      <Board history={gameHistory} step={0} />
      <History history={gameHistory} /> */}
    </>
  );
}

export default App;
