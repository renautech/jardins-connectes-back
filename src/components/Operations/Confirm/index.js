/* eslint-disable arrow-body-style */
import React from 'react';
import { toast } from 'react-toastify';

import './style.scss';

const Confirm = ({ boardName, onSubmit }) => {
  console.log(boardName);

  const notification = () => {
    console.log('yay');
    toast.success('Requête envoyée', {
      position: 'bottom-right',
      transition: Slide,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="confirm">
      <button className="confirm__submit" onClick={notification} type="submit">Confirmer</button>
    </div>
  );
};

export default Confirm;
