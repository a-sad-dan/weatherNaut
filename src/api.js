const queryURL = `https://api.weatherapi.com/v1/forecast.json?key=f06fbaa0fe1945cca9771323231811&q=New delhi&days=3&aqi=yes&alerts=yes`;
const forecastResponse = await fetch(queryURL, { mode: "cors" });

console.log(forecastResponse);