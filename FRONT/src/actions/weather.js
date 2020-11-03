export const GET_WEATHER = 'GET_WEATHER';
export const SAVE_WEATHER = 'SAVE_WEATHER';
export const GET_POSTCODE = 'GET_POSTCODE';

export const getWeather = (postcode) => ({
  type: GET_WEATHER,
  postcode,
});

export const saveWeather = (weather) => ({
  type: SAVE_WEATHER,
  weather,
});

export const getPostcode = () => ({
  type: GET_POSTCODE,
});
