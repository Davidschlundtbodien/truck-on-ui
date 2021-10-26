import React, { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import './TrailDetails.scss';
import { useQuery } from '@apollo/client';
import Comments from '../Comments/Comments';
import Spinner from '../Spinner/Spinner';
import { imageList } from '../../images/imageList';
import { SINGLE_TRAIL }from '../../graphql/queries';

const TrailDetails = ({ id }) => {
  const [trail, setTrail] = useState("")

  const {loading, error, data} = useQuery(SINGLE_TRAIL, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setTrail(data.trail)
    }
  }, [data])

  if (error) return `Error! ${error}`;

  const trailTags = trail.tags && trail.tags.map(tag => {
      return <p key={tag.name} className="tag">{tag.name}</p>
    })


  const randomImgIndex = Math.floor(Math.random() * (imageList.length))

  return (
    <>
      {!loading ?
      <article className="trail-details-container">
        <img className="detail-image" alt={trail.name} src={imageList[randomImgIndex]}></img>
        <div className="picture-overlay">
          <p className="trail-name">{trail.name}</p>
          <Link className="back-home" to="/">Back to Home</Link>
        </div>
        <section className="description-container">
          <p className="details-header">Summary</p>
          <p>{trail.description}</p>
        </section>
        <section className="stats-container">
          <p className="details-header">Stats of {trail.name}</p>
          <div className="stats-list">
            <p>Conditons - {trail.temp}°F {trail.conditions} </p>
            <p>Nearest City - {trail.nearestCity}</p>
            <p>Elevation Gain - {trail.elevationGain} ft</p>
            <p>{`Total Distance - ${trail.distance} mi`}</p>
            <p>Traffic - {trail.traffic}</p>
            <p>Type - {trail.routeType}</p>
            <p>Difficulty - {trail.difficulty}</p>
          </div>
        </section>
        <section className="tags-container">
          <p className="tags-header">Activities</p>
          <div className="tags-list">
            {trailTags}
          </div>
        </section>
        {trail.comments && <Comments comments={trail.comments}/>}
      </article> :
      <Spinner />
      }
    </>
  );
}

export default TrailDetails;
