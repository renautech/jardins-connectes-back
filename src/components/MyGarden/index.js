/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom } from 'react-toastify';
import Family from './Family';
import EmptyBoard from './EmptyBoard';

import Loader from 'src/components/Loader';

import './style.scss';

const MyGarden = ({
  getUserFamilies,
  getUserEmptyBoards,
  userFamilies,
  userEmptyBoards,
  isLogged,
  loading,
}) => {
  useEffect(() => {
    if (isLogged) {
      getUserFamilies();
      getUserEmptyBoards();
    }
  }, []);
  // if (userFamilies === []) {
  //   userFamilies = [{ name: 'Pas encore de plantations' }];
  // }

  const Families = userFamilies.map((family) => {
    console.log(family);
    return <Family key={family.name} type={family.name} picture={family.picture} />;
  });

  // const EmptyBoards = userEmptyBoards.map((family) => {
  //   console.log(family);
  //   return <EmptyBoard key={family.name} type={family.name} picture={family.picture} />;
  // });

  return (
    <div className="mygarden">
      <h2 className="mygarden__title">Mon Jardin</h2>
      {!loading && (
        <div className="mygarden__families">
          {Families}
          {/* {EmptyBoards} */}
        </div>
      )}
      {loading && (
        <Loader />
      )}
      <ToastContainer
        transition={Zoom}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

MyGarden.propTypes = {
  getUserFamilies: PropTypes.func.isRequired,
  getUserEmptyBoards: PropTypes.func.isRequired,
  userFamilies: PropTypes.array.isRequired,
  userEmptyBoards: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyGarden;
