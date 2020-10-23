/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Operation from './Operation';

import './style.scss';

const OperationType = ({ handleOpType, getOperationsType }) => {
  // const operations = getOperationsType();
  console.log(getOperationsType());
  return (
    <div className="operation__type">
      <select onChange={handleOpType} name="operations" id="operations">
        <option value="">Choisir une opération</option>
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
  getOperationsType: PropTypes.func.isRequired,
};

export default OperationType;
