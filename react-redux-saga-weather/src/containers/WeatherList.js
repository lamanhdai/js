import React, {Component} from 'react'
import {connect} from 'react-redux';

class WeatherList extends Component {
  componentDidMount() {
    const {getWeatherList} = this.props;
    getWeatherList('');
  }
  render() {
    const {} = this.props;
    return(
      <div>
        
      </div>
    )
  }
}

export default WeatherList