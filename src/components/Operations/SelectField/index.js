/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SelectField = ({ onChange, data, placeholder, name }) => {
  if (data === undefined) {
    data = [{ name: 'Vous n\'avez pas de planche !' }];
  }

  const options = data.map((option) => {
    return (
      <option key={option.id} id={option.id} data-foo="test" value={option.name}>{option.name}</option>
    );
  });

  return (
    <div className="selectfield">
      <select name={name} onChange={onChange} id="">
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
  name: PropTypes.string.isRequired,
};

export default SelectField;
