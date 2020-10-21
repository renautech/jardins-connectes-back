/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

import Family from 'src/components/MyGarden/Family';

import './style.scss';

const MyGarden = ({ dataBoard }) => {
  const Families = dataBoard.map((family) => {
    return <Family type={family.name} img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThP4gFDgQdTU9TPf_yTOEcyPFC31nkX5qQlg&usqp=CAU" />;
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
  dataBoard: PropTypes.object.isRequired,
};

export default MyGarden;
