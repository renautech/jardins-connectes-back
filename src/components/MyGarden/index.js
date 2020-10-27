/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Family from 'src/components/MyGarden/Family';

import './style.scss';

const MyGarden = ({ getUserFamilies, isLogged }) => {
  console.log('generated');
  useEffect(() => {
    console.log('useeffect');
    if (isLogged) {
      getUserFamilies();
    }
  }, []);

  // const Families = dataBoard.map((family) => {
  //   return <Family key={family.name} type={family.name} img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThP4gFDgQdTU9TPf_yTOEcyPFC31nkX5qQlg&usqp=CAU" />;
  // });

  return (
    // <div className="mygarden">
    //   <h2 className="mygarden__title">Mon Jardin</h2>
    //   <div className="mygarden__families">
    //     {Families}
    //   </div>
    // </div>

    <div>test</div>
  );
};

MyGarden.propTypes = {
  getUserFamilies: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default MyGarden;
