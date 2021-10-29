import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import './FilterModal.scss';

const FilterModal = React.forwardRef(({children, options, resetFilters, onApply, onDismiss}, ref) => {
    return (
      <>
        <DialogOverlay className="filter-modal" >
          <DialogContent
            ref={ref}
            className="filter-modal-wrapper"
            aria-label="modal window"
          >
            <div className="filter-modal-header">
              <button className="modal-reset-button" onClick={resetFilters}>Reset Filters</button>
              <p className="filter-modal-title">Filter</p>
              <button className="modal-close-button" onClick={onDismiss}>✕</button>  
            </div>
            <div className="filter-modal-content">{options}</div>         
            <div className="filter-modal-actions">
              <button onClick={onApply}>Apply Filters</button>
            </div>
          </DialogContent>
        </DialogOverlay>
      </>
    );
  });
export default FilterModal;