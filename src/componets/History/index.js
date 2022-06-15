import React from 'react';

import './History.scss';

const getRow = (history, move) =>
  Math.floor(history[move].squareSelected / 3) + 1;

// hint create helper to calculate Col
// const getCol = () => {}

// implenent history button to backforward game depent on user choose
// apply className in History.scss
// add action onClick into each history button
function History({ history }) {
  const moves = history.map((i, move) => {
    const moveRow = getRow(history, move);
    const moveCol = getCol(history, move);

    // using moveRow and moveCol to create description
    const desc = 'move history';

    return <li key={move}>{desc}</li>;
  });

  return (
    <div className="history">
      <ul>{moves}</ul>
    </div>
  );
}

export default History;
