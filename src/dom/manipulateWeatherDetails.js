import { updateTimeImage, updateWeatherDetails, show } from './utils.js'

export const manipulateCityWeatherDetails =
    (cityWeatherData, els, timeContext, elsToShow) => {
        updateTimeImage(timeContext)
        updateWeatherDetails(cityWeatherData, els)
        show(...elsToShow)
    }