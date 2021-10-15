import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = ({ user }) => {
  return (
    <nav className="nav-bar">
      <NavLink className="link" to="/">
        <h1 className="home-nav-text">Truck On {user.name}</h1>
      </NavLink>
      <NavLink className="link" to={`/favorites/${user.id}`}>
        <h1 className="favorite-nav-text">Favorites</h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
