import React, {useState, useEffect} from 'react';
import TrailCard from '../TrailCard/TrailCard';
import './FavoriteTrails.scss';

const FavoriteTrails = ({userID, user, favoriteTrails}) => {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    setTrails(favoriteTrails)
  }, [])

  const trailList = trails.map(trail => {
    return (
      <TrailCard key={trail.id} trail={trail}/>
    )
  })


  return (
    <section className="favorite-trails-container">
      <h1>{user.name}s' Favorite Trails On a {user.vehicle}!</h1>
      <div>
        {trails && <>{trailList}</>}
      </div>
    </section>
  );
}

export default FavoriteTrails;
