import React from 'react';

import MyGarden from 'src/components/MyGarden';
import Weather from 'src/components/Weather';
import Operations from 'src/components/Operations';

import './style.scss';

const Garden = ({ data, dataBoard }) => {
  console.log('garden loaded');
  return (
    <div className="garden">
      <div className="garden__left">
        <MyGarden />
      </div>
      <div className="garden__right">
        <Weather zipcode="69400" />
        <Operations data={data} dataBoard={dataBoard}/>
      </div>
    </div>
  );
};

export default Garden;
