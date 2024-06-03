import { getCityWeatherInfo } from './getCityWeatherInfo.js'

export const renderCityWeather = async (inputValue) => {
  const timeImg = document.querySelector('[data-js="time"]')
  const timeIconContainer = document.querySelector('[data-js="time-icon"]')
  const cityNameContainer = document.querySelector('[data-js="city-name"]')
  const cityWeatherContainer =
    document.querySelector('[data-js="city-weather"]')
  const cityTemperatureContainer =
    document.querySelector('[data-js="city-temperature"]')
  const { LocalizedName, WeatherIcon, WeatherText, Temperature, IsDayTime } =
    await getCityWeatherInfo(inputValue)
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"></img>`

  cityTemperatureContainer.textContent = Temperature.Metric.Value
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
}