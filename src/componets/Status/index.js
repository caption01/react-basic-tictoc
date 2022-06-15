import React from 'react';

import { DEAD_WINNER } from '../../utils/helpers';

import './Status.scss';

// implement calculateStatus to calculate status to display
const calculateStatus = (playerWin, turn) => {};

// implement stauts using Status.scss
function Status(props) {
  const status = calculateStatus(player, turn);

  return <div className="status">My Turn</div>;
}

export default Status;
