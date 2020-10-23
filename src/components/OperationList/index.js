/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Operation from 'src/components/OperationList/Operation';

import './style.scss';

const OperationList = ({ dataOperations }) => {
  const operations = dataOperations.map((operation) => {
    return <Operation operation={operation}/>;
  });



  return (
    <div className="operationList">
      <h2 className="operationList__title">Mes dernières actions</h2>
      <div className="operationList_operation">
        {operations}
      </div>
    </div>
  );
};

OperationList.propTypes = {
  dataOperations: PropTypes.object.isRequired,
};

export default OperationList;
