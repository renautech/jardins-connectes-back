/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const VarietyField = ({ onChange, data, target, placeholder }) => {
  const varietiesFound = data.filter((variety) => {
    return (variety.family_id === target);
  });

  const varieties = varietiesFound.map((variety) => {
    return (
      <option key={variety.name + variety.family} value={variety.name}>{variety.name}</option>
    );
  });

  return (
    <div className="selectfield">
      <select onChange={onChange} name="operations" id="operations">
        <option value="">{placeholder}</option>
        {varieties}
      </select>
    </div>
  );
};

VarietyField.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  target: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

VarietyField.defaultProps = {
  target: '',
};

export default VarietyField;
