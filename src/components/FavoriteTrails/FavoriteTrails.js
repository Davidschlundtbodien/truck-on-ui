import React from 'react';
import TrailCard from '../TrailCard/TrailCard';
import './FavoriteTrails.scss';

const FavoriteTrails = ({userID, trails}) => {

  const trailList = trails.map(trail => {
    return (
      <TrailCard key={trail.id} trail={trail}/>
    )
  })

  return (
    <section className="favorite-trails-container">
      <h1>User {userID}s' Favorite Trails!</h1>
      <div>
        {trailList}
      </div>
    </section>
  );
}

export default FavoriteTrails;
