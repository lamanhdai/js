import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/GoogleMap';
import {FETCH_WEATHER_REQUEST} from '../actions';

class WeatherList extends Component {
  componentDidMount() {
    const {getWeatherList} = this.props;
    getWeatherList('New york');
  }
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressus = cityData.list.map(weather => weather.main.pressure);
    const hums = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td>
          <GoogleMap className="googlemap" lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="red" />
        </td>
        <td>
          <Chart data={pressus} color="blue" />
        </td>
        <td>
          <Chart data={hums} color="grey" />
        </td>
      </tr>
    )
  }
  render() {
    const {fetching, weather, error} = this.props;
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {weather && this.renderWeather(weather) }
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    weather: state.weather,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherList: (city) => {
      dispatch({type: FETCH_WEATHER_REQUEST, payload: {city} })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);