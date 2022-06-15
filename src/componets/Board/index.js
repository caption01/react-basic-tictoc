import React from 'react';

import Square from '../Square';

import './Board.scss';

function Board(props) {
  const { history, step } = props;

  // implement renderSquares using prepare className in Board.scss
  // and do action when user click square
  const renderSquares = history[step].squaresList.map((value, squareIdx) => {
    return <Square key={squareIdx} value={value} />;
  });

  return <div className="board">{renderSquares}</div>;
}

export default Board;
