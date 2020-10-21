/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SelectField = ({ onChange }) => {
  return (
    <div className="selectfield">
      <input className="selectfield__input" type="text" onChange={onChange} />
    </div>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
