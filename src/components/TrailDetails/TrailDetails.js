import React from 'react';
import './TrailDetails.scss';
import { useQuery } from '@apollo/client';
import Comments from '../Comments/Comments';
import { SINGLE_TRAIL }from '../../graphql/queries'

const TrailDetails = ({trails, trailID}) => {
  const {loading, error, data} = useQuery(SINGLE_TRAIL, {
    variables: {  },
  });

  const trail = trails[trailID]

  // if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <article className="trail-details-container">
      <p className="trail-name">{trail.name}</p>
      <section className="description-container">
        <p className="details-header">Summary</p>
        <p>{trail.description}</p>
      </section>
      <section className="stats-container">
        <p className="details-header">Stats of {trail.name}</p>
        <div className="stats-list">
          <p>Nearest City - {trail.nearestCity}</p>
          <p>Elevation Gain - {trail.elevationGain} ft</p>
          <p>Total Distance - {trail.distance} mi</p>
          <p>Traffic - {trail.traffic}</p>
          <p>Type - {trail.type}</p>
          <p>Difficulty - {trail.difficulty}</p>
        </div>
      </section>
      <Comments trailID={trailID}/>
    </article>
  );
}

export default TrailDetails;
