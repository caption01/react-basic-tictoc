import React from 'react';

import Square from '../Square';

import './Board.scss';

function Board(props) {
  const { history, step, winnerLine = false, onClick } = props;

  const renderSquares = history[step].squaresList.map((value, squareIdx) => {
    let isWin = false;

    for (let w = 0; w < winnerLine.length; w++) {
      const winIdx = winnerLine[w];
      if (winnerLine && winIdx === squareIdx) {
        isWin = true;
      }
    }

    return (
      <Square
        key={squareIdx}
        value={value}
        win={isWin}
        onClick={() => onClick(squareIdx)}
      />
    );
  });

  return <div className="board">{renderSquares}</div>;
}

export default Board;
