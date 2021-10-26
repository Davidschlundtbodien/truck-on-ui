import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = ({ user }) => {
  return (
    <nav className="nav-bar">
      <NavLink className="link" exact to="/" activeStyle={{filter: "brightness(0) invert(1)"}}>
        <h1 className="home-nav-text">Search Trails</h1>
      </NavLink>
      <NavLink className="link" exact to={`/favorites/${user.id}`} activeStyle={{filter: "brightness(0) invert(1)"}}>
        <h1 className="favorite-nav-text">Favorites</h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
