import { SAVE_WEATHER, GET_WEATHER } from 'src/actions/weather';

export const initialState = {
  name: '',
  temp: '',
  icon: '',
  humidity: '',
  loading: true,
};

const weather = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WEATHER:
      return {
        ...state,
        name: action.weather.name,
        temp: action.weather.main.temp,
        humidity: action.weather.main.humidity,
        icon: `http://openweathermap.org/img/wn/${action.weather.weather[0].icon}@2x.png`,
        loading: false,
      };
    // case GET_WEATHER:
    //   return {
    //     ...state,
    //     postcode: action.postcode,
    //   }
    default:
      return state;
  }
};

export default weather;
