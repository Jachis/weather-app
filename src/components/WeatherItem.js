import React from 'react';
import {useState} from 'react';

const WeatherItem = ({ weather }) => {
const [isKelvin, setIsKelvin] = useState(true)
const changeUnit = () =>{
    if(isKelvin){
        setIsKelvin(false)
    } else {
        setIsKelvin(true)
    }
}

    return (
        <div className='Card'>
            <h3>{weather.name}, {weather.sys?.country}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            <h3>{isKelvin ? Math.round(weather.main?.temp - 273.15) + "° C" : Math.round(weather.main?.temp - 273.15) * 9/5 + 32 + "° F"}</h3>
            <h5>Temp. Max. : {isKelvin ? Math.round(weather.main?.temp_max - 273.15) + "° C" : Math.round(weather.main?.temp_max - 273.15) * 9/5 + 32 + "° F"}</h5>
            <h5>Temp. Min. : {isKelvin ? Math.round(weather.main?.temp_min - 273.15) + "° C" : Math.round(weather.main?.temp_min - 273.15) * 9/5 + 32 + "° F"}</h5>
            <h5>Humedad : {weather.main?.humidity}</h5>
            <button onClick={changeUnit}>Centígrados/Fahrenheit</button>

        </div>
    );
};

export default WeatherItem;