import React from 'react';
import './TrailDetails.scss';
import { useQuery } from '@apollo/client';
import { SINGLE_TRAIL }from '../../graphql/queries'

const TrailDetails = () => {
  const {loading, error, data} = useQuery(SINGLE_TRAIL, {
    variables: {  },
  });

  // if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <article className="trail-details-container">
      <p>Trail Details Here</p>
    </article>
  );
}

export default TrailDetails;
