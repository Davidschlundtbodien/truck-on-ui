import React, { useEffect } from 'react';
import './TrailIndex.scss';
import { useQuery } from '@apollo/client';
import { TRAIL_INDEX }from '../../graphql/queries'
import TrailCard from '../TrailCard/TrailCard'
import Filter from '../Filter/Filter';
import trails from '../../sampleTrailData';

const TrailIndex = ({filteredTrails, allTrails, setAllTrails, setFilteredTrails}) => {
  const {loading, error, data} = useQuery(TRAIL_INDEX)

  // On component mount, App should perform a fetch call to pull all trails data and setAllTrails
  // For now, using sampleTrailData file
  useEffect(() => {
    startTrailIndex();
  }, [])

  const startTrailIndex = () => {
    setAllTrails(trails)
    setFilteredTrails(trails)
  }

  const cleanFilters = (filterObj) => {
    const categories = Object.keys(filterObj)
    const cleanedFilters = categories.reduce((acc, category) => {
      acc[category] = Object.entries(filterObj[category]).filter(obj => obj[1] === true).map(obj => obj[0])
      return acc
    }, {difficulty: [], type: [], traffic: [], activities: []})
    applyDifficultyFilters(cleanedFilters)
  }

  const applyDifficultyFilters = (filterObj) => {
    if (filterObj.difficulty.length) {
      const filteredByDifficulty = allTrails.filter(trail => filterObj.difficulty.includes(trail.difficulty))
      applyTypeFilters(filteredByDifficulty, filterObj)
    } else {
      applyTypeFilters(allTrails, filterObj)
    }
  }

  const applyTypeFilters = (trailList, filterObj) => {
    if (filterObj.type.length) {
      const filteredByType = trailList.filter(trail => filterObj.type.includes(trail.type))
      applyTrafficFilters(filteredByType, filterObj)
    } else {
      applyTrafficFilters(trailList, filterObj)
    }
  }

  const applyTrafficFilters = (trailList, filterObj) => {
    if (filterObj.traffic.length) {
      const filteredByTraffic = trailList.filter(trail => filterObj.traffic.includes(trail.traffic))
      applyActivityFilters(filteredByTraffic, filterObj)
    } else {
      applyActivityFilters(trailList, filterObj)
    }
  }

  const applyActivityFilters = (trailList, filterObj) => {
    if (filterObj.activities.length) {
      const filteredByActivities = trailList.filter(trail => filterObj.activities.every(activity => trail.activities.includes(activity)))
      setFilteredTrails(filteredByActivities)
    } else {
      setFilteredTrails(trailList)
    }
  }

  // const applyTrailFilters = (filterObj) => {
  //   setFilteredTrails(allTrails.filter(trail => {
  //     if (filterObj.difficulty.length) {
  //       return filterObj.difficulty.includes(trail.difficulty)
  //     } else {
  //       return trail;
  //     }
  //   })
  //   .filter(trail => {
  //     if (filterObj.traffic.length) {
  //       return filterObj.traffic.includes(trail.traffic)
  //     } else {
  //       return trail;
  //     }
  //   })
  //   .filter(trail => {
  //     if (filterObj.type.length) {
  //       return filterObj.type.includes(trail.type)
  //     } else {
  //       return trail
  //     }
  //   })
  //   .filter(trail => {
  //     if (filterObj.activities.length) {
  //       return filterObj.activities.every(activity => trail.activities.includes(activity))
  //     } else {
  //       return trail
  //     }
  //   }))
  // }


  // if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const trailList = filteredTrails.map(trail => {
    return (
      <TrailCard key={trail.id} trail={trail}/>
    )
  })

  return (
    <section className="trail-index-container">
      <Filter cleanFilters={cleanFilters}/>
      <h1>Trail Index/Home Test</h1>
      {trailList}
    </section>
  );
}

export default TrailIndex;
