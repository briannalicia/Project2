import { useState } from 'react'
import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/search/current-weather/current-weather'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'

function App() {

  const handleOnSearchChange = (searchData) => {
   const [lat, lon] = searchData.value.split(" ");

   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)

  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather />
      </div>
      
    </>
  )
}

export default App
