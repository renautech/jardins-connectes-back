/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Weather = ({ getWeather, weather }) => {
  useEffect(() => {
     getWeather("01500");
  }, []);

  return (
    <div className="weather">
      <h2 className="weather__title">Météo</h2>
      <div className="weather__detail">
        <img className="weather__icon" src={weather.icon} alt=""/>
        <span className="weather__temp">{weather.name}</span>
        <span className="weather__name">{weather.temp}°C</span>
      </div>
    </div>
  );
};

Weather.propTypes = {
  zipcode: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
};

export default Weather;
