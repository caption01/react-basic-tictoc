import React from 'react';
import Square from './square';
import styled from 'styled-components';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  width: 144px;
`;

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

  return <StyledBoard>{renderSquares}</StyledBoard>;
}

export default Board;
