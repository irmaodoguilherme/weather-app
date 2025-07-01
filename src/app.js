import { to } from './api/api.js'

const formFetchCityWeather = document.querySelector('[data-form=fetch-city-weather]')
const buttonCloseAlert = document.querySelector('[data-button=close-alert]')
export const tempButtons = [...document.querySelectorAll('[data-button=temp]')]
export const weatherButtons = [...document.querySelectorAll('[data-button=weather]')]
const buttonsArr = [weatherButtons, tempButtons]

const getEventHandler = (funcName, link, submit, arr = undefined) => {
    return async e => {
        if (submit) {
            e.preventDefault()
        }

        const [, module] = await to(import(`./${link}.js`))
        module[funcName](e, arr)
    }
}

buttonCloseAlert.addEventListener('click', getEventHandler('closeAlert', 'dom/utils'))

formFetchCityWeather.addEventListener(
    'submit',
    getEventHandler(
        'handleFormSubmit',
        'handlers/handleFormSubmit',
        true,
        buttonsArr
    )
)

buttonsArr.forEach(arr =>
    arr.forEach(button =>
        button.addEventListener(
            'click',
            getEventHandler(
                'showNextButton',
                'handlers/showNextButton',
                false,
                arr
            )
        )
    )
)