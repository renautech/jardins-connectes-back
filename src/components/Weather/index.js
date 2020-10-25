/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.scss';

const Weather = ({ zipcode, getWeather, weather }) => {
  useEffect(() => {
    getWeather(zipcode);
  }, []);

  return (
    <div className="weather">
      <h2 className="weather__title">Météo</h2>
      <p className="weather__temp">{weather.name}</p>
      <p className="weather__name">{weather.temp}°C</p>
    </div>
  );
};

Weather.propTypes = {
  zipcode: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
};

export default Weather;
