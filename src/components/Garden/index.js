/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import MyGarden from 'src/containers/MyGarden';
import Weather from 'src/containers/Weather';
import Operations from 'src/containers/Operations';

import './style.scss';

const Garden = ({ data, dataBoard }) => {
  return (
    <div className="garden">
      <div className="garden__left">
        <MyGarden dataBoard={dataBoard} />
      </div>
      <div className="garden__right">
        <Weather />
        <Operations data={data} dataBoard={dataBoard} />
      </div>
    </div>
  );
};

Garden.propTypes = {
};

export default Garden;
