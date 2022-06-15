import React from 'react';
import styled from 'styled-components';

const StyleHistory = styled.div`
  text-align: center;
  margin: 1.5em auto;
  .orderby {
    cursor: pointer;
    max-width: 200px;
    padding: 0 2em;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: 20px;
      margin: 0 0.5em;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 0;
      button {
        border-radius: 3px;
        margin: 0 0 0.3em 0;
        padding: 0.5em 2em;
        background-color: white;
        border: none;
        color: #282c34;
        -webkit-transition: background-color 0.05s linear;
        -ms-transition: background-color 0.05s linear;
        transition: background-color 0.05s linear;
        cursor: pointer;
        border: 1px solid #282c34;
        &:focus {
          outline: none;
        }
        &:hover {
          color: #282c34;
          background-color: #60dbfb;
        }
        &.active {
          color: white;
          background-color: #282c34;
        }
      }
    }
  }
`;

function History(props) {
  const { history, step, onClick } = props;

  const moves = history.map((i, move) => {
    const moveRow = Math.floor(history[move].squareSelected / 3) + 1;
    const moveCol = (history[move].squareSelected % 3) + 1;

    const desc = move
      ? 'Go to move #' + move + ' (Row: ' + moveRow + ', Col: ' + moveCol + ')'
      : 'Go to game start';

    return (
      <li key={move}>
        <button
          className={step === move ? 'active' : ''}
          onClick={() => onClick(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <StyleHistory>
      <ul>{moves}</ul>
    </StyleHistory>
  );
}

export default History;
