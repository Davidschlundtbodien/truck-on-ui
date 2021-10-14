import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (props) => {
  return (
    <nav className="nav-bar">
      <NavLink className="link" to="/">
        <h1 className="home-nav-text">Truck On</h1>
      </NavLink>
      <NavLink className="link" to="/favorites">
        <h1 className="favorite-nav-text">Favorites</h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;