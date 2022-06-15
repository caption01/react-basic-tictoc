import React from 'react';
import clx from 'classnames';

import './Square.scss';

function Square({ win, onClick, value }) {
  let squareClass = ['square__button'];

  if (win) {
    squareClass.push('square__button--win');
  }

  return (
    <button className={clx(squareClass)} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
