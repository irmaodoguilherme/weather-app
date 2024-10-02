const cityForm = document.querySelector('[data-js="change-location"]')

const handleFormSubmit = async e => {
  e.preventDefault()

  const { sanitize } = await import('./sanitize.js')

  const inputValue = sanitize(e.target.city.value.trim())

  if (!inputValue.length) {
    return
  }

  const { renderCityWeatherEl } = await import('./handleCityWeatherEl.js')

  localStorage.setItem('lastCitySearched', inputValue)
  renderCityWeatherEl(inputValue)
  cityForm.reset()
}

cityForm.addEventListener('submit', handleFormSubmit)