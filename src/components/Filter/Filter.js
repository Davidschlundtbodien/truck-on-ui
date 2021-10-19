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
  const [RiverActivity, setRiverActivity] = useState(false);
  const [skiingActivity, setSkiingActivity] = useState(false);

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

  const options = 
    <>
      <div className="difficulty-filters">
        <p className="difficulty-heading">Difficulty</p>
        <button onClick={() => setEasyDifficulty(!easyDifficulty)}>Easy</button>
        <button onClick={() => setModerateDifficulty(!moderateDifficulty)}>Moderate</button>
        <button onClick={() => setHardDifficulty(!hardDifficulty)}>Hard</button>
      </div>
      <div className="type-filters">
        <p className="type-heading">Route Type</p>
        <button onClick={() => setPointToPoint(!pointToPoint)}>Point to Point</button>
        <button onClick={() => setOutAndBack(!outAndBack)}>Out and Back</button>
        <button onClick={() => setLoop(!loop)}>Loop</button>
      </div>
      <div className="traffic-filters">
        <p className="traffic-heading">Traffic</p>
        <button onClick={() => setLightTraffic(!lightTraffic)}>Easy</button>
        <button onClick={() => setModerateTraffic(!moderateTraffic)}>Moderate</button>
        <button onClick={() => setHeavyTraffic(!heavyTraffic)}>Hard</button>
      </div>
      <div className="activity-filters">
        <p className="activity-heading">Activities</p>
        <button onClick={() => setHikingActivity(!hikingActivity)}>Hiking</button>
        <button onClick={() => setSnowshoeingActivity(!snowShoeingActivity)}>Snowshoeing</button>
        <button onClick={() => setFishingActivity(!fishingActivity)}>Fishing</button>
        <button onClick={() => setCampingActivity(!campingActivity)}>Camping</button>
        <button onClick={() => setRockyActivity(!rockyActivity)}>Rocky</button>
        <button onClick={() => setMountainBikingActivity(!mountainBikingActivity)}>Mountain biking</button>
        <button onClick={() => setViewsActivity(!viewsActivity)}>Views</button>
        <button onClick={() => setWildlifeActivity(!wildlifeActivity)}>Wildlife</button>
        <button onClick={() => setWaterfallActivity(!waterfallActivity)}>Waterfall</button>
        <button onClick={() => setRiverActivity(!RiverActivity)}>River</button>
        <button onClick={() => setSkiingActivity(!skiingActivity)}>Skiing</button>
      </div>
    </>

    
  const handleApply = () => {
    applyTrailFilters("HERE HANDLEAPPLY")
    setFilterActive(false);
  }

  const resetFilters = () => {
    setEasyDifficulty(false);
    setModerateDifficulty(false);
    setHardDifficulty(false);
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