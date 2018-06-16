import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressus = cityData.list.map(weather => weather.main.pressure);
    const hums = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord

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
    return (
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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
