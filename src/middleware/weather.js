/* eslint-disable prefer-arrow-callback */
import axios from 'axios';
import { GET_WEATHER, saveWeather } from 'src/actions/weather';

const weather = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_WEATHER:
      axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${action.postcode},fr&units=metric&appid=92b2db89108d9224677d3e99c504c331`)
        .then(function (response) {
          // console.log("reponse de openweathermap : " + Object.getOwnPropertyNames(response.data))
          store.dispatch(saveWeather(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};

export default weather;
