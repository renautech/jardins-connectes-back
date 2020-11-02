/* eslint-disable arrow-body-style */
import React from 'react';

import MyGarden from 'src/containers/MyGarden';
import Weather from 'src/containers/Weather';
import Operations from 'src/containers/Operations';

import './style.scss';

const Garden = () => {
  return (
    <div className="garden">
      <div className="garden__left">
        <MyGarden />
      </div>
      <div className="garden__right">
        <Weather />
        <Operations />
      </div>
    </div>
  );
};

export default Garden;
