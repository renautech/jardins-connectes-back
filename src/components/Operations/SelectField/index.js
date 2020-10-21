/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SelectField = ({ onChange, data, placeholder }) => {
  const options = data.map((option) => {
    return (
      <option key={option.name} value={option.name}>{option.name}</option>
    );
  });

  return (
    <div className="selectfield">
      <select onChange={onChange} name="" id="">
        <option value="">{placeholder}</option>
        {options}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SelectField;
