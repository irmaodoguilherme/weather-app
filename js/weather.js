const apiKey = 'VnifBChoxR7eXY9uZayjHkHkEkLtejjt'
const baseURL = 'https://dataservice.accuweather.com/'

const getCloseIcon = () => `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='size-6'>
    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
  </svg>`

const getErrorMessage = errorName => {
  const errorTypes = {
    'TypeError': 'Algum valor no app não está como o esperado.'
  }

  return errorTypes[errorName] || 'Erro desconhecido.'
}

const closeCityAlert = () => {
  const alertToBeClosed = document.querySelector('[data-js="city-alert"]')
  alertToBeClosed.remove()
}

const getAlert = ({ name, message }) => {
  const alertContainer = document.createElement('div')
  alertContainer.setAttribute('class', 'bg-darkred flex justify-center gap-4 max-w-fit mx-auto py-2 px-4 mb-4 darkredglow')
  alertContainer.setAttribute('data-js', 'city-alert')

  const alertText = document.createElement('p')
  alertText.textContent = `${name}: ${name === 'Error' ? message : getErrorMessage(name)}`

  const buttonCloseAlert = document.createElement('button')

  alertContainer.append(alertText, buttonCloseAlert)
  buttonCloseAlert.innerHTML = getCloseIcon('close')
  buttonCloseAlert.addEventListener('click', closeCityAlert)
  return alertContainer
}

const renderCityAlert = errorDetails => {
  const inputCityName = document.querySelector('[data-js="change-location"]')
  inputCityName.insertAdjacentElement('afterend', getAlert(errorDetails))
}

const getCityURL = cityName =>
  `${baseURL}locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`

const getWeatherURL = cityKey =>
  `${baseURL}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`

export const getCityData = cityName => fetchData(getCityURL(cityName))
export const getCityWeather = cityKey => fetchData(getWeatherURL(cityKey))

export const fetchData = async URL => {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error('Falha de conexão.')
    }

    const data = await response.json()

    if (!data.length) {
      throw new Error('Dados não encontrados.')
    }

    return data
  } catch ({ name, message }) {
    renderCityAlert({ name, message })
  }
}