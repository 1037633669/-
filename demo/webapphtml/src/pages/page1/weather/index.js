import React, { Component } from 'react';

import sunny from '../../../img/sunny.png'
import cloudy from '../../../img/cloudy.png'
import rain from '../../../img/rain.png'
import snow from '../../../img/snow.png'
import thunderStorm from '../../../img/thunderStorm.png'
import './index.css'
class Pageone extends Component {

  render () {
    return (
      <div className='weatherbody'>
        {
          this.props.data.weather === 'sunny' &&
          <img src={sunny}></img>
        }
        {
          this.props.data.weather === 'cloudy' &&
          <img src={cloudy}></img>
        }
        {
          this.props.data.weather === 'rain' &&
          <img src={rain}></img>
        }
        {
          this.props.data.weather === 'snow' &&
          <img src={snow}></img>
        }
        {
          this.props.data.weather === 'thunderStorm' &&
          <img src={thunderStorm}></img>
        }
        <p>{this.props.data.temperature_now + '°'}</p>
        <p className='temperature'>
          <span>{this.props.data.temperature_daytime + '°'}</span>
          <span>{this.props.data.temperature_night + '°'}</span>
        </p>
        <p>{this.props.data.weather}</p>
      </div>
    );
  }
}
export default Pageone;