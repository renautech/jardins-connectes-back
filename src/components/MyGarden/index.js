/* eslint-disable arrow-body-style */
import React from 'react';

import Family from 'src/components/MyGarden/Family';

import './style.scss';

const MyGarden = () => {
  return (
    <div className="mygarden">
      <h2 className="mygarden__title">Mon Jardin</h2>
      <div className="mygarden__families">
        <Family type="Tomate" img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThP4gFDgQdTU9TPf_yTOEcyPFC31nkX5qQlg&usqp=CAU" />
      </div>
    </div>
  );
};

export default MyGarden;
