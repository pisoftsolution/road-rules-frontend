import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import CustomEvent from './CustomEvent';

function SlotDetails({ onPopoverButtonClick }, props) {
  return (
    <>
      <CustomEvent event={props} onPopoverButtonClick={onPopoverButtonClick} />
      <div>Hello</div>
    </>
  );
}

export default SlotDetails;

SlotDetails.displayName = 'SlotDetails';
SlotDetails.propTypes = {
  onPopoverButtonClick: propTypes.string
};
