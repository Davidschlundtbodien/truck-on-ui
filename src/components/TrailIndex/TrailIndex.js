import React from 'react';
import './TrailIndex.scss';
import { useQuery } from '@apollo/client';
import { TRAIL_INDEX }from '../../graphql/queries'
import TrailCard from '../TrailCard/TrailCard'

const TrailIndex = ({filteredTrails}) => {
  const {loading, error, data} = useQuery(TRAIL_INDEX)

  // if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const trailList = filteredTrails.map(trail => {
    return (
      <TrailCard key={trail.id} trail={trail}/>
    )
  })

  return (
    <section className="trail-index-container">
      <h1>Trail Index/Home Test</h1>
      {trailList}
    </section>
  );
}

export default TrailIndex;
