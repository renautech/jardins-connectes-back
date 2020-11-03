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
  isLogged,
}) => {
  useEffect(() => {
    if (isLogged) {
      getFamilyOperations();
    }
  }, []);

  const pictureBuild = `http://3.93.151.102:5555${operationList.familyInfo.picture}`;

  const options = [
    { value: 'wip', label: 'Workinprogress' },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#FOF",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 0,
      textAlign: "right",
      // prevent menu to scroll y
      wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 2,
    }),
  };

  const operations = operationList.data.map((operation) => {
    return (
      <div>
        <OneOperation
          key={operation.id}
          operation={operation}
          operationTypes={operationTypes}
          userBoards={userBoards}
          deleteOperation={deleteOperation}
          styles={customStyles}
        />
      </div>
    );
  });

  return (
    <div className="operationList">
      <h2 className="operationList__title">Mes dernières actions</h2>
      <img className="operationList__img" src={pictureBuild} alt="vegetable" />
      <div className="operationList__bloc">
        <div>
          <Select
            className="operationList__select"
            classNamePrefix="react-select"
            name="color"
            options={options}
            placeholder="heu..."
          />
          {operations}
        </div>
      </div>
    </div>
  );
};

OperationList.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  getFamilyOperations: PropTypes.func.isRequired,
  operationList: PropTypes.object.isRequired,
  operationTypes: PropTypes.array.isRequired,
  userBoards: PropTypes.array.isRequired,
  deleteOperation: PropTypes.func.isRequired,
};

export default OperationList;
