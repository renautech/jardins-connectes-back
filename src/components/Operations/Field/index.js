/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({ onChange }) => {
  return (
    <div className="field">
      <input className="field__input" type="text" onChange={onChange} />
    </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Field;
