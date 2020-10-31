/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from 'src/components/Loader';

import './style.scss';

const Weather = ({
  getWeather,
  weather,
  loading,
  getPostcode
}) => {
  useEffect(() => {
    getPostcode();
  }, []);

  return (
    <div className="weather">
      <h2 className="weather__title">Météo</h2>
      {!loading && (
        <div className="weather__detail">
          <img className="weather__icon" src={weather.icon} alt=""/>
          <span className="weather__temp">{weather.name}</span>
          <span className="weather__name">{weather.temp}°C</span>
          <span className="weather__name">humidité {weather.humidity}%</span>
        </div>
      )}
      {loading && (
        <Loader />
      )}
    </div>
  );
};

Weather.propTypes = {
  getWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Weather;
