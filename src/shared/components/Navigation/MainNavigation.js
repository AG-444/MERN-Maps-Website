import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navlinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">LenScape</Link>
      </h1>
      <nav>
        <Navlinks/>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
