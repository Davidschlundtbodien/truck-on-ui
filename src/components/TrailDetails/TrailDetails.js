import React, { useEffect, useState }from 'react';
import './TrailDetails.scss';
import { useQuery } from '@apollo/client';
import Comments from '../Comments/Comments';
import Spinner from '../Spinner/Spinner';
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

  return (
    <>
      {!loading ?
      <article className="trail-details-container">
        <p className="trail-name">{trail.name}</p>
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
        <Comments trailID={id}/>
      </article> :
      <Spinner />
      }
    </>
  );
}

export default TrailDetails;
