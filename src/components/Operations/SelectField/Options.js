/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Options = ({ keyData, value }) => {
  return (
    <option key={keyData} id={keyData} value={value}>{value}</option>
  );
};

Options.propTypes = {
  keyData: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default Options;
