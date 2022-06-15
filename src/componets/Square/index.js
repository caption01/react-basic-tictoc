import React from 'react';
import clx from 'classnames';

import './Square.scss';

// implement square using Square.scss and using win props to add className win
// into classname
function Square({ value }) {
  return <button className="square__button">{value}</button>;
}

export default Square;
