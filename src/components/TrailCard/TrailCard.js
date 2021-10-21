import React from 'react';
import { Link } from 'react-router-dom'

const TrailCard = ({ trail }) => {
  return (
    <Link to={`/trail/${trail.id}`} className="trail-card">
      <h1>{trail.name}</h1>
    </Link>
  )
}


export default TrailCard;
