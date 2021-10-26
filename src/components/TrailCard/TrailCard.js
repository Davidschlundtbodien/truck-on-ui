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
        <div className="card-text-container">
          <h1 className="card-name">{trail.name}</h1>
          <div className="card-details">
            { trail.difficulty === "Novice" && <p className="card-difficulty green">{trail.difficulty}</p> }
            { trail.difficulty === "Intermediate" && <p className="card-difficulty blue">{trail.difficulty}</p> }
            { trail.difficulty === "Expert" && <p className="card-difficulty red">{trail.difficulty}</p> }
            <div className="traffic-type">
              <p className="card-type">Type: {trail.routeType}</p>
              <p className="card-traffic">{`Distance: ${trail.distance} miles`}</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  )
}


export default TrailCard;
