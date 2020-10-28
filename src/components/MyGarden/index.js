/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Family from 'src/components/MyGarden/Family';

import Loader from 'src/components/Loader';

import './style.scss';

const MyGarden = ({
  getUserFamilies,
  userFamilies,
  isLogged,
  loading,
}) => {
  useEffect(() => {
    if (isLogged) {
      getUserFamilies();
    }
  }, []);

  console.log('user_families', userFamilies);

  if (userFamilies === []) {
    userFamilies = [{ name: 'Pas encore de plantations' }];
  }

  const Families = userFamilies.map((family) => {
    console.log(family);
    return <Family key={family.name} type={family.name} picture={family.picture} />;
  });

  return (
    <div className="mygarden">
      <h2 className="mygarden__title">Mon Jardin</h2>
      {!loading && (
        <div className="mygarden__families">
          {Families}
        </div>
      )}
      {loading && (
        <Loader />
      )}
    </div>
  );
};

MyGarden.propTypes = {
  getUserFamilies: PropTypes.func.isRequired,
  userFamilies: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyGarden;
