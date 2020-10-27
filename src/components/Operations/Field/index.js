/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ onChange, placeholder, name, value }) => {
  return (
    <div className="field">
      <input className="field__input" name={name} type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
