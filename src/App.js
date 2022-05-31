import './App.css';
import WeatherItem from './components/WeatherItem'
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState({});


  useEffect( () => {    
  function success(pos) {
      var crd = pos.coords;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=698bf25e58408a988ce5954b3090cda9`)
      .then(res => {setWeather(res.data)} );
    };
    
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    
    navigator.geolocation.getCurrentPosition(success, error);
  
    console.log(weather)
  }, []);

  return (
    <div className={`App bckgrnd-${weather.weather?.[0].main}`}>
      <h1>Weather</h1>
      <WeatherItem weather={weather}/>
    </div>
  );
}

export default App;
