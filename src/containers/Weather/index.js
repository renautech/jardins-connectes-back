import { connect } from 'react-redux';
import Weather from 'src/components/Weather';

import { getWeather } from 'src/actions/weather';

const mapStateToProps = (state) => ({
  weather: state.weather,
});

const mapDispatchToProps = (dispatch) => ({
  getWeather: (postcode) => {
    dispatch(getWeather(postcode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
