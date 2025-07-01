import { getData } from '../api/api.js'
import { manipulateCityWeatherDetails } from '../dom/manipulateWeatherDetails.js'
import { weatherButtons, tempButtons } from '../app.js'

export const handleFormSubmit = async e => {
    const city = e.target.city.value.trim()
    if (!city.length) {
        return
    }

    const cityData = await getData(true, city)
    if (!cityData) {
        return
    }

    const imgCurrentWeather = document.querySelector('[data-img=current-weather]')
    const spanCityName = document.querySelector('[data-span=city-name]')
    const sectionWeatherDetails = document.querySelector('[data-section=weather-details]')
    const imgDay = document.querySelector('[data-img=day]')
    const imgNight = document.querySelector('[data-img=night]')

    const [[{ Key, LocalizedName }]] = cityData
    const [[{
        IsDayTime,
        WeatherIcon,
        WeatherText: ptWeatherText,
        Temperature
    }],
        [{
            WeatherText: engWeatherText
        }]] = await getData(false, undefined, Key)

    const cityWeather = {
        LocalizedName,
        IsDayTime,
        WeatherIcon,
        ptWeatherText,
        engWeatherText,
        Temperature
    }

    const domEls = [
        imgCurrentWeather,
        spanCityName,
        ...weatherButtons,
        ...tempButtons,
        sectionWeatherDetails
    ]

    const domElsToShow = domEls.filter(el =>
        el.textContent !== '0 ºF' && el.textContent !== 'English weather')
    const timeContext = { IsDayTime, imgDay, imgNight }

    manipulateCityWeatherDetails(cityWeather, domEls, timeContext, domElsToShow)
}