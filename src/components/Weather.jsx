import { useState } from "react"
import { countryList } from "./Countries.jsx"

const Weather = ({weatherInfo}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    console.log(weatherInfo)

    const kelvinToCelsius = (tempKelvin) => {
        return (tempKelvin-273.15).toFixed(1)
    }

    const kelvinToFahrenheit = (tempKelvin) =>{
        return ((tempKelvin-273.15)*(9/5)+32).toFixed(1)
    }

const handleChangeUnitTemp = () => {
    setIsCelsius(!isCelsius)
}

const resultTempConversion = isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo?.main.temp)

const simbolTempConversion = isCelsius ? " °C" :" °F"

const textTempConversion = isCelsius ? "Cambiar a °F" :"Cambiar °C"

  return (
    <section className=" text-center ">
        <h2 className="mt-4">{weatherInfo?.name}{", "} {countryList[`${weatherInfo?.sys.country}`]} </h2>
        <section className="grid gap-4 sm:grid-cols-[auto_auto]">
           
            {/* Superior */}
            <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center">
                <h3 className="col-span-2" > {weatherInfo?.weather[0].description} </h3>
                <span className="text-4xl">{resultTempConversion}{simbolTempConversion}</span>
                <div>
                    <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                </div>
            </section>
           
            {/* Inferior */}
            <section className="bg-white/40 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1 ">
                <article className="flex gap-4 items-center">
                    <div className="w-[18px]">
                        <img src={"/images/wind.png"} alt="" />
                    </div>
                    <span>{(weatherInfo?.wind.speed*(3600/1000)).toFixed(2)}{" Km/h"}</span>
                </article>
                <article className="flex gap-4 items-center">
                    <div className="w-[18px]">
                        <img src="/images/humidity.png" alt="" />
                    </div>
                    <span>{weatherInfo?.main.humidity}{" %"}</span>
                </article>
                <article className="flex gap-4 items-center">
                    <div className="w-[18px]">
                        <img src="/images/preassure.png" alt="" />
                    </div>
                    <span>{weatherInfo?.main.pressure}{" hPa"}</span>
                </article>
            </section>
        </section>

        <button onClick={handleChangeUnitTemp} className="mt-4 bg-white/40 text-black p-2 rounded-2xl">
            {textTempConversion}
        </button>
    </section>
  )
}

export default Weather