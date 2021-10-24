export const cleanFilters = (filterObj) => {
  const categories = Object.keys(filterObj)
  const cleanedFilters = categories.reduce((acc, category) => {
    acc[category] = Object.entries(filterObj[category]).filter(obj => obj[1] === true).map(obj => obj[0])
    return acc
  }, {difficulty: [], routeType: [], traffic: [], tags: []})
  return cleanedFilters
}

export const filterByCatagories = (filterObj, trailList) => {
   return trailList.filter(trail => {
    return filterObj.difficulty.length ? filterObj.difficulty.includes(trail.difficulty) : trail;
  })
  .filter(trail => {
    return filterObj.traffic.length ? filterObj.traffic.includes(trail.traffic) : trail;
  })
  .filter(trail => {
    return filterObj.routeType.length ? filterObj.routeType.includes(trail.routeType) : trail;
  })
  .filter(trail => {
    return filterObj.tags.length ? filterObj.tags.every(tag => trail.tags.map(activity => activity.name).includes(tag)) : trail;
  })
}
