/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import OneOperation from 'src/components/OperationList/OneOperation';

import './style.scss';

const OperationList = ({ dataOperations }) => {
  const operations = dataOperations.map((operation) => {
    return <OneOperation operation={operation} />;
  });

  return (
    <div className="operationList">
      <h2 className="operationList__title">Mes dernières actions</h2>
      <img className="operationList__img" src="https://www.academiedugout.fr/images/15695/1200-auto/courgette_000.jpg?poix=50&poiy=50" alt="vegetable" />
      <div className="operationList__bloc">
        {operations}
      </div>
    </div>
  );
};

OperationList.propTypes = {
  dataOperations: PropTypes.array.isRequired,
};

export default OperationList;
