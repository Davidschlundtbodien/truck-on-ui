import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteTrails.scss';

const FavoriteTrails = ({userID}) => {
  return (
    <section className="favorite-trails-container">
      <h1>User {userID}s' Favorite Trails!</h1>
    </section>
  );
}

export default FavoriteTrails;
