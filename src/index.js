import './style.css'



// function to handle form submit
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('query').value;
    console.log(searchQuery);

    const forecastData = fetchForecastData(searchQuery);


}

async function fetchForecastData(query) {
    // Starting an api Call here
    const API_KEY = `f06fbaa0fe1945cca9771323231811`
    const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=yes`;

    const response = await fetch(queryURL, { mode: "cors" });
    console.log(response)
    const data = await response.json();
    // console.trace(data);

    updateContent(data);

    return data;


}


fetchForecastData('New Delhi')

// const forecastData = await fetchForecastData('New Delhi');



function updateContent(forecastData) {

    const cityName = document.getElementById('city-name');
    const countryName = document.getElementById('country-name');

    const day = document.getElementById('day');
    const date = document.getElementById('date');
    const time = document.getElementById('time');


    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const tempDesc = document.getElementById('temp-description');
    const feelsLike = document.getElementById('feels-like');


    cityName.textContent = forecastData.location.name;
    countryName.textContent = forecastData.location.country;

    const formattedDate = convertEpochTime(forecastData.location.localtime_epoch);
    // console.log(formattedDate);

    day.textContent = formattedDate.day
    date.textContent = formattedDate.date
    time.textContent = formattedDate.time

    console.table(forecastData)

    weatherIcon.src = forecastData.current.condition.icon;
    temperature.textContent = forecastData.current.temp_c;
    tempDesc.textContent = forecastData.current.condition.text;
    feelsLike.textContent = forecastData.current.feelslike_c;

    console.log(forecastData.current.feelslike_c)


    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const uvIndex = document.getElementById('uv-index');
    const visibility = document.getElementById('visibility');
    const cloudiness = document.getElementById('cloudiness');
    const chanceOfRain = document.getElementById('chance-of-rain');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const moonPhase = document.getElementById('moon-phase');


    wind.textContent = (forecastData.current.wind_kph + " " + forecastData.current.wind_dir);
    humidity.textContent = forecastData.current.humidity;
    uvIndex.textContent = forecastData.current.uv;
    visibility.textContent = forecastData.current.vis_km;
    cloudiness.textContent = forecastData.current.cloud;

    chanceOfRain.textContent = forecastData.forecast.forecastday[0].day.daily_chance_of_rain;

    sunrise.textContent = forecastData.forecast.forecastday[0].astro.sunrise;
    sunset.textContent = forecastData.forecast.forecastday[0].astro.sunset;

    moonPhase.textContent = forecastData.forecast.forecastday[0].astro.moon_phase;

}




function convertEpochTime(epochTime) {
    // Create a new Date object with the epoch time
    var date = new Date(epochTime * 1000); // Multiply by 1000 to convert seconds to milliseconds
    // 1) Convert epoch time to day
    var day = date.toLocaleString('en-us', { weekday: 'long' });
    // 2) Convert epoch time to date in format ddmmyy
    var dayOfMonth = ('0' + date.getDate()).slice(-2);
    var monthName = date.toLocaleString('en-us', { month: 'long' });
    var year = date.getFullYear().toString().slice(-2);
    var dateFormatted = dayOfMonth + ' ' + monthName + ' ' + year;
    // 3) Convert epoch time to time in AM/PM format
    var hours = date.getHours();
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0:00) as 12 AM
    var timeFormatted = hours + ':' + minutes + ' ' + ampm;
    return {
        day: day,
        date: dateFormatted,
        time: timeFormatted
    };
}
