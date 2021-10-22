import React, { useState, useEffect } from 'react';
import './TrailIndex.scss';
import { useQuery } from '@apollo/client';
import { TRAIL_INDEX }from '../../graphql/queries'
import TrailCard from '../TrailCard/TrailCard'

const TrailIndex = () => {
  const [allTrails, setAllTrails] = useState([])
  const {loading, error, data} = useQuery(TRAIL_INDEX);

  useEffect(() => {
    if (data) {
      setAllTrails(data.trails)
    }
  }, [data])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  const trailList = allTrails.map(trail => {
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
