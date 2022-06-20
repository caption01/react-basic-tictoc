import React, { useState, useEffect } from 'react';

import Header from './componets/Header';
import Board from './componets/Board';
import Status from './componets/Status';
import History from './componets/History';

import { calculateWinner, DEAD_WINNER } from './utils/helpers';

const initialBoard = Array(9).fill(null);
const initialStatus = {
  winner: null,
  turn: 'X',
};

function App() {
  const [status, setStatus] = useState(initialStatus);
  const [nextPlay, setIsNextPlay] = useState(true);
  const [step, setStep] = useState(0);
  const [gameHistory, setGameHistory] = useState([
    {
      squaresList: initialBoard,
      squareSelected: null,
    },
  ]);

  function onBoardClick(i) {
    const selectedSquare = gameHistory[step].squaresList[i];

    if (status.winner || selectedSquare) return;

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
    setIsNextPlay(!nextPlay);
  }

  function onStepClick(step) {
    setGameHistory(gameHistory.slice(0, step + 1));
    setStep(step);
    setIsNextPlay(step % 2 === 0);
  }

  useEffect(() => {
    const current = gameHistory[step];
    const winner = calculateWinner(current.squaresList);

    if (winner) {
      setStatus({ winner });
      return;
    }

    if (step > 8) {
      const deadWinner = { player: DEAD_WINNER };
      setStatus({ winner: deadWinner });
      return;
    }

    setStatus({ turn: nextPlay ? 'X' : 'O' });
  }, [gameHistory, step, nextPlay]);

  return (
    <>
      <Header />
      <Status player={status?.winner?.player} turn={status.turn} />
      <Board history={gameHistory} step={step} onClick={onBoardClick} />
      <History history={gameHistory} step={step} onClick={onStepClick} />
    </>
  );
}

export default App;
