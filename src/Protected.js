import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Protected(props) {
  let Cmp = props.Cmp;
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      history.push('./signin');
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
}
export default Protected;

Protected.propTypes = {
  Cmp: PropTypes.string
};
