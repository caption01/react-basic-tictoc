import React from 'react';

import Square from '../Square';

import './Board.scss';

function Board(props) {
  const { history, step, onClick } = props;

  const renderSquares = history[step].squaresList.map((value, squareIdx) => {
    return (
      <Square
        key={squareIdx}
        value={value}
        onClick={() => onClick(squareIdx)}
      />
    );
  });

  return <div className="board">{renderSquares}</div>;
}

export default Board;
