import React from 'react';
import { Link } from 'react-router-dom'

const TrailCard = ({ trail }) => {
  return (
    <section className="trail-card">
      <h1>{trail.name}</h1>
    </section>
  )
}


export default TrailCard;
