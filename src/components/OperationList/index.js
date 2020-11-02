/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

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

  const pictureBuild = `http://3.93.151.102:5555${operationList.familyInfo.picture}`;

  const options = [
    { value: 'wip', label: 'Workinprogress' },
  ];

  const operations = operationList.data.map((operation) => {
    return (
      <div>
        <OneOperation
          key={operation.id}
          operation={operation}
          operationTypes={operationTypes}
          userBoards={userBoards}
          deleteOperation={deleteOperation}
        />
      </div>
    );
  });

  return (
    <div className="operationList">
      <h2 className="operationList__title">Mes dernières actions</h2>
      <img className="operationList__img" src={pictureBuild} alt="vegetable" />
      <div className="operationList__bloc">
        <Select
          className="basic-single"
          name="color"
          options={options}
          placeholder="heu..."
        />
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
