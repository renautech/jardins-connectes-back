/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import OneOperation from 'src/components/OperationList/OneOperation';

import './style.scss';

const OperationList = ({
  getFamilyOperations,
  operationList,
  operationTypes,
  userBoards,
  deleteOperation,
}) => {
  useEffect(() => {
    getFamilyOperations();
  }, []);

  const operations = operationList.data.map((operation) => {
    return (
      <OneOperation
        key={operation.id}
        operation={operation}
        operationTypes={operationTypes}
        userBoards={userBoards}
        deleteOperation={deleteOperation}
      />
    );
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
  getFamilyOperations: PropTypes.func.isRequired,
  operationList: PropTypes.object.isRequired,
  operationTypes: PropTypes.array.isRequired,
  userBoards: PropTypes.array.isRequired,
  deleteOperation: PropTypes.func.isRequired,
};

export default OperationList;
