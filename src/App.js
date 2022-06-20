import React, { useState, useEffect } from 'react';

import Header from './componets/Header';
import Board from './componets/Board';
// import Status from './componets/Status';
// import History from './componets/History';

const initialBoard = Array(9).fill(null);
const initialStatus = {
  winner: null,
  turn: 'X',
};

function App() {
  const [status, setStatus] = useState(initialStatus);
  const [nextPlay, setNextPlay] = useState(true);
  const [step, setStep] = useState(0);
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
  function onBoardClick(i) {
    const selectedSquare = gameHistory[step].squaresList[i];

    const history = gameHistory.slice(0, step + 1);
    const current = history[history.length - 1];

    const squares = current.squaresList.slice();

    squares[i] = nextPlay ? 'X' : 'O';

    setGameHistory(
      history.concat({
        squaresList: squares,
        squareSelected: i,
      }),
    );
    setStep(history.length);
    setNextPlay(!nextPlay);
  }

  // todo implement sideEffect when app state change
  // this function should
  // calculate winner
  // calculate next app state
  // useEffect(() => {}, []);

  return (
    <>
      <Header />
      {/* <Status player={status?.winner?.player} turn={status.turn} /> */}
      <Board history={gameHistory} step={step} onClick={onBoardClick} />
      {/* <History history={gameHistory} /> */}
    </>
  );
}

export default App;
