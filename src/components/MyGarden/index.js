/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Family from 'src/components/MyGarden/Family';

import './style.scss';

const MyGarden = ({ dataBoard, getMyGardenFamilies }) => {
  console.log('my garden render');

  // useEffect(() => {
  //   const myGardenFamilies = getMyGardenFamilies();
  // });

  // const Families = myGardenFamilies.map((family) => {
  //   return <Family key={family.name} type={family.name} img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThP4gFDgQdTU9TPf_yTOEcyPFC31nkX5qQlg&usqp=CAU" />;
  // });

  const Families = dataBoard.map((family) => {
    return <Family key={family.name} type={family.name} img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThP4gFDgQdTU9TPf_yTOEcyPFC31nkX5qQlg&usqp=CAU" />;
  });

  return (
    <div className="mygarden">
      <h2 className="mygarden__title">Mon Jardin</h2>
      <div className="mygarden__families">
        {Families}
      </div>
    </div>
  );
};

MyGarden.propTypes = {
  getMyGardenFamilies: PropTypes.func.isRequired,
};

export default MyGarden;
