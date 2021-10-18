import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import './FilterModal.scss';

const FilterModal = React.forwardRef(({children, onApply, onDismiss}, ref) => {
    return (
      <>
        <DialogOverlay className="filter-modal" >
          <DialogContent
            ref={ref}
            className="filter-modal-wrapper"
            aria-label="modal window"
          >
            <div className="filter-modal-header"></div>
              <button onClick="{onDismiss}">x</button>
              <div className="filter-modal-content">{children}</div>         
              <div className="filter-modal-actions"></div>
              <button onClick={onApply}>Apply</button>
          </DialogContent>
        </DialogOverlay>
      </>
    );
  });
export default FilterModal;