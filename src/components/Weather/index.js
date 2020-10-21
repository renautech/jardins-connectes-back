/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.scss';

const Weather = ({ zipcode }) => {
  const [nameWeather, setName] = useState('');
  const [tempWeather, setTemp] = useState('');

  const fetchWeather = axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&units=metric&appid=92b2db89108d9224677d3e99c504c331`)
    .then(function (response) {
      setName(response.data.name);
      setTemp(response.data.main.temp);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="weather">
      <h2 className="weather__title">Météo</h2>
      <p className="weather__temp">{tempWeather} °C</p>
      <p className="weather__name">{nameWeather}</p>
    </div>
  );
};

Weather.propTypes = {
  zipcode: PropTypes.string.isRequired,
};

export default Weather;
