/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const OperationType = ({
  handleOpType,
  name,
  value,
}) => {
  // const operations = getOperationsType();
  return (
    <div className="operation__type">
      <select onChange={handleOpType} name={name} id={name} value={value}>
        <option value="">Quelle opération effectuer ?</option>
        {/* <Operation operations={operations}> */}
        <option value="Créer une planche">Créer une planche</option>
        <option value="Labourer">Labourer</option>
        <option value="Semer">Semer</option>
        <option value="Arroser">Arroser</option>
        <option value="Fertiliser">Fertiliser</option>
        <option value="Traiter">Traiter</option>
        <option value="Désherber">Désherber</option>
        <option value="Récolter">Récolter</option>
        <option value="Supprimer une planche">Supprimer une planche</option>
      </select>
    </div>
  );
};

OperationType.propTypes = {
  handleOpType: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default OperationType;
