import React from 'react';
import styled from 'styled-components';

import { DEAD_WINNER } from '../utils/helpers';

const StyleStatus = styled.div`
  font-size: 1.5em;
  margin: 1.5em auto;
  text-align: center;
  font-weight: bold;
`;

const calculateStatus = (playerWin, turn) => {
  if (playerWin === DEAD_WINNER) return playerWin;

  if (playerWin) return `Winner: ${playerWin}`;

  return `Next player: ${turn}`;
};

function Status(props) {
  const { player, turn } = props;

  const status = calculateStatus(player, turn);

  return <StyleStatus>{status}</StyleStatus>;
}

export default Status;
