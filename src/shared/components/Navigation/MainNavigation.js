import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navlinks from './NavLinks';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';
import Backdrop from '../UIElements/Backdrop';
import logo from '../../../adi_1.png';
const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const OpenDrawerHandler = () =>{
    setDrawerIsOpen(true);
  };

  const CloseDrawerHandler = () =>{
    setDrawerIsOpen(false);
  };
  

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={CloseDrawerHandler}/>}
        <SideDrawer show ={drawerIsOpen} onClick={CloseDrawerHandler}>
          <nav className='main-navigation__drawer-nav'>
            <Navlinks/>
          </nav>
        </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={OpenDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <img src={logo} alt='logo'></img>
          <Link to="/">LenScape</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <Navlinks/>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
