const show = (...els) => els.forEach(el => el.classList.remove('d-none'))
const hide = (...els) => els.forEach(el => el.classList.add('d-none'))

const updateWeatherDetails = (cityWeatherData, els) => {
    const { LocalizedName, WeatherIcon, WeatherText, Temperature, ptWeatherText, engWeatherText } =
        cityWeatherData
    const { Metric, Imperial } = Temperature
    const [
        imgCurrentWeather,
        spanCityName,
        buttonPtCurrentWeather,
        buttonEngCurrentWeather,
        buttonCelsius,
        buttonFahrenheit,
    ] = els

    spanCityName.textContent = LocalizedName
    buttonCelsius.textContent = `${Metric.Value} ºC`
    buttonFahrenheit.textContent = `${Imperial.Value} ºF`
    buttonPtCurrentWeather.textContent = ptWeatherText
    buttonEngCurrentWeather.textContent = engWeatherText
    imgCurrentWeather.src = `./src/weather/icons/${WeatherIcon}.svg`    
}

const updateTimeImage = ({ IsDayTime, imgDay, imgNight }) => {
    if (IsDayTime) {
        hide(imgNight)
        show(imgDay)
        return
    }

    hide(imgDay)
    show(imgNight)
}

const closeAlert = e => e.target.parentElement.classList.remove('fall')

export { show, updateWeatherDetails, updateTimeImage, closeAlert }