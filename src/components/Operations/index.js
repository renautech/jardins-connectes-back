/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const Operations = () => {
  return (
    <div className="operations">
      <h2 className="operations__title">Opérations</h2>
      <form action="" method="post">
        <label htmlFor="operation__types">
          <div className="operation__type">
            <select name="pets" id="pet-select">
              <option value="">Choisir une option</option>
              <option value="">Semer</option>
              <option value="">Labourer</option>
              <option value="">Traiter</option>
              <option value="">Planter</option>
            </select>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Operations;
