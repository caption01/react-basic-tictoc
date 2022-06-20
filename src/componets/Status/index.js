import React from 'react';

import { DEAD_WINNER } from '../../utils/helpers';

import './Status.scss';

const calculateStatus = (playerWin, turn) => {
  if (playerWin === DEAD_WINNER) return playerWin;

  if (playerWin) return `Winner: ${playerWin}`;

  return `Next player: ${turn}`;
};

function Status({ player, turn }) {
  const status = calculateStatus(player, turn);
  return <div className="status">{status}</div>;
}

export default Status;
