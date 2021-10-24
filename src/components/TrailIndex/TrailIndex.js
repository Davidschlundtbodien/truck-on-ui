import React, { useState, useEffect } from 'react';
import './TrailIndex.scss';
import { useQuery } from '@apollo/client';
import { TRAIL_INDEX }from '../../graphql/queries'
import TrailCard from '../TrailCard/TrailCard'
import Filter from '../Filter/Filter';
import { filterByCatagories, cleanFilters } from '../Filter/helperMethods';
import trails from '../../sampleTrailData';

const TrailIndex = () => {
  const {loading, error, data} = useQuery(TRAIL_INDEX)
  const [allTrails, setAllTrails] = useState(trails);
  const [filteredTrails, setFilteredTrails] = useState(trails);

  useEffect(() => {
    if (data) {
      setAllTrails(data.trails)
    }
  }, [data])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleTrailFilters = (filterObj) => {
    const cleanedFilters = cleanFilters(filterObj)
    setFilteredTrails(filterByCatagories(cleanedFilters, allTrails))
  }

  const trailList = filteredTrails.map(trail => {
    return (
      <TrailCard key={trail.id} trail={trail}/>
    )
  })

  return (
    <section className="trail-index-container">
      <Filter handleTrailFilters={handleTrailFilters}/>
      <h1>Trails</h1>
      {trailList}
    </section>
  );
}

export default TrailIndex;
