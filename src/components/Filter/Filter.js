import React, { useState, useEffect, useRef } from 'react';
import FilterModal from '../../FilterModal/FilterModal';
import './Filter.scss';

const Filter = ({ applyTrailFilters, onApply, label }) => {
  const [filterActive, setFilterActive] = useState(false);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  const modalRef = useRef(undefined);
  const [easyDifficulty, setEasyDifficulty] = useState(false);
  const [moderateDifficulty, setModerateDifficulty] = useState(false);
  const [hardDifficulty, setHardDifficulty] = useState(false);
  const [pointToPoint, setPointToPoint] = useState(false);
  const [outAndBack, setOutAndBack] = useState(false);
  const [loop, setLoop] = useState(false);
  const [lightTraffic, setLightTraffic] = useState(false);
  const [moderateTraffic, setModerateTraffic] = useState(false);
  const [heavyTraffic, setHeavyTraffic] = useState(false);
  const [hikingActivity, setHikingActivity] = useState(false);
  const [snowShoeingActivity, setSnowshoeingActivity] = useState(false);
  const [fishingActivity, setFishingActivity] = useState(false);
  const [campingActivity, setCampingActivity] = useState(false);
  const [rockyActivity, setRockyActivity] = useState(false);
  const [mountainBikingActivity, setMountainBikingActivity] = useState(false);
  const [viewsActivity, setViewsActivity] = useState(false);
  const [wildlifeActivity, setWildlifeActivity] = useState(false);
  const [waterfallActivity, setWaterfallActivity] = useState(false);
  const [riverActivity, setRiverActivity] = useState(false);
  const [skiingActivity, setSkiingActivity] = useState(false);


  // This useEffect is used to close the dropdown/modal if a user clicks anywhere outside
  // of the dropdown/modal
  useEffect(() => {
    const handleClickOutside = (event) => {
    const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target);
    const isButtonClick = buttonRef.current && buttonRef.current.contains(event.target);
    const isModalClick = modalRef.current && modalRef.current.contains(event.target);
  
      if (isDropdownClick || isButtonClick || isModalClick) {
        return;
      } else {
        setFilterActive(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside); /* handle desktops */
    document.addEventListener("touchstart", handleClickOutside); /* handle touch devices */
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); /* handle desktops */
      document.removeEventListener("touchstart", handleClickOutside); /* handle touch devices */
    };
  }, [dropdownRef, buttonRef, modalRef]);

  // const options needs refactoring to be more DRY. Possible solution:
  // Take all categories and store them in an array.
  // Use a forEach to render a JSX button element for each element in the array

  const options = 
    <section className="filter-options-container">
      <div className="difficulty-filters">
        <p className="difficulty-heading">Difficulty</p>
        <button className={easyDifficulty ? "active-filter" : "default"} onClick={() => setEasyDifficulty(!easyDifficulty)}>Easy</button>
        <button className={moderateDifficulty ? "active-filter" : "default"} onClick={() => setModerateDifficulty(!moderateDifficulty)}>Moderate</button>
        <button className={hardDifficulty ? "active-filter" : "default"} onClick={() => setHardDifficulty(!hardDifficulty)}>Hard</button>
      </div>
      <div className="type-filters">
        <p className="type-heading">Route Type</p>
        <button className={pointToPoint ? "active-filter" : "default"} onClick={() => setPointToPoint(!pointToPoint)}>Point to Point</button>
        <button className={outAndBack ? "active-filter" : "default"} onClick={() => setOutAndBack(!outAndBack)}>Out and Back</button>
        <button className={loop ? "active-filter" : "default"} onClick={() => setLoop(!loop)}>Loop</button>
      </div>
      <div className="traffic-filters">
        <p className="traffic-heading">Traffic</p>
        <button className={lightTraffic ? "active-filter" : "default"} onClick={() => setLightTraffic(!lightTraffic)}>Easy</button>
        <button className={moderateTraffic ? "active-filter" : "default"} onClick={() => setModerateTraffic(!moderateTraffic)}>Moderate</button>
        <button className={heavyTraffic ? "active-filter" : "default"} onClick={() => setHeavyTraffic(!heavyTraffic)}>Hard</button>
      </div>
      <div className="activity-filters">
        <p className="activity-heading">Activities</p>
        <button className={hikingActivity ? "active-filter" : "default"} onClick={() => setHikingActivity(!hikingActivity)}>Hiking</button>
        <button className={snowShoeingActivity ? "active-filter" : "default"} onClick={() => setSnowshoeingActivity(!snowShoeingActivity)}>Snowshoeing</button>
        <button className={fishingActivity ? "active-filter" : "default"} onClick={() => setFishingActivity(!fishingActivity)}>Fishing</button>
        <button className={campingActivity ? "active-filter" : "default"} onClick={() => setCampingActivity(!campingActivity)}>Camping</button>
        <button className={rockyActivity ? "active-filter" : "default"} onClick={() => setRockyActivity(!rockyActivity)}>Rocky</button>
        <button className={mountainBikingActivity ? "active-filter" : "default"} onClick={() => setMountainBikingActivity(!mountainBikingActivity)}>Mountain biking</button>
        <button className={viewsActivity ? "active-filter" : "default"} onClick={() => setViewsActivity(!viewsActivity)}>Views</button>
        <button className={wildlifeActivity ? "active-filter" : "default"} onClick={() => setWildlifeActivity(!wildlifeActivity)}>Wildlife</button>
        <button className={waterfallActivity ? "active-filter" : "default"} onClick={() => setWaterfallActivity(!waterfallActivity)}>Waterfall</button>
        <button className={riverActivity ? "active-filter" : "default"} onClick={() => setRiverActivity(!riverActivity)}>River</button>
        <button className={skiingActivity ? "active-filter" : "default"} onClick={() => setSkiingActivity(!skiingActivity)}>Skiing</button>
      </div>
    </section>

  const filterObj = {
    difficulty: {
      "Easy": {easyDifficulty}.easyDifficulty,
      "Moderate": {moderateDifficulty}.moderateDifficulty,
      "Hard": {hardDifficulty}.hardDifficulty
    },
    type: {
      "Point to Point": {pointToPoint}.pointToPoint,
      "Out and Back": {outAndBack}.outAndBack,
      "Loop": {loop}.loop
    },
    traffic: {
      "Light": {lightTraffic}.lightTraffic,
      "Moderate": {moderateTraffic}.moderateTraffic,
      "Heavy": {heavyTraffic}.heavyTraffic
    },
    activities: {
      "Hiking": {hikingActivity}.hikingActivity,
      "Snowshoeing": {snowShoeingActivity}.snowShoeingActivity,
      "Fishing": {fishingActivity}.fishingActivity,
      "Camping": {campingActivity}.campingActivity,
      "Rocky": {rockyActivity}.rockyActivity,
      "Mountain biking": {mountainBikingActivity}.mountainBikingActivity,
      "Views": {viewsActivity}.viewsActivity,
      "Wildlife": {wildlifeActivity}.wildlifeActivity,
      "Waterfall": {waterfallActivity}.waterfallActivity,
      "River": {riverActivity}.riverActivity,
      "Skiing": {skiingActivity}.skiingActivity
    }
  }
    
  const handleApply = () => {
    applyTrailFilters(filterObj)
    setFilterActive(false);
  }

  const resetFilters = () => {
    setEasyDifficulty(false);
    setModerateDifficulty(false);
    setHardDifficulty(false);
    setPointToPoint(false);
    setOutAndBack(false);
    setLoop(false);
    setLightTraffic(false);
    setModerateTraffic(false);
    setHeavyTraffic(false);
    setHikingActivity(false);
    setSnowshoeingActivity(false);
    setFishingActivity(false);
    setCampingActivity(false);
    setRockyActivity(false);
    setMountainBikingActivity(false);
    setViewsActivity(false);
    setWildlifeActivity(false);
    setWaterfallActivity(false);
    setRiverActivity(false);
    setSkiingActivity(false);
    setFilterActive(false);
  }

  return (
    <>
      <div className="filter">
        <button className="filter-button" onClick={() => setFilterActive(!filterActive)} ref={buttonRef}>Filter</button>
      </div>
      { filterActive && (
        <>
          <section className="filter-dropdown" ref={dropdownRef}>Filter Trails
            <div className="filter-dropdown-content">
              {options}
            </div>
            <div className="filter-dropdown-actions">
              <button className="filter-apply-button" onClick={() => handleApply()}>Apply Filters</button>
              <button className="filter-reset-button" onClick={() => resetFilters()}>Reset Filters</button>
            </div>
          </section>
        </>
      )}
      { filterActive && (
        <FilterModal
          ref={modalRef}
          options={options}
          resetFilters={resetFilters}
          onApply={handleApply}
          onDismiss={() => setFilterActive(false)}
        />
      )}
    </>
  );
}

export default Filter;