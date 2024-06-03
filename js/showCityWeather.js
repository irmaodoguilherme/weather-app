export const showCityWeather = () => {
  const cityWeatherInfoContainer =
    document.querySelector('[data-js="city-weather-container"]')
  const cityWeatherContainerIsHidden =
    cityWeatherInfoContainer.classList.contains('hidden')
    
  if (cityWeatherContainerIsHidden) {
    cityWeatherInfoContainer.classList.remove('hidden')
  }
}