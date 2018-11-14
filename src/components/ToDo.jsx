import PropTypes from 'prop-types';
import React from 'react';

const ToDo = ({ label }) => {
  return <div>{label}</div>;
};

ToDo.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ToDo;
