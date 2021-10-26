import React from 'react';
import { NavLink } from 'react-router-dom';
import heartIcon from '../../images/heart-active-icon.svg';
import searchIcon from '../../images/search-active-icon.svg';
import './MobileNav.scss';

const MobileNav = ({user}) => {
  return (
    <nav className="mobile-navbar">
       <NavLink className="link" exact to="/" activeStyle={{filter: "brightness(0) invert(1)"}}>
         <div className="mobile-navbar-link">
           <img className="search-icon" src={searchIcon} alt="Magnifying Glass"></img>
           <p className="mobile-search-title">Search Trails</p>
         </div>
      </NavLink>
      <NavLink className="link" exact to={`/favorites/${user.id}`} activeStyle={{filter: "brightness(0) invert(1)"}}>
        <div className="mobile-navbar-link">
          <img className="heart-icon" src={heartIcon} alt="Heart"></img>
          <p className="mobile-favorites-title">Favorite Trails</p>
        </div>
      </NavLink>
    </nav>
  );
}

export default MobileNav;