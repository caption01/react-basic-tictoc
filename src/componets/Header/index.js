import React from 'react';

import logo from '../../assets/logo.svg';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">React Tic Tac Toe challenge</h1>
    </header>
  );
}

export default Header;
