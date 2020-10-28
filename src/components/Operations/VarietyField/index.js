/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Options from 'src/components/Operations/SelectField/Options';

import './style.scss';

const VarietyField = ({ onChange, data, target, placeholder, name }) => {
  const varieties = data.map((option) => {
    return (
      <Options key={option.id} keyData={option.id} value={option.name} />
    );
  });

  return (
    <div className="varietyfield">
      <select name={name} onChange={onChange} id={name}>
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
  name: PropTypes.string.isRequired,
};

VarietyField.defaultProps = {
  target: '',
};

export default VarietyField;
