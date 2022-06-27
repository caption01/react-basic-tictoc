import React from 'react';
import clx from 'classnames';

import './Square.scss';

function Square({ value, onClick }) {
  return (
    <button className="square__button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
