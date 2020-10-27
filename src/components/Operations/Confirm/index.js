/* eslint-disable arrow-body-style */
import React from 'react';

import './style.scss';

const Confirm = ({ boardName, onSubmit }) => {
  console.log(boardName);
  return (
    <div className="confirm">
      <button className="confirm__submit" type="submit" onSubmit={onSubmit}>Confirmer</button>
    </div>
  );
};

export default Confirm;
