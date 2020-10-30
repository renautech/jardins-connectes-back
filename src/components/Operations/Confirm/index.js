/* eslint-disable arrow-body-style */
import React from 'react';
import { toast, Slide } from 'react-toastify';

import './style.scss';

const Confirm = ({ boardName, onSubmit }) => {
  return (
    <div className="confirm">
      <button className="confirm__submit" type="submit">Confirmer</button>
    </div>
  );
};

export default Confirm;
