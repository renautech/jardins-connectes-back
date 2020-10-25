/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import MyGarden from 'src/components/MyGarden';
import Weather from 'src/containers/Weather';
import Operations from 'src/components/Operations';

import './style.scss';

const Garden = ({ data, dataBoard, getMyGardenFamilies, getOperationsType }) => {
  return (
    <div className="garden">
      <div className="garden__left">
        <MyGarden dataBoard={dataBoard} getMyGardenFamilies={getMyGardenFamilies} />
      </div>
      <div className="garden__right">
        <Weather zipcode="69400" />
        <Operations getOperationsType={getOperationsType} data={data} dataBoard={dataBoard} />
      </div>
    </div>
  );
};

Garden.propTypes = {
  getMyGardenFamilies: PropTypes.func.isRequired,
  getOperationsType: PropTypes.func.isRequired,
};

export default Garden;
