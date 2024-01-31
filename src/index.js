import fetchForecastData from "./api";
import "./style.css";

function convertEpochTime(epochTime) {
	// Create a new Date object with the epoch time
	const date = new Date(epochTime * 1000); // Multiply by 1000 to convert seconds to milliseconds
	// 1) Convert epoch time to day
	const day = date.toLocaleString("en-us", { weekday: "long" });
	// 2) Convert epoch time to date in format ddmmyy
	const dayOfMonth = `0${date.getDate()}`.slice(-2);
	const monthName = date.toLocaleString("en-us", { month: "long" });
	const year = date.getFullYear().toString().slice(-2);
	const dateFormatted = `${dayOfMonth} ${monthName} ${year}`;
	// 3) Convert epoch time to time in AM/PM format
	let hours = date.getHours();
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const ampm = hours >= 12 ? "PM" : "AM";
	hours %= 12;
	hours = hours || 12; // Handle midnight (0:00) as 12 AM
	const timeFormatted = `${hours}:${minutes} ${ampm}`;
	return {
		day,
		date: dateFormatted,
		time: timeFormatted,
	};
}

function updateContent(forecastData) {
	const cityName = document.getElementById("city-name");
	const countryName = document.getElementById("country-name");

	const day = document.getElementById("day");
	const date = document.getElementById("date");
	const time = document.getElementById("time");

	const weatherIcon = document.getElementById("weather-icon");
	const temperature = document.getElementById("temperature");
	const tempDesc = document.getElementById("temp-description");
	const feelsLike = document.getElementById("feels-like");

	cityName.textContent = forecastData.location.name;
	countryName.textContent = forecastData.location.country;

	const formattedDate = convertEpochTime(forecastData.location.localtime_epoch);
	// console.log(formattedDate);

	day.textContent = formattedDate.day;
	date.textContent = formattedDate.date;
	time.textContent = formattedDate.time;

	console.table(forecastData);

	weatherIcon.src = forecastData.current.condition.icon;
	temperature.textContent = forecastData.current.temp_c;
	tempDesc.textContent = forecastData.current.condition.text;
	feelsLike.textContent = forecastData.current.feelslike_c;

	console.log(forecastData.current.feelslike_c);

	const wind = document.getElementById("wind");
	const humidity = document.getElementById("humidity");
	const uvIndex = document.getElementById("uv-index");
	const visibility = document.getElementById("visibility");
	const cloudiness = document.getElementById("cloudiness");
	const chanceOfRain = document.getElementById("chance-of-rain");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
	const moonPhase = document.getElementById("moon-phase");

	wind.textContent = `${forecastData.current.wind_kph} ${forecastData.current.wind_dir}`;
	humidity.textContent = forecastData.current.humidity;
	uvIndex.textContent = forecastData.current.uv;
	visibility.textContent = forecastData.current.vis_km;
	cloudiness.textContent = forecastData.current.cloud;

	chanceOfRain.textContent =
		forecastData.forecast.forecastday[0].day.daily_chance_of_rain;

	sunrise.textContent = forecastData.forecast.forecastday[0].astro.sunrise;
	sunset.textContent = forecastData.forecast.forecastday[0].astro.sunset;

	moonPhase.textContent = forecastData.forecast.forecastday[0].astro.moon_phase;


	// Rendering the forecast info
	const forecastsDiv = document.getElementById("forecasts");


	for (let i = 0; i < 3; i += 1) {
		const row = forecastsDiv.querySelectorAll(`[data-day = "${i}"]`);
		const dateData = convertEpochTime(forecastData.forecast.forecastday[i].date_epoch);
		row[0].textContent = dateData.day// dayName
		row[1].textContent = forecastData.forecast.forecastday[i].day.maxtemp_c // max temp
		row[2].textContent = forecastData.forecast.forecastday[i].day.mintemp_c // min temp
		row[3].textContent = forecastData.forecast.forecastday[i].day.maxwind_kph // wind
	}
}


// function to handle form submit
async function handleFormSubmit(e) {
	e.preventDefault();
	const searchQuery = document.getElementById("query").value;
	console.log(searchQuery);

	const data = await fetchForecastData(searchQuery);

	updateContent(data);
}




const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

