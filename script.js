const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const weatherInfoSection = document.querySelector(".weather-info");
const notFoundSection = document.querySelector(".not-found-city");
const searchCitySection = document.querySelector(".search-city");

const apikey = '425d4fcfd0ede924cae065fb899dcded'

searchBtn.addEventListener("click", () => {
    if(cityInput.value.trim() != ''){
        
        updateWeatherInfo(cityInput.value)
        cityInput.value = '';
        cityInput.blur()
    }
    console.log(weatherData);
})
cityInput.addEventListener("keydown", (event) => {
     if(event.key =="Enter"&& cityInput.value.trim() != ''){ 
        updateWeatherInfo(cityInput.value)
        cityInput.value = '';
        cityInput.blur()
     }
    console.log(event);
    
})
async function getFetchDate(endPoint,city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`
    const response = await fetch(apiUrl)

    
    return await response.json()
}


async function updateWeatherInfo(city){
    const weatherData = await getFetchDate('weather', city)
    
    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection)
        return
    }
    showDisplaySection(weatherInfoSection)
}



function showDisplaySection(section){
    [weatherInfoSection, searchCitySection, notFoundSection].forEach(section => section.computedStyleMap.display ='none')

    section.style.display = 'flex'
}