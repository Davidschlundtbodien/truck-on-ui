import React from 'react';
import './TrailDetails.scss';
import { useQuery } from '@apollo/client';
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
      <p>{trail.name}</p>
      <p>{trail.description}</p>
      <p>{trail.nearestCity}</p>
    </article>
  );
}

export default TrailDetails;
