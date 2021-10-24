import React from 'react';
import './TrailCard.scss';
import { Link } from 'react-router-dom'

const TrailCard = ({ trail }) => {

  const activities = trail.tags.map(tag => {
    return (
      <p key={tag.name}>{tag.name}</p>
    )
  })


  return (
    <Link to={`/trail/${trail.id}`} className="card-link">
      <section className="trail-card">
        <h1>{trail.name}</h1>
        <p>Difficulty - {trail.difficulty}</p>
        <p>Type - {trail.routeType}</p>
        <p>Traffic - {trail.traffic}</p>
        <article>
          <p>Activities</p>
          <div className="activities-list">
            {trail.tags && <>{activities}</>}
          </div>
        </article>
      </section>
    </Link>
  )
}


export default TrailCard;
