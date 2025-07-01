import { handleError } from '../dom/handleError.js'

const apiKey = 'VnifBChoxR7eXY9uZayjHkHkEkLtejjt'
const baseUrl = 'https://dataservice.accuweather.com'

const to = promise => promise
    .then(response => [null, response])
    .catch(error => [error, null])

const fetchData = async promises => {
    const [error, response] = await to(Promise.all(promises))
    if (error) {
        handleError(`Erro: ${error}. Não foi possível obter os dados da cidade!`)
        return
    }

    const [errorJson, [ptResult, enResult = []]] = await to(Promise.all(response.map(url => url.json())))

    if(errorJson) {
        handleError(`Erro: ${errorJson}. Erro ao converter JSON`)
        return
    }
    
    if ((!ptResult || !ptResult.length) && (!enResult || !enResult.length)) {
        handleError(`Erro: Cidade não encontrada`)
        return
    }

    return [ptResult, enResult]
}

const getCityUrl = cityName => [
    `${baseUrl}/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}&language=pt-BR`
]

const getWeatherUrl = Key => [
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${apiKey}&language=pt-BR`,
    `${baseUrl}/currentconditions/v1/${Key}?apikey=${apiKey}&language=en-US`
]

const getData = async (check, cityName, Key) =>
    check
        ? await fetchData([fetch(getCityUrl(cityName))])
        : await fetchData(getWeatherUrl(Key).map(url => fetch(url)))

export { to, getData }