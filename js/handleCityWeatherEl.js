import { getCityData, getCityWeather } from "./weather.js"

const getCityWeatherInfo = async cityName => {
  const cityData = await getCityData(cityName)

  if (!cityData) {
    return cityData
  }

  const [{ Key, LocalizedName }] = cityData
  const [{ WeatherIcon, WeatherText, Temperature, IsDayTime }] =
    await getCityWeather(Key)

  return { LocalizedName, WeatherIcon, WeatherText, Temperature, IsDayTime }
}

const renderCityWeatherEl = async cityName => {
  const cityWeather = await getCityWeatherInfo(cityName)

  if (!cityWeather) {
    return cityWeather
  }

  const timeImg = document.querySelector('[data-js="time"]')
  const timeIconContainer = document.querySelector('[data-js="time-icon"]')
  const cityNameContainer = document.querySelector('[data-js="city-name"]')
  const cityWeatherContainer =
    document.querySelector('[data-js="city-weather"]')
  const cityTemperatureContainer =
    document.querySelector('[data-js="city-temperature"]')
  const { LocalizedName, WeatherIcon, WeatherText, Temperature, IsDayTime } =
    cityWeather
  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" class="absolute top-2/4 transformXY-50 max-w-20 bg-white rounded-4r time-icon"></img>`

  cityTemperatureContainer.textContent = Temperature.Metric.Value
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
  showCityWeatherEl()
}

const showCityWeatherEl = () => {
  const cityWeatherInfoContainer =
    document.querySelector('[data-js="city-weather-container"]')
  const isCityWeatherContainerHidden =
    cityWeatherInfoContainer.classList.contains('hidden')

  if (isCityWeatherContainerHidden) {
    cityWeatherInfoContainer.classList.remove('hidden')
  }
}

export { showCityWeatherEl, renderCityWeatherEl }