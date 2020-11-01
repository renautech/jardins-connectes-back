/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Zoom } from 'react-toastify';
import Loader from 'src/components/Loader';
import Family from './Family';
import EmptyBoard from './EmptyBoard';

import './style.scss';

const MyGarden = ({
  getUserFamilies,
  getUserEmptyBoards,
  getOperationTypes,
  getUserBoards,
  userFamilies,
  userEmptyBoards,
  isLogged,
  loading,
  setOperationListId,
}) => {
  useEffect(() => {
    if (isLogged) {
      getUserBoards();
      getUserFamilies();
      getUserEmptyBoards();
      getOperationTypes();
    }
  }, []);

  const handleOnClick = (id) => {
    console.log('setOperationListId', id);
    setOperationListId(parseInt(id, 10));
  };

  const Families = userFamilies.map((family) => {
    console.log('family', family);
    return (
      <Family
        key={family.name}
        type={family.name}
        handleOnClick={handleOnClick}
        id={family.id}
        picture={family.picture}
      />
    );
  });

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
  getOperationTypes: PropTypes.func.isRequired,
  getUserBoards: PropTypes.func.isRequired,
  setOperationListId: PropTypes.func.isRequired,
  userFamilies: PropTypes.array.isRequired,
  userEmptyBoards: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MyGarden;
