import React, { useState, useEffect, useRef } from 'react';
import FilterModal from '../../FilterModal/FilterModal';
import './Filter.scss';


const Filter = ({ applyTrailFilters, children, onApply, label }) => {
  const [filterActive, setFilterActive] = useState(false);
  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);
  const modalRef = useRef(undefined);

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
  
    /* Event cleanup */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); /* handle desktops */
      document.removeEventListener("touchstart", handleClickOutside); /* handle touch devices */
    };
  }, [dropdownRef, buttonRef, modalRef]);

  const handleApply = () => {
    console.log("HERE HANDLEAPPLY")
  }

  return (
    <>
      <div className="filter">
        <button className="filter-button" onClick={() => setFilterActive(!filterActive)} ref={buttonRef}>Filter</button>
      </div>
      { filterActive && (
        <>
          <div className="filter-dropdown" ref={dropdownRef}>Filter component Test
            <div className="filter-dropdown-actions"></div>
            <button className="filter-apply-button" onClick={() => handleApply()}>Apply Filters</button>
          </div>
        </>
      )}
      { filterActive && (
        <FilterModal
          ref={modalRef}
          onApply={handleApply}
          onDismiss={() => setFilterActive(false)}
        />
      )}
    </>
  );
}

export default Filter;