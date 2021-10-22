export const filterByCatagories = (filterObj, trailList) => {
   return trailList.filter(trail => {
    return filterObj.difficulty.length ? filterObj.difficulty.includes(trail.difficulty) : trail;
  })
  .filter(trail => {
    return filterObj.traffic.length ? filterObj.traffic.includes(trail.traffic) : trail;
  })
  .filter(trail => {
    return filterObj.type.length ? filterObj.type.includes(trail.type) : trail;
  })
  .filter(trail => {
    return filterObj.difficulty ? filterObj.activities.every(activity => trail.activities.includes(activity)) : trail;
  })
}
