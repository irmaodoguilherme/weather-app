const cityForm = document.querySelector('[data-js="change-location"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const inputValue = e.target.city.value.trim()
  const { renderCityWeather } = await import('./renderCityWeather.js')
  const { showCityWeather } = await import('./showCityWeather.js')

  if (!inputValue.length) {
    return
  }

  localStorage.setItem('lastCitySearched', inputValue)
  renderCityWeather(inputValue)
  showCityWeather()
  cityForm.reset()
}

cityForm.addEventListener('submit', handleFormSubmit)