import { getErrorMessage } from './getErrorMessage.js'

const apiKey = '?apikey=VnifBChoxR7eXY9uZayjHkHkEkLtejjt'
const baseURL = 'http://dataservice.accuweather.com/'

const getCityURL = cityName =>
  `${baseURL}locations/v1/cities/search${apiKey}&q=${cityName}`
const getWeatherURL = cityKey =>
  `${baseURL}currentconditions/v1/${cityKey}${apiKey}&language=pt-br`

export const getCityData = cityName => fetchData(getCityURL(cityName))
export const getCityWeather = cityKey => fetchData(getWeatherURL(cityKey))

export const fetchData = async URL => {
  const response = await fetch(URL)
  const data = await response.json()
  const isResponseNotOK = !response.ok

  if (isResponseNotOK) {
    const errorCode = response.status
    console.log(getErrorMessage(errorCode))
    return
  }

  if (!data.length) {
    console.log('No city has been found')
    return
  }

  return data
}