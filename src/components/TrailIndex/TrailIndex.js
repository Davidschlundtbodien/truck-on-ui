import React from 'react';
// import { Link } from 'react-router-dom';
import './TrailIndex.scss';
import { useQuery } from '@apollo/client';
import { TRAIL_INDEX }from '../../graphql/queries'

const TrailIndex = () => {
  const {loading, error, data} = useQuery(TRAIL_INDEX)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <section className="trail-index-container">
      <h1>Trail Index/Home Test</h1>
    </section>
  );
}

export default TrailIndex;
