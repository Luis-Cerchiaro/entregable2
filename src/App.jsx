import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./components/weather";

function App() {

const [weatherInfo, setWeatherInfo] = useState(null)
//console.log(weatherInfo)

const success = (pos) => { // Funcion para geolocation
  console.log(pos)
  const lat = pos.coords.latitude
  const lon = pos.coords.longitude
  //console.log({lat, lon}) // Verificar en consola

  // from: "https://home.openweathermap.org/api_keys" 
  const API_KEY = "3f9093b9c3326ca304c5c2b1aded4520"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  // console.log(url) // Verificar la url en consola

  axios.get(url)
  .then(({data}) => setWeatherInfo(data))
  .catch((err) => console.log(err))
}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className=" bg-clouds min-h-screen text-black font-lato flex justify-center items-center px-4 bg-cover ">
      <Weather weatherInfo={weatherInfo} />
    </main>
  );
}


export default App;
