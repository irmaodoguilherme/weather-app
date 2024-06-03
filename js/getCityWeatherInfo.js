import { getCityData, getCityWeather } from './weather.js'

export const getCityWeatherInfo = async cityName => {
  const [{ Key, LocalizedName }] = await getCityData(cityName)
  const [{ WeatherIcon, WeatherText, Temperature, IsDayTime }] =
    await getCityWeather(Key)

  return { LocalizedName, WeatherIcon, WeatherText, Temperature, IsDayTime }
}