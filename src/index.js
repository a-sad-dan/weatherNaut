/* eslint-disable no-param-reassign */
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

function showLoader(show) {
	const loader = document.querySelector("#loader");
	const mainContent = document.querySelector("#main-content");
	if (show) {
		loader.classList.remove("hidden");
		mainContent.classList.add("hidden");
	} else {
		loader.classList.add("hidden");
		mainContent.classList.remove("hidden");
	}
}

function updateContent(forecastData) {
	const mainContent = document.querySelector("#main-content");
	const errorP = document.querySelector("#error-message");

	// Error handling
	if (forecastData.error) {
		errorP.classList.remove("hidden");
		errorP.textContent = forecastData.error.message;
		mainContent.classList.add("hidden");
		return;
	}

	// Remove Error P and show content
	errorP.classList.add("hidden");
	mainContent.classList.remove("hidden");
	
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

	// console.log(forecastData.current.feelslike_c);

	const wind = document.getElementById("wind");
	const windDirection = document.getElementById("wind-direction");
	const humidity = document.getElementById("humidity");
	const uvIndex = document.getElementById("uv-index");
	const visibility = document.getElementById("visibility");
	const cloudiness = document.getElementById("cloudiness");
	const chanceOfRain = document.getElementById("chance-of-rain");
	const sunrise = document.getElementById("sunrise");
	const sunset = document.getElementById("sunset");
	const moonPhase = document.getElementById("moon-phase");

	wind.textContent = `${forecastData.current.wind_kph}`;
	windDirection.textContent = `${forecastData.current.wind_dir}`;
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
		const dateData = convertEpochTime(
			forecastData.forecast.forecastday[i].date_epoch
		);
		row[0].textContent = dateData.day; // dayName
		row[1].textContent = forecastData.forecast.forecastday[i].day.maxtemp_c; // max temp
		row[2].textContent = forecastData.forecast.forecastday[i].day.mintemp_c; // min temp
		row[3].textContent = forecastData.forecast.forecastday[i].day.maxwind_kph; // wind
	}
}

// function to handle form submit
async function handleFormSubmit(e) {
	e.preventDefault();
	const searchQuery = document.getElementById("query").value;
	showLoader(true);
	localStorage.setItem("default", searchQuery);
	console.log("saved query", localStorage.getItem("default"));
	// console.log(searchQuery);

	const data = await fetchForecastData(searchQuery);
	showLoader(false);
	updateContent(data);
}

let defaultData;
if (localStorage.getItem("default")) {
	const query = localStorage.getItem("default");
	// console.log(query);
	defaultData = await fetchForecastData(query);
	updateContent(defaultData);
} else {
	// Setting default as new Delhi if nothing in local storage
	defaultData = await fetchForecastData("new delhi");
	updateContent(defaultData);
}

// Initially everything is metric
function toggleUnits() {
	const data = Array.from(document.querySelectorAll(".unit"));
	const metricSpeed = Array.from(document.querySelectorAll(".metric.speed"));
	const metricTemp = Array.from(document.querySelectorAll(".metric.temp"));

	const imperialSpeed = Array.from(
		document.querySelectorAll(".imperial.speed")
	);
	const imperialTemp = Array.from(document.querySelectorAll(".imperial.temp"));

	const visibility = document.getElementById("visibility");

	if (metricSpeed.length || metricTemp.length) {
		metricSpeed.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(value * 6.21371192) / 10;
			element.textContent = converted;
		});

		metricTemp.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(((value * 9) / 5 + 32) * 10) / 10;
			element.textContent = converted;
		});

		visibility.textContent = Math.round(visibility.textContent * 6.21371) / 10;
	}
	if (imperialSpeed.length || imperialTemp.length) {
		imperialSpeed.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round(value * 16.0934) / 10;
			element.textContent = converted;
		});
		// f to c
		imperialTemp.forEach((element) => {
			const value = element.textContent;
			const converted = Math.round((((value - 32) * 5) / 9) * 10) / 10;
			element.textContent = converted;
		});

		visibility.textContent = Math.round(visibility.textContent * 16.0934) / 10;
	}

	// console.log("data", data);
	data.forEach((element) => {
		element.classList.toggle("metric");
		element.classList.toggle("imperial");
	});
}

const unitBtn = document.getElementById("unit");
unitBtn.addEventListener("click", toggleUnits);

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
