import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const TownList = ({ changeSignupFormValue, signupValues, townList }) => {
  const towns = townList.map((town) => <option value={town.city} key={town.code}>{town.city}</option>);
  let options = [];
  townList.map((town) => {
    //console.log("town " + town.city)
    options.push({value: town.city, label: town.city});
  });
  const handleOnChange = (selectedOption) => {
    console.log({ selectedOption });
    changeSignupFormValue(selectedOption.value, 'town');
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted #4A754F',
      color: '#223624',
      fontSize: '0.8rem',
    }),
 
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 1500ms';
  
      return { ...provided, opacity, transition };
    }
  }
  return (
    <div className="signupForm__element signupForm__element--townlist">
      <Select
        onChange={handleOnChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

TownList.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  signupValues: PropTypes.object.isRequired,
  townList: PropTypes.array.isRequired,
};

export default TownList;
