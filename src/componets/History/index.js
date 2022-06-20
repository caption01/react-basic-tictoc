import React from 'react';

import './History.scss';

const getRow = (history, move) =>
  Math.floor(history[move].squareSelected / 3) + 1;

const getCol = (history, move) => (history[move].squareSelected % 3) + 1;

function History({ history, step, onClick }) {
  const moves = history.map((i, move) => {
    const moveRow = getRow(history, move);
    const moveCol = getCol(history, move);

    const desc = move
      ? 'Go to move #' + move + ' (Row: ' + moveRow + ', Col: ' + moveCol + ')'
      : 'Go to game start';

    return (
      <li key={move}>
        <button
          className={step === move ? 'active' : ''}
          onClick={() => onClick(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="history">
      <ul>{moves}</ul>
    </div>
  );
}

export default History;
