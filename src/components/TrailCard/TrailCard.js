import React from 'react';
import './TrailCard.scss';
import { Link } from 'react-router-dom';
import { imageList } from '../../images/imageList';

const TrailCard = ({ trail }) => {

  const randomImgIndex = Math.floor(Math.random() * (imageList.length))

  return (
    <Link to={`/trail/${trail.id}`} className="card-link">
      <section className="trail-card">
        <img className="card-image" alt={trail.name} src={imageList[randomImgIndex]}></img>
        <h1>{trail.name}</h1>
        <p>Difficulty - {trail.difficulty}</p>
        <p>Type - {trail.routeType}</p>
        <p>Traffic - {trail.traffic}</p>
      </section>
    </Link>
  )
}


export default TrailCard;
