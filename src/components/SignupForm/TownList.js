import React from 'react';
import PropTypes from 'prop-types';

const TownList = ({ handleOnChange, signupValues, townList }) => {
  const towns = townList.map((town) => <option value={town.city} key={town.code}>{town.city}</option>);
  return (
    <div className="signupForm__element signupForm__element--townlist">
      <label htmlFor="town">Nom de la ville</label>
      <select
        name="town"
        id="town"
        onChange={handleOnChange}
        value={signupValues.town}
      >
        {towns}
      </select>
    </div>
  );
};

TownList.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  signupValues: PropTypes.object.isRequired,
  townList: PropTypes.array.isRequired,
};

export default TownList;
