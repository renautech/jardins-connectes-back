import { connect } from 'react-redux';
import Weather from 'src/components/Weather';

import { getWeather, getPostcode } from 'src/actions/weather';

const mapStateToProps = (state) => ({
  weather: state.weather,
  loading: state.weather.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (postcode) => {
    dispatch(getWeather(postcode));
  },
  getPostcode: () => {
    dispatch(getPostcode());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
