## Table of contents
- [How to access](#how-to-access)
- [How to use](#how-to-use)
- [Demo](#demo)
- [Technologies](#technologies)
- [Technical decisions](#technical-decisions)
- [Support](#support)
- [License](#license)

# Weather-app [🔝](#table-of-contents)
A **clean** and **responsive** weather application where you can **check real-time temperature and weather conditions** for any city.

## How to access [🔝](#table-of-contents)
You can access the application through [**here**](https://weather-app-gal.netlify.app/) or by clicking the link in the `about` section.

## Demo [🔝](#table-of-contents)
![image](/src/assets/preview.gif "application preview")

## How to use [🔝](#table-of-contents)
- Enter a city name in the input (e.g., *Viamão*) and press Enter.
- If the city is found, you’ll see:
  - The city name
  - The current weather condition in **Portuguese** and **English** (switchable)
  - The temperature in **Celsius** and **Fahrenheit** (switchable)
  - A contextual background image for **day** or **night**
  - A dynamic icon representing the weather
- The weather and temperature texts can be toggled by clicking the buttons.

> Tip: You can use cities from around the world.

## Technologies [🔝](#table-of-contents)
- HTML5, CSS3, modular JavaScript (ES Modules)
- Bootstrap 5 (for layout)
- AccuWeather API

## Technical decisions [🔝](#table-of-contents)
**Why modularize**? Improves code readability and maintenance. Each part (API, DOM, logic) is separated and easy to extend.

**Why use dynamic import**? I used it for event handlers so that code not immediately necessary is only loaded on demand — performance optimization.

**Why AccuWeather API**? Offers a reliable and free tier, including day/night detection, multilingual support, and consistent temperature formats.

**Why two languages (PT/EN)?** To practice handling multiple responses from APIs and to make the app friendlier for both English and Portuguese users.

**Why two units (Cº/Fº)?** To provide flexibility for international users. Not everyone is familiar with Celsius!

## Support [🔝](#table-of-contents)
You can contact me through [contatoguilherme83@gmail.com](mailto:contatoguilherme83@gmail.com).

I accept any recommendations regarding the application. I'd be happy to add a little piece of every new idea so another person could study it.

Any found bugs can and should be reported through the `issues` section.

## License [🔝](#table-of-contents)
This project is licensed under the [MIT License](/license.txt)