/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const OperationType = ({ handleOpType }) => {
  return (
    <div className="operation__type">
      <select onChange={handleOpType} name="operations" id="operations">
        <option value="">Choisir une option</option>
        <option value="Créer une planche">Créer une planche</option>
        <option value="Semer">Semer</option>
        <option value="Arroser">Arroser</option>
        <option value="Labourer">Labourer</option>
        <option value="Traiter">Traiter</option>
        <option value="Planter">Planter</option>
      </select>
    </div>
  );
};

OperationType.propTypes = {
  handleOpType: PropTypes.func.isRequired,
};

export default OperationType;
