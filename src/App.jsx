import { useState } from 'react'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/search/current-weather/current-weather'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split(" ");

   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`)
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&exclude={part}&appid=${WEATHER_API_KEY}`)

   Promise.all([currentWeatherFetch, forecastFetch])
   .then(async (response) => {
    const weatherResponse = await response[0].json();
    const forecastResponse = await response[1].json();
    setCurrentWeather({ city: searchData.label, ...weatherResponse});
    setForecast({ city: searchData.label, ...forecastResponse});
   })
   .catch((err) => console.log(err));

  //  api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

  }

  console.log(currentWeather);
  console.log(forecast);

  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
      
    </>
  )
}

export default App
