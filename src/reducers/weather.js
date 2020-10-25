// import { SAVE_RECIPES } from 'src/actions/recipes';

import { SAVE_WEATHER } from 'src/actions/weather';

export const initialState = {
  name: '',
  temp: '',
};

const weather = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_WEATHER:
      return {
        ...state,
        name: action.weather.name,
        temp: action.weather.main.temp,
      };
    default:
      return state;
  }
};

export default weather;
