/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Options from 'src/components/Operations/SelectField/Options';

import './style.scss';

const SelectField = ({
  onChange,
  data,
  placeholder,
  name,
}) => {
  const options = data.map((option) => {
    return (
      <Options keyData={option.id} value={option.name} />
    );
  });

  return (
    <div className="selectfield">
      <select name={name} onChange={onChange} id="">
        <option key="0" value="">{placeholder}</option>
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
