import React, { useMemo } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function CustomEvent() {
  const Custom = useMemo((props) => {
    return (
      <div>
        <button content="View" onClick={(e) => props.onPopoverButtonClick(e)} />
      </div>
    );
  });

  return (
    <>
      <div>Hello</div>
      {Custom}
    </>
  );
}

export default CustomEvent;

CustomEvent.propTypes = {
  onPopoverButtonClick: propTypes.string
};
