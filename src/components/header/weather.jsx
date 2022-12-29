import React from 'react';
import { useEffect, useState } from 'react';
import { apiCall } from '../../services/custom-hook'

// TODO: cache the weather for 4 hours wait for the response before showing weather data

function Weather() {
    const [weather, setWeather] = useState('loading...');
    const [weatherIcon, setWeatherIcon] = useState('http://openweathermap.org/img/wn/10d@2x.png')
    let icon;

    useEffect(() => {
        getWeatherDescription().then(weather => {
            setWeather(weather.description);
            setWeatherIcon("http://openweathermap.org/img/wn/"+ weather.icon +"@2x.png") ;
        });
    });

    return ( 
    <div className='mx-2 text-center d-flex flex-column justify-content-around'>
        <img className="weather-icon" src={weatherIcon} /> 
        <p>{weather}</p>
    </div> 
    );
  
}

function getWeatherDescription() {
    // TODO: put the cookie name into .env
    const api = process.env.REACT_APP_WEATHER_LINK + process.env.REACT_APP_WEATHER_KEY; 
    
    return apiCall(api).then((data) => {
      
      return data.weather[0];
    })
  }

export default Weather;