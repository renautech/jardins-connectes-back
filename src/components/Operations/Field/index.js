/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ onChange, placeholder, name }) => {
  return (
    <div className="field">
      <input className="field__input" name={name} type="text" onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Field;
